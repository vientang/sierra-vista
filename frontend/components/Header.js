import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

const LogoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    a {
        line-height: 0;
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
    min-height: 5rem;    
    padding: 0 8rem;
    background-color: white;
    border-bottom: 10px solid ${props => props.theme.black};
    box-sizing: border-box;
    z-index: 2;
    h3 {
        font-size: 1rem; 
        line-height: normal;
        padding: 0 1rem;
        margin: 0;
    }
    a {
        &:focus {
            text-decoration: none;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader> 
            <LogoContainer>
                <Link href="/"><a><Logo size="50px" /></a></Link>
                <Link href="/"><a><h3>Sierra Vista Expeditions</h3></a></Link>
            </LogoContainer>
            <Nav />
        </StyledHeader>
    );
};

export default React.memo(Header);