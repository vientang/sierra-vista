import styled from 'styled-components';

const RentalCartList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    a,
    p {
        font-size: 0.8rem;
        font-weight: normal;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
`;

export default RentalCartList;