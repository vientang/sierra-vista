import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import FooterNavStyles from './styles/FooterNavStyles';

const FooterImage = styled.img`
    position: absolute;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: -55% 0;
    box-shadow: ${props => props.theme.bs};
    filter: contrast(1.1) brightness(15%);
`;

const StyledFooter = styled.footer`
    position: relative;
    display: grid;
    grid-template-columns: 20% 20% 1fr;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    height: 10rem;
    bottom: 0;
    overflow: hidden;
    padding: ${props => props.theme.padding};
    background-color: ${props => props.theme.offWhite};
    border-top: 1px solid ${props => props.theme.lightGrey};
    box-sizing: border-box;
    @media(max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: flex-start;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterImage src="static/images/mountain-gear.jpg" alt="Photo by Blaise Vonlanthen on Unsplash" />
            <FooterNavStyles>
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
            </FooterNavStyles>
            <FooterNavStyles>
                <Link href="/ishinca14">
                    <a>Ishinca 14</a>
                </Link>
                <Link href="/pisco">
                    <a>Pisco</a>
                </Link>
                <Link href="/quilvalluna">
                    <a>Quil Trek and Valluna Climb</a>
                </Link>           
            </FooterNavStyles>
            <FooterNavStyles>
                <Link href="/gear-shop">
                    <a className="ft-third-col">Gear Shop</a>
                </Link>
                <Link href="/about-us">
                    <a className="ft-third-col">About Us</a>
                </Link>
                <span className="ft-third-col">Sierra Vista Expeditions, LLC</span>
            </FooterNavStyles>
        </StyledFooter>
    );
};

export default Footer;