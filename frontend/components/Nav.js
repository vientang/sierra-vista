import React from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import NavMenu from './NavMenu';
import NavStyles from './NavStyles';

const menu = (
    <NavMenu>
        <Link href="/apply">
            <a><span>Trip application</span></a>
        </Link>
        <Link href="/gear-shop">
            <a><span>Gear shop</span></a>
        </Link>
    </NavMenu>
);

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
                <a className="nav-about-us">
                    <Popover content={menu} placement="bottomRight" trigger="hover" mouseEnterDelay={0}>
                        <span>About Us</span>
                    </Popover>
                </a>
            </Link>
        </NavStyles>
    );
};

export default Nav;