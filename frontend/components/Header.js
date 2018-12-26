import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

const Logo = styled.h1`
    font-size: 1rem;
    margin: 1rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background-color: ${props => props.theme.blue};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media(max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    position: fixed;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    top: 0;
    width: 100%;
    max-width: 100%;
    background-color: white;
    border-bottom: 10px solid ${props => props.theme.black};
    z-index: 2;
    @media(max-width: 1300px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <Link href="/">
                    <a>Sierra</a>                
                </Link>
            </Logo>
            <Nav />      
        </StyledHeader>
    );
};

export default Header;