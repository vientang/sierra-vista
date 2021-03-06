import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import FooterNavStyles from './FooterNavStyles';
import Logo from './Logo';

const FooterImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    filter: contrast(1.2) brightness(10%);
`;

const StyledFooter = styled.footer`
    position: relative;
    display: grid;
    grid-template-columns: 70% 15% 15%;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    height: 25rem;
    top: 115px;
    bottom: 0;
    overflow: hidden;
    padding: 2rem 5rem;
    background-color: ${props => props.theme.offWhite};
    border-top: 1px solid ${props => props.theme.lightGrey};
    box-sizing: border-box;
`;

const LogoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    a {
        line-height: 0;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterImage src="static/mountain-gear.jpg" alt="Photo by Blaise Vonlanthen on Unsplash" />
            <FooterNavStyles>
                <LogoContainer>
                    <Link href="/"><a><Logo size="45px" /></a></Link>
                    <Link href="/">
                        <a>
                            <p className="footer-site-name">Sierra Vista Expeditions LLC</p>
                        </a>
                    </Link>
                </LogoContainer>
                <p>
                    <Link href="/gear-shop">
                        <a className="footer-links">Gear Shop</a>
                    </Link>
                </p>
                <p>
                    <Link href="/static/rental_terms_release_of_liability.pdf">
                        <a className="footer-links">Rental Agreement</a>
                    </Link>
                </p>
                <p>
                    <Link href="/static/terms-and-conditions.pdf">
                        <a className="footer-links">Terms and Conditions</a>
                    </Link>
                </p>
                <p>
                    <Link href="/static/assumption-of-risk-release-of-liability.pdf">
                        <a className="footer-links">Assumption of Risk and Liability</a>
                    </Link>
                </p>
                <p>
                    <Link href="/about-us">
                        <a className="footer-links">About Us</a>
                    </Link>
                </p>
            </FooterNavStyles>
            <FooterNavStyles>
                <p className="footer-trips-heading">Treks</p>
                <Link href="/cordillera-huayhuash">
                    <a className="footer-trips">Cordillera Huayhuash</a>
                </Link>
                <Link href="/chavin">
                    <a className="footer-trips">Chavin de Huantar</a>
                </Link>
                <Link href="/quilcayhuanca">
                    <a className="footer-trips">Quilcayhuanca Valley</a>
                </Link>
            </FooterNavStyles>
            <FooterNavStyles>
                <p className="footer-trips-heading">Climbs</p>
                <Link href="/ishinca">
                    <a className="footer-trips">Ishinca Valley</a>
                </Link>
                <Link href="/pisco">
                    <a className="footer-trips">Pisco</a>
                </Link>
                <Link href="/vallunaraju">
                    <a className="footer-trips">Vallunaraju</a>
                </Link>           
            </FooterNavStyles>            
        </StyledFooter>
    );
};

export default Footer;