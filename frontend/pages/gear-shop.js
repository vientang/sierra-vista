import React from 'react';
import styled from 'styled-components';
import { GearShop } from '../components/styles';

const GearImage = styled.img`
    position: absolute;
    background-size: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: -55% 0;
    box-shadow: ${props => props.theme.bs};
    filter: contrast(1.1) brightness(90%);
`;

const Image = <GearImage src="static/images/mountain-gear.jpg" alt="Photo by Blaise Vonlanthen on Unsplash" />;

const GearShopPage = () => {
    return <GearShop />
}

export default GearShopPage;