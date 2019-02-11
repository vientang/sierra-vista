import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { safeCall } from '../utils';

const fadeIn = keyframes`
    0% {
        opacity: 0.45;
        transform: scale(0.9999);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const preloadImgWithPromise = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve();
        };
        image.src = src;
    });    
};

const StyledImageContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 800px;
    max-height: 800px;
`;

const StyledImage = styled.img`
    position: relative;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    margin: ${props => props.page === 'home' ? 0 : props.theme.imgCrop};
    box-shadow: ${props => props.theme.bs};
    animation: ${fadeIn} 1s ease-in-out;
    filter: contrast(1.1);
`;

class HeroImage extends React.PureComponent {
    static propTypes = {
        alt: PropTypes.string,
        base64: PropTypes.string,
        notifyImgLoaded: PropTypes.func,
        page: PropTypes.string,
        src: PropTypes.string,
        theme: PropTypes.shape(),
    }

    state = {
        loaded: false,
    }

    componentDidMount() {
        this.loadImage();
    }

    loadImage = async () => {
        try {
            await preloadImgWithPromise(this.props.src);
            this.setState(() => ({ loaded: true }));
            safeCall(this.props.notifyImgLoaded);
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        const { src, base64, alt } = this.props;
        const { loaded } = this.state;
        const currentSrc = loaded ? src : base64;

        return (
            <StyledImageContainer>
                <StyledImage {...this.props} src={currentSrc} alt={alt} />
            </StyledImageContainer>
        )
    }
};

export default HeroImage;
