import styled from 'styled-components';

const TripSidePanel = styled.div`
    flex: 0 1 30%;
    padding: ${props => props.paddingTop ? props.paddingTop : '1rem'} 1.5rem;
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
    .trip-dates,
    .staff-desc {
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .staff-heading,
    .staff-title {
        margin-top: 0.5rem;
    }
    .staff-desc {
        margin: 1rem 0;
    }
`;

export default TripSidePanel;
