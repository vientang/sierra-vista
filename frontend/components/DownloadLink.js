import React from 'react';
import Link from 'next/link';

const DownloadLink = ({ linkText, text, url }) => (
    <span>
        {text}
        <Link href={url}>
            <a className="print-gear-list">{linkText}</a>
        </Link>
    </span>
);

export default DownloadLink;