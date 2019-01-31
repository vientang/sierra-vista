import styled from 'styled-components';

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.standardFont};
    line-height: 1.75;
    span {
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

export default NavMenu;