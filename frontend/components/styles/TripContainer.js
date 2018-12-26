import styled from 'styled-components';

const TripContainer = styled.div`    
    position: relative;
    padding: ${props => props.theme.padding};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    background-color: ${props => props.theme.offWhite};
`;

export default TripContainer;
