import styled from 'styled-components';

const TripSidePanel = styled.div`
    flex: 0 1 30%;
    padding: 1rem;
    font-size: 0.9rem;    
    background-color: rgba(225, 225, 225, 0.4);
    p,
    ul {        
        margin: 0;
    }
    ul {
        list-style-type: circle;
    }
    p {
        font-weight: bold;
    }
    span,
    li {
        font-size: 0.8rem;
        line-height: normal;
    }
    .inclusion-title {
        font-style: italic;
    }
    .trip-dates {
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;

export default TripSidePanel;
