import styled from 'styled-components';

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    font-family: ${props => props.theme.standardFont};
    line-height: 2;
    a:focus {
        text-decoration: none;
    }
    .menu-item-title,
    .menu-item-desc,
    .menu-list-item {
        padding: 0;
        color: ${props => props.theme.offWhite};
        &:hover,
        &:focus {
            color: ${props => props.theme.lightBlue};
            .menu-list-item-icon path {
                fill: ${props => props.theme.lightBlue};
            }
        }
    }
    .menu-item-desc,
    .menu-list-item {
        margin: 0 1rem;
        font-size: 0.75rem;
    }
    .menu-list-item {
        display: flex;
        align-items: center;
        svg {
            margin-right: 0.3rem;
        }
    }
    .menu-item-title {
        position: relative;
        margin: 0;
        font-size: 0.8rem;
        color: ${props => props.theme.lightBlue};
        text-transform: uppercase;
        font-weight: bold;
        &:after {
            content: '';
            position: absolute;
            top: 1.5rem;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${props => props.theme.lightGrey};
        }
    }
    .menu-list {
        list-style: none;
        margin: 0.5rem 0;
        padding: 0;
        line-height: 1.75;
    }
`;

export default NavMenu;