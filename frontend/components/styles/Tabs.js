import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    border-top: 1px solid ${props => props.theme.lightGrey};
    padding-top: 1rem;
    .active-tab {
        font-weight: bold;
        color: ${props => props.theme.blue};
    }
    span {
        font-family: ${props => props.theme.standardFont};
        font-size: 0.8rem;
            
        margin-right: 2rem;
        cursor: pointer;
    }
    span:hover {
        color: ${props => props.theme.blue};
    }
`;

export default Tabs;