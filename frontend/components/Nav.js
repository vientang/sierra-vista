import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/cordillera-huayhuash">
                <a>Cordillera Huayhuash</a>
            </Link>
            <Link href="/chavin">
                <a>Chavin de Huantar</a>
            </Link>
            <Link href="/quilcayhuanca">
                <a>Quilcayhuanca Valley</a>
            </Link>
            <Link href="/ishinca">
                <a>Ishinca Valley</a>
            </Link>
            <Link href="/pisco">
                <a>Pisco</a>
            </Link>
            <Link href="/vallunaraju">
                <a>Vallunaraju</a>
            </Link>
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
        </NavStyles>
    );
};

export default Nav;