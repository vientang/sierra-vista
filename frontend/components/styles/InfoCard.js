import styled from 'styled-components';

const StyledInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    color: ${props => props.theme.grey};    
    font-size: 1.125rem;
    text-align: center;
    letter-spacing: 1.2px;
    line-height: 1.7;
    box-sizing: border-box;
    &:after {
        content: '';
        position: relative;
        height: 2px;
        width: calc(100% - 500px);
        background: ${props => props.theme.lightGrey};
        margin-top: 2rem;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    }
    p {
        margin: 0;
    }
    .info-title {
        font-size: 1.75rem;
    }
`;

const InfoCard = ({ title, text }) => {
    return (
        <StyledInfoCard>
            <p className="info-title">{title}</p>
            <p>{text}</p>
        </StyledInfoCard>
    )
}

export default InfoCard;