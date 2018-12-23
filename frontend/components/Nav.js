import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/items">
                <a>Cordillera Huayhuash</a>
            </Link>
            <Link href="/ollerostochavin">
                <a>Olleros to Chavin Cultural Trek</a>
            </Link>
            <Link href="/orders">
                <a>Quiilcayhuanca</a>
            </Link>
            <Link href="/me">
                <a>About Us</a>
            </Link>
        </NavStyles>
    );
};

export default Nav;