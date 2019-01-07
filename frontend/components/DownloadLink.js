import React from 'react';
import Link from 'next/link';

const DownloadLink = ({ className, linkText, text, url }) => (
    <p className={className}>
        {text}
        <Link href={url}>
            <a className="print-gear-list" target="__blank">{linkText}</a>
        </Link>
    </p>
);

export default DownloadLink;