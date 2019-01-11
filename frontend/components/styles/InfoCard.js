import styled from 'styled-components';

const StyledInfoCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    color: ${props => props.theme.black};    
    font-size: 1rem;
    line-height: 1.5;
    box-sizing: border-box;
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
    padding: 2rem ${props => props.imagePosition === 'right' ? '2rem' : 0} 2rem ${props => props.imagePosition === 'left' ? '2rem' : 0};
    text-align: ${props => props.imagePosition};
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

const getInfoSection = (text, title, imagePosition) => {
    return (
        <InfoContent imagePosition={imagePosition}>
            <p className="info-title">{title}</p>
            <p>{text}</p>
        </InfoContent>
    )
};

const InfoCard = ({ imagePosition, imgSrc, title, text }) => {
    return (
        <StyledInfoCard>
            {imagePosition === 'right' && getInfoSection(text, title, imagePosition)}
            {getImage(imgSrc, title)}
            {imagePosition === 'left' && getInfoSection(text, title, imagePosition)}
        </StyledInfoCard>
    )
}

export default InfoCard;