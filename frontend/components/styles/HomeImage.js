import styled from 'styled-components';

const TripImage = styled.img`    
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    box-shadow: ${props => props.theme.bs};
    filter: brightness(80%); 
`;

export default TripImage;
