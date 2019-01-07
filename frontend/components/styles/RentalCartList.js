import styled from 'styled-components';

const RentalCartList = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    a,
    span {
        font-family: ${props => props.theme.standardFont};
        font-size: 0.8rem;
        letter-spacing: 1.2px;
        line-height: normal;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
`;

export default RentalCartList;