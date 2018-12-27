import styled from 'styled-components';

const ItemContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    min-width: 24rem;
    min-width: 24rem; 
    p {
        font-size: 0.8rem;
        line-height: normal;
        font-weight: 300;
        flex-grow: 1;
        padding: 0 1rem;
        margin: 0.3rem 0;
    }
    .buttonList {
        display: grid;
        width: 100%;
        border-top: 1px solid ${props => props.theme.lightGrey};
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 1px;
        background: ${props => props.theme.lightGrey};
        & > * {
        background: white;
        border: 0;
        font-size: 1rem;
        padding: 1rem;
        }
    }
`;

export default ItemContent;
