import React from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import NavMenu from './NavMenu';
import NavStyles from './NavStyles';
import tripData from '../static/trip-data';

const getDateString = (dates) => {
    const start = dates[0].split(' ')[0];
    return new Date(start).toDateString();
}

const menu = (
    <NavMenu>
        <Link href="/apply">
            <a>
                <p className="menu-item-title">Trip application</p>
            </a>
        </Link>
        <ul className="menu-list">
            <li>
                <Link href="/static/rental_terms_release_of_liability.pdf">
                    <a className="menu-list-item">Rental Agreement</a>
                </Link>
            </li>
            <li>
                <Link href="/static/terms-and-conditions.pdf">
                    <a className="menu-list-item">Terms and Conditions</a>
                </Link>
            </li>
            <li>
                <Link href="/static/assumption-of-risk-release-of-liability.pdf">
                    <a className="menu-list-item">Assumption of Risk and Liability</a>
                </Link>
            </li>
        </ul>
        <Link href="/gear-shop">
            <a>
                <p className="menu-item-title">Gear shop</p>
            </a>
        </Link>
        <ul className="menu-list">
            <li>
                <Link 
                    href={{ 
                        pathname: '/gear-shop', 
                        query: { active: 'trekking' } 
                    }}
                >
                    <a className="menu-list-item">Trekking gear</a>
                </Link>
            </li>
            <li>
                <Link 
                    href={{ 
                        pathname: '/gear-shop', 
                        query: { active: 'climbing' } 
                    }}
                >
                    <a className="menu-list-item">Climbing gear</a>
                </Link>
            </li>
        </ul>
    </NavMenu>
);

const trekMenu = (
    <NavMenu>
        <Link href="/cordillera-huayhuash">
            <a>
                <p className="menu-item-title">Cordillera Huayhuash</p>
                <span className="menu-item-desc">{getDateString(tripData.huayhuash.dates)}</span>
            </a>
        </Link>
        <Link href="/chavin">
            <a>
                <p className="menu-item-title">Chavin de Huantar</p>
                <span className="menu-item-desc">Inquire for dates</span>
            </a>
        </Link>
        <Link href="/quilcayhuanca">
            <a>
                <p className="menu-item-title">Quilcayhuanca Valley</p>
                <span className="menu-item-desc">{getDateString(tripData.quilcayhuanca.dates)}</span>
            </a>
        </Link>
    </NavMenu>
);

const climbMenu = (
    <NavMenu>
        <Link href="/ishinca">
            <a>
                <p className="menu-item-title">Ishinca Valley</p>
                <span className="menu-item-desc">{getDateString(tripData.ishinca.dates)}</span>
            </a>
        </Link>
        <Link href="/pisco">
            <a>
                <p className="menu-item-title">Pisco</p>
                <span className="menu-item-desc">{getDateString(tripData.pisco.dates)}</span>
            </a>
        </Link>
        <Link href="/vallunaraju">
            <a>
                <p className="menu-item-title">Vallunaraju</p>
                <span className="menu-item-desc">{getDateString(tripData.vallunaraju.dates)}</span>
            </a>
        </Link>
    </NavMenu>
);

const Nav = () => {
    return (
        <NavStyles>
            <Popover
                content={trekMenu}
                placement="bottomRight"
                trigger="hover"
                mouseEnterDelay={0}
                overlayClassName="ant-popover-menu"
            >
                <li className="nav-item">Treks</li>
            </Popover>

            <Popover
                content={climbMenu}
                placement="bottomRight"
                trigger="hover"
                mouseEnterDelay={0}
                overlayClassName="ant-popover-menu"
            >
                <li className="nav-item">Climbs</li>
            </Popover>

            <Link href="/about-us">
                <Popover
                    content={menu}
                    placement="bottomRight"
                    trigger="hover"
                    mouseEnterDelay={0}
                    overlayClassName="ant-popover-menu"
                >
                    <a><li className="nav-item">About Us</li></a>
                </Popover>
            </Link>

        </NavStyles>
    );
};

export default Nav;