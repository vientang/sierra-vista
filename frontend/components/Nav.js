import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/cordillera-huayhuash">
                <a><span>Cordillera Huayhuash</span></a>
            </Link>
            <Link href="/chavin">
                <a><span>Chavin de Huantar</span></a>
            </Link>
            <Link href="/quilcayhuanca">
                <a><span>Quilcayhuanca Valley</span></a>
            </Link>
            <Link href="/ishinca">
                <a><span>Ishinca Valley</span></a>
            </Link>
            <Link href="/pisco">
                <a><span>Pisco</span></a>
            </Link>
            <Link href="/vallunaraju">
                <a><span>Vallunaraju</span></a>
            </Link>
            <Link href="/about-us">
                <a><span>About Us</span></a>
            </Link>
        </NavStyles>
    );
};

export default Nav;