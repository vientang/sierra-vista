import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    margin-bottom: 1rem;
    .active-tab {
        font-weight: bold;
        color: ${props => props.theme.mdBlue};
    }
    span {
        font-family: ${props => props.theme.standardFont};
        font-size: 0.9rem;
        margin-right: 2rem;
        transition: transform 100ms ease-in-out;
        cursor: pointer;
    }
    span:hover {
        transform: scale(1.1);
    }
`;

export default Tabs;