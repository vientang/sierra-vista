import styled from 'styled-components';

const ContentSection = styled.div`
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    p,
    .trip-section-sub-title {
        padding: 0 2rem;
    }
    .trip-section-title {
        display: flex;
        align-items: center;
        svg {
            margin-right: 0.5rem;
        }
    }
    .overview-section {
        padding: 0;
    }
    .basic-itinerary > p {
        margin: 0 0 0 1rem;
    }
    .trip-section-sub-title {
        color: ${props => props.theme.mdGrey};
        line-height: normal;
        margin: 2rem 0 0;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;
export default ContentSection;
