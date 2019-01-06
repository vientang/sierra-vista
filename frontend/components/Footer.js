import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import FooterNavStyles from './styles/FooterNavStyles';
import Logo from './Logo';

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
    grid-template-columns: 70% 15% 15%;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    height: 15rem;
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
                <Link href="/">
                    <a className="footer-logo"><Logo size="25px" /><p>Sierra Vista Expeditions LLC</p></a>
                </Link>
                <Link href="/gear-shop">
                    <a>Gear Shop</a>
                </Link>
                <Link href="/rental-agreement">
                    <a>Rental Agreement</a>
                </Link>                
                <Link href="/terms">
                    <a>Terms and Conditions</a>
                </Link>
                <Link href="/about-us">
                    <a>About Us</a>
                </Link>
            </FooterNavStyles>
            <FooterNavStyles>
                <p className="footer-trips-heading">Treks</p>
                <Link href="/cordillera-huayhuash">
                    <a className="footer-trips">Cordillera Huayhuash</a>
                </Link>
                <Link href="/ollerostochavin">
                    <a className="footer-trips">Chavin de Huantar</a>
                </Link>
                <Link href="/quiilcayhuanca">
                    <a className="footer-trips">Quilcayhuanca Valley</a>
                </Link>
            </FooterNavStyles>
            <FooterNavStyles>
                <p className="footer-trips-heading">Climbs</p>
                <Link href="/ishinca13">
                    <a className="footer-trips">Ishinca Valley</a>
                </Link>
                <Link href="/pisco">
                    <a className="footer-trips">Pisco</a>
                </Link>
                <Link href="/quilvalluna">
                    <a className="footer-trips">Vallunaraju</a>
                </Link>           
            </FooterNavStyles>            
        </StyledFooter>
    );
};

export default Footer;