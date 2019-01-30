import styled from 'styled-components';

const TripHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    transform: translateY(-50px);
    background: white;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    .overview-title {
        width: 50%;
        max-width: 50%;
        margin: 0;
        font-family: ${props => props.theme.headingFont};
        font-size: calc(0.4rem + 0.55vw);
        text-transform: uppercase;
        color: ${props => props.theme.black};
    }
`;

export default TripHeader;
