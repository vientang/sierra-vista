import styled from 'styled-components';

const ContentSection = styled.div`
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;
export default ContentSection;
