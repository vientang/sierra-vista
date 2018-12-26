import styled from 'styled-components';

const TripSidePanel = styled.div`
    flex: 0 1 30%;
    padding: 1rem;
    font-size: 0.9rem;    
    background-color: ${props => props.theme.lightGrey};

    ul {
        list-style-type: none;
        margin: 0;
    }
`;

export default TripSidePanel;
