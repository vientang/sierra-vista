import styled from 'styled-components';

const RentalCartPanel = styled.div`
    position: relative;
    padding: 2rem 1rem;
    h3 {
        margin: 1rem 0;
        line-height: normal;
    }
    p {
        font-size: 0.8rem;
        font-weight: normal;
        color: ${props => props.theme.black};
    }
    .rental-agreement-link {
        color: ${props => props.theme.grey};
        font-size: 0.8rem;
        font-weight: normal;
        line-height: normal;
        margin: 1rem 0;
        padding: 0;
    }
`;

export default RentalCartPanel;