import styled from 'styled-components';

const ContentContainer = styled.div`
    width: 60%;
    min-width: 400px;
    font-size: 0.9rem;
    margin: 0 3rem 2rem 0;
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
    box-sizing: border-box;
    h2 {
        font-family: ${props => props.theme.headingFont};
    }
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export default ContentContainer;