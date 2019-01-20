import styled from 'styled-components';

const ContentSection = styled.div`
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    h3,
    p,
    strong,
    .trip-section-title,
    .trip-section-sub-title {
        color: ${props => props.theme.mdGrey};
    }
    p,
    .trip-section-sub-title {
        padding: 0 2rem;
    }
    h3, h4 {
        font-family: ${props => props.theme.headingFont};
    }
    .trip-section-title {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        svg {
            margin-right: 0.5rem;
        }
    }
    .overview-section,
    .overview-content {
        padding: 0;
        margin: 1rem 0;
    }
    .basic-itinerary > p {
        margin: 0 0 0 1rem;
    }
    .trip-section-sub-title {
        line-height: normal;
        margin: 1.5rem 0 0.5rem;
    }
    .print-gear-list {
        color: ${props => props.theme.dkBlue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;
export default ContentSection;
