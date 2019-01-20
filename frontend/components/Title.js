import styled from 'styled-components';

const Title = styled.h3`
    font-family: ${props => props.theme.headingFont};
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    padding: ${props => props.padding ? props.padding : 0};
    width: ${props => props.width ? props.width : 0};
`;

export default Title;
