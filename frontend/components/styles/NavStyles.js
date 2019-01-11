import styled from 'styled-components';

const NavStyles = styled.ul`
    position: relative;
    display: flex;
    justify-self: end;
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-size: 1rem;
    a,
    button {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.5rem 1rem;
        letter-spacing: 0.5px;
        font-weight: 900;
        font-size: 0.7rem;
        background: none;
        white-space: nowrap;
        border: 0;
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 0.8rem;      
            padding: 0 15px;
        }
        &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background: ${props => props.theme.lightGrey};
            left: 0;
            top: 0;
            bottom: 0;
            transform: skew(-20deg);
        }
        &:after {
            content: '';
            position: absolute;
            height: 2px;
            width: 0;
            background: red;
            margin-top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.4s;
            transition-timing-function: cubic-bezier(1, -0.65, 0, 1.31);
        }
        &:hover,
        &:focus {
            outline: none;
            &:after {
                width: calc(100% - 40px);
            }
            @media (max-width: 700px) {
                width: calc(100% - 10px);
            }
        }
    }
    @media (max-width: 1300px) {
        justify-content: center;
        width: 100%;
        border-top: 1px solid ${props => props.theme.lightGrey};
        a {
            font-size: 0.6rem;
        }
    }
`;

export default NavStyles;
