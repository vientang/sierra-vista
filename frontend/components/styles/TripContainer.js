import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0.25;
    }

    100% {
        opacity: 1;
    }
`;

const TripContainer = styled.div`
    position: relative;
    padding: 0 8rem;
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
    background-color: white;
    animation: ${fadeIn} 1s ease-in-out;
`;

export default TripContainer;
