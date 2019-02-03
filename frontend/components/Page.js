import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import theme from './theme';

/**
 * Injects global styles into the application
 * Just need to call it here
 */
injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html: {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'radnika_next';
        font-size: 1.2rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
    .ant-popover-menu {
        .ant-popover-inner-content {
            border-radius: 2px;
            background: ${theme.grey};
        }
        .ant-popover-content {
            .ant-popover-arrow {
                border-top-color: ${theme.grey};
                border-right-color: transparent;
                border-bottom-color: transparent;
                border-left-color: ${theme.grey};
            }
        }
    }
`;

const StyledPage = styled.div`
    color: ${props => props.theme.black};
    overflow: hidden;
`;

const InnerPage = styled.div`
    position: relative;
    max-width: 100%;
    top: ${props => props.theme.top};
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <InnerPage>
                        {this.props.children}
                    </InnerPage>
                    <Footer />
                </StyledPage>
            </ThemeProvider>            
        );
    }
}

export default Page;