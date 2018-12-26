import styled from 'styled-components';

const TripHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    h2 {
        margin: 0;
    }
`;

export default TripHeader;
