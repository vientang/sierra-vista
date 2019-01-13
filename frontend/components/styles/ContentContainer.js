import styled from 'styled-components';

const ContentContainer = styled.div`
    width: 60%;
    font-size: 0.9rem;
    margin-bottom: 5rem;
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
`;

export default ContentContainer;