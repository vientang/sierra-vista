import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0.75;
    }

    50% {
        opacity: 0.95;
    }

    100% {
        opacity: 1;
    }
`;

const HeroImage = styled.img`
    background-size: cover;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    box-shadow: ${props => props.theme.bs};
    animation: ${fadeIn} 0.5s ease-in;
    filter: brightness(90%); 
`;

export default HeroImage;
