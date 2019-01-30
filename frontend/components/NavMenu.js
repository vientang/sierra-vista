import styled from 'styled-components';

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.standardFont};
    line-height: 1.75;
`;

export default NavMenu;