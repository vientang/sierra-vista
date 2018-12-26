import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
    height: 4rem;
    overflow: hidden;
    padding: ${props => props.theme.padding};
    background-color: ${props => props.theme.offWhite};
    border-top: 1px solid ${props => props.theme.lightGrey};
    span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.5rem;
        font-weight: 200;
    }
    @media(max-width: 1300px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <span>Sierra Vista Expeditions, LLC</span>
        </StyledFooter>
    );
};

export default Footer;