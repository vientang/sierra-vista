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
        h2 {
            display: inline;
            margin-right: 1rem;
            font-size: calc(0.6rem + 0.55vw);
            color: ${props => props.theme.black};
            text-transform: uppercase;
        }
        span {
            font-size: calc(0.5rem + 0.35vw);
            color: ${props => props.theme.mdGrey};
        }
    }
`;

export default TripHeader;
