import styled from 'styled-components';

const NavStyles = styled.ul`
    position: relative;
    display: flex;
    justify-self: end;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 100%;
    list-style: none;
    .nav-item {
        position: relative;
        margin: 0;
        padding: 0 1rem;
        color: ${props => props.theme.black};
        font-size: 0.75rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        line-height: normal;
        transition: transform 100ms ease-in-out, opacity 100ms ease-in-out, width 100ms ease-in-out;
        cursor: pointer;
        &:before {
            content: '';
            position: absolute;
            width: 1px;
            height: 100%;
            margin: auto 0;
            background: ${props => props.theme.lightGrey};
            left: 0;
            top: 0;
            bottom: 0;
        }
        &:after {
            content: '';
            position: absolute;
            height: 4px;
            width: 0;
            background: ${props => props.theme.lightBlue};
            margin-top: 1rem;
            left: 50%;
            opacity: 0;
            transform: translateX(-50%);
            transition: opacity 250ms ease-in-out, width 250ms ease-in-out;
            transition-timing-function: cubic-bezier(1, -0.65, 0, 1.31);
            z-index: -1;
        }
        &:hover,
        &:focus {
            transform: scale(1.1);
            outline: none;
            &:after {
                opacity: 1;
                width: calc(100% - 2rem);
            }
            @media (max-width: 700px) {
                opacity: 1;
                width: calc(100% - 1rem);
            }
        }
    }
`;

export default NavStyles;
