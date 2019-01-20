import styled from 'styled-components';

const RentalCartList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    a,
    p {
        /* font-family: ${props => props.theme.standardFont}; */
        font-size: 0.8rem;
        font-weight: normal;
        letter-spacing: 1.2px;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
`;

export default RentalCartList;