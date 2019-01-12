import styled from 'styled-components';

const TripSidePanel = styled.div`
    flex: 0 1 30%;
    padding: 1rem 1.5rem;
    font-size: 0.9rem;    
    background-color: rgba(225, 225, 225, 0.4);
    p,
    ul {        
        margin: 0;
    }
    ul {
        list-style-type: disc;
    }
    p {
        font-weight: bold;
    }
    a::before {
        content: ' ';
    }
    span,
    li,
    .staff-desc {
        font-size: 0.8rem;
        line-height: 1.5;
    }
    span,
    small,
    li,
    .staff-title,
    .staff-desc {
        color: ${props => props.theme.mdGrey};
    }
    .inclusion-title {
        font-style: italic;
    }
    .trip-dates,
    .staff-desc {
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .staff-heading,
    .staff-name,
    .staff-title {
        line-height: normal;
    }
    .staff-name {
        font-size: 1.1rem;
    }
    .staff-desc {
        margin: 1rem 0;
    }
`;

export default TripSidePanel;
