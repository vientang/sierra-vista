import styled from 'styled-components';

const NavStyles = styled.ul`
    position: relative;
    display: flex;
    justify-self: end;
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-size: 1rem;
    a {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.5rem 1rem;
        color: ${props => props.theme.black};
        letter-spacing: 0.5px;
        font-size: 0.75rem;
        white-space: nowrap;        
        background: none;
        border: 0;
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 0.8rem;      
            padding: 0 15px;
        }
        &:before {
            content: '';
            position: absolute;
            width: 1px;
            height: 40%;
            margin: auto 0;
            background: ${props => props.theme.lightGrey};
            left: 0;
            top: 0;
            bottom: 0;
        }
        &:focus {
            text-decoration: none;
        }
        span {
            position: relative;
            transition: transform 100ms ease-in-out;
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
                transform: scale(1.15);
                outline: none;
                &:after {
                    opacity: 1;
                    width: calc(100% - 20px);
                }
                @media (max-width: 700px) {
                    opacity: 1;
                    width: calc(100% - 10px);
                }
            }
        }
    }
    .nav-about-us {
        &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: 40%;
            margin: auto 0;
            background: ${props => props.theme.dkBlue};
            left: 0;
            top: 0;
            bottom: 0;
        }
    }
    @media (max-width: 1300px) {
        justify-content: center;
        width: 100%;
        a {
            font-size: 0.7rem;
        }
    }
`;

export default NavStyles;
