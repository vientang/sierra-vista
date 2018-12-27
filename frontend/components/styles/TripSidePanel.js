import styled from 'styled-components';

const TripSidePanel = styled.div`
    flex: 0 1 30%;
    padding: 1rem;
    font-size: 0.9rem;    
    background-color: ${props => props.theme.lightGrey};
    p,
    ul {        
        margin: 0;
    }
    ul {
        list-style-type: none;
    }
    .print-gear-list {
        color: ${props => props.theme.blue};
    }
    .print-gear-list::before {
        content: ' ';
    }
`;

export default TripSidePanel;
