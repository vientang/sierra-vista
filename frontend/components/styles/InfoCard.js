import styled from 'styled-components';

const StyledInfoCard = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: auto;
    padding: 1rem;
    color: ${props => props.theme.grey};    
    font-size: 1rem;
    text-align: center;
    line-height: 1.7;
    border-bottom: 2px solid ${props => props.theme.lightGrey};
    box-sizing: border-box;
    p {
        margin: 0;
    }
    .info-title {
        font-size: 1.75rem;
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
    }
`;

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const InfoCard = ({ imgPosition, imgSrc, title, text }) => {
    return (
        <StyledInfoCard>
            {imgSrc && (
                <ImageContainer>
                    <img src={`static/images/${imgSrc}`} alt={title} />
                </ImageContainer>
            )}
            <InfoContent>
                <p className="info-title">{title}</p>
                <p>{text}</p>
            </InfoContent>
        </StyledInfoCard>
    )
}

export default InfoCard;