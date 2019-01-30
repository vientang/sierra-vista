import React from 'react';
import styled from 'styled-components';

const TripSidePanel = styled.div`
    position: ${props => props.fixed || props.scrollY > 790 ? 'fixed' : 'relative'};
    top: ${props => props.scrollY > 790 || props.fixed ? '75px' : null};
    right: ${props => props.scrollY > 790 || props.fixed ? '128px' : null};
    padding: 2rem;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '1rem'};
    width: 400px;
    max-width: 400px;
    min-height: 400px;
    font-size: 0.75rem;
    line-height: 1.5;
    background: linear-gradient(
        to right bottom, 
        rgba(208,243,251,0.25) 0%, 
        rgba(187,224,240,0.5) 50%, 
        rgba(176,222,237,0.25) 75%
    );
    transition: font 50ms ease-in-out;
    box-sizing: border-box;
    .side-panel-title {
        display: ${props => props.scrollY > 790 ? 'block' : 'none'};
        opacity: ${props => props.scrollY > 790 ? '1' : '0.5'};
        margin: 0;
        padding-bottom: 1rem;
        width: 100%;
    }
    p,
    ul {
        margin: 0;
    }
    p {
        font-weight: bold;
    }
    a::before {
        content: ' ';
    }
    span,
    small,
    li {
        color: ${props => props.theme.mdGrey};
    }
    .print-gear-list {
        color: ${props => props.theme.dkBlue};
    }
`;
class SidePanel extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollY: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.detectScrollPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.detectScrollPosition);
    }
    
    detectScrollPosition = () => {        
        this.setState(() => ({ scrollY: window.scrollY }));
    }

    render() {
        const { children, fixed, paddingTop } = this.props;
        const { scrollY } = this.state;
        
        return (
            <TripSidePanel scrollY={scrollY} fixed={fixed} paddingTop={paddingTop}>
                {typeof children === 'function' ?
                    children({ scrollY }) :
                    children
                }
            </TripSidePanel>
        );
    }
}

export default SidePanel;
