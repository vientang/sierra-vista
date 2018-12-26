import styled from 'styled-components';

const TripContainer = styled.div`    
    position: relative;
    padding: ${props => props.theme.padding};
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
    background-color: white;
`;

export default TripContainer;
