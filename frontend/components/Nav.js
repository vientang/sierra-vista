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
                <a>Olleros to Chavin</a>
            </Link>
            <Link href="/quiilcayhuanca">
                <a>Quiilcayhuanca</a>
            </Link>
            <Link href="/ishinca13">
                <a>Ishinca 13</a>
            </Link>
            <Link href="/ishinca14">
                <a>Ishinca 14</a>
            </Link>
            <Link href="/pisco">
                <a>Pisco</a>
            </Link>
            <Link href="/quilvalluna">
                <a>Quil Trek and Valluna Climb</a>
            </Link>
            <Link href="/about-us">
                <a>About Us</a>
            </Link>
        </NavStyles>
    );
};

export default Nav;