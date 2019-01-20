import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    margin-bottom: 1rem;
    .active-tab {
        font-weight: bold;
        color: ${props => props.theme.black};
    }
    span {
        font-family: ${props => props.theme.standardFont};
        font-size: 0.9rem;
        margin-right: 2rem;
        transition: scale 150ms ease-in-out;
        cursor: pointer;
    }
    span:hover {
        transform: scale(1.1);
        color: ${props => props.theme.blue};
    }
`;

export default Tabs;