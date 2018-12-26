import styled from 'styled-components';

const HomePageImage = styled.img`    
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    box-shadow: ${props => props.theme.bs};
    filter: brightness(80%); 
`;

export default HomePageImage;
