import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * This file is used to change the initial server side rendered
 * document markup. Commonly used to implement server side rendering
 * for css-in-js libraries like styled-components. 
 * 
 * Prefetch inline styles on the server and renders initial page
 * with inline styles.
 */
class ServerDocument extends Document {
    /**
     * Next.js static method that is called before render()
     * @param {*} param0 
     */
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
        <html>
            <Head>{this.props.styleTags}</Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
        );
    }
}

export default ServerDocument;