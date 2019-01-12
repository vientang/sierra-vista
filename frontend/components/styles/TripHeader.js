import styled from 'styled-components';

const TripHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    h2 {
        width: 50%;
        max-width: 50%;
        margin: 0;
        font-family: ${props => props.theme.headingFont};
        font-size: calc(0.5rem + 0.75vw);
        color: ${props => props.theme.black};
    }
`;

export default TripHeader;
