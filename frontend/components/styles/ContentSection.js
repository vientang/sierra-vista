import styled from 'styled-components';

const ContentSection = styled.div`
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    .basic-itinerary > p {
        margin: 0 0 0 1rem;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;
export default ContentSection;
