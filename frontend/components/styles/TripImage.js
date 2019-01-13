import styled from 'styled-components';

const TripImage = styled.img`
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: ${props => props.theme.imgCrop};
    box-shadow: ${props => props.theme.bs};
    filter: contrast(1.1);
`;

export default TripImage;
