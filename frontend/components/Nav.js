import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/cordillera-huayhuash">
                <a>Cordillera Huayhuash</a>
            </Link>
            <Link href="/ollerostochavin">
                <a>Olleros to Chavin Cultural Trek</a>
            </Link>
            <Link href="/quiilcayhuanca">
                <a>Quiilcayhuanca</a>
            </Link>
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
        </NavStyles>
    );
};

export default Nav;