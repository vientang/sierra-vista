import React from 'react';
import Head from 'next/head';

/**
 * Add meta tags to site. Next.js handles the side effects.
 */
const Meta = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
            <title>Sierra Vista</title>
        </Head>
    );
}

export default Meta;