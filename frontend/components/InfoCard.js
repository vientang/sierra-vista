import styled from 'styled-components';
import { FoodIcon, GearIcon, GuideIcon, HospitalityIcon } from './icons';

const StyledInfoCard = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    color: ${props => props.theme.black};    
    font-size: 1rem;
    line-height: 1.5;
    box-sizing: border-box;
    .icon-right-align {
        margin-left: auto;
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
    padding: 0 3rem;
    text-align: ${props => props.imagePosition};
    p {
        margin: 0 0 0.5rem;
        font-size: 1rem;
    }
    .info-title {
        display: flex;
        align-items: center;
        font-family: ${props => props.theme.headingFont};
        font-size: 1.2rem;
        svg {
            margin-right: 1rem;
        }
    }
`;

const getImage = (imgSrc, title) => {
    return imgSrc ? (
        <ImageContainer>
            <img src={`static/images/${imgSrc}`} alt={title} />
        </ImageContainer>
    ) : null;
}

const getInfoSection = (text, title, imagePosition, sectionIcon) => {
    return (
        <InfoContent imagePosition={imagePosition}>            
            <p className="info-title">{sectionIcon}{title}</p>
            <p>{text}</p>
        </InfoContent>
    )
};

const getIcon = (name) => {
    switch(name) {
        case 'food': {
            return <FoodIcon size={28} className="icon-right-align" />;
        }            
        case 'gear': {
            return <GearIcon size={28} className="icon-right-align" />;
        }
        case 'guide': {
            return <GuideIcon size={28} />;
        }
        case 'hospitality': {
            return <HospitalityIcon size={28} />;
        }
        default: 
            return null;
    }
}
const InfoCard = ({ imagePosition, icon, imgSrc, title, text }) => {
    const sectionIcon = getIcon(icon);
    return (
        <StyledInfoCard>
            {imagePosition === 'right' && getInfoSection(text, title, imagePosition, sectionIcon)}
            {getImage(imgSrc, title)}
            {imagePosition === 'left' && getInfoSection(text, title, imagePosition, sectionIcon)}
        </StyledInfoCard>
    )
}

export default InfoCard;