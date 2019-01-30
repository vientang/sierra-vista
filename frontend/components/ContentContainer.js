import styled from 'styled-components';

const ContentContainer = styled.div`
    width: 60%;
    min-width: 400px;
    font-size: 0.9rem;
    margin: 0 3rem 5rem 0;
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
    h2 {
        font-family: ${props => props.theme.headingFont};
    }
`;

export default ContentContainer;