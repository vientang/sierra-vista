import styled from 'styled-components';

const StyledInfoCard = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: auto;
    padding: 1rem;
    color: ${props => props.theme.black};    
    font-size: 1rem;
    line-height: 1.5;
    box-sizing: border-box;
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 50%;
        left: 25%;
        border-bottom: 2px solid ${props => props.theme.lightGrey};
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    img {
        position: relative;
        width: 100%;
        height: auto;
        box-shadow: ${props => props.theme.bs};
    }
`;

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    p {
        margin: 0;
    }
    .info-title {
        font-family: ${props => props.theme.headingFont};
        font-size: 1.3rem;
    }
`;

const getImage = (imgSrc, title) => {
    return imgSrc ? (
        <ImageContainer>
            <img src={`static/images/${imgSrc}`} alt={title} />
        </ImageContainer>
    ) : null;
}

const getInfoSection = (text, title) => {
    return (
        <InfoContent>
            <p className="info-title">{title}</p>
            <p>{text}</p>
        </InfoContent>
    )
};

const InfoCard = ({ imagePosition, imgSrc, title, text }) => {
    return (
        <StyledInfoCard>
            {imagePosition === 'right' && getInfoSection(text, title)}
            {getImage(imgSrc, title)}
            {imagePosition === 'left' && getInfoSection(text, title)}
        </StyledInfoCard>
    )
}

export default InfoCard;