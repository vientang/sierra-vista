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
    return (
        <React.Fragment>            
            <GearShop>
                <h2>Gear Shop</h2>
                <h3>Packing Tips</h3>
                <p>
                    Have most of your trekking items and clothing needed for the trip in your duffle bag as checked luggage. Lighter travel clothes, things needed for your first night in Lima, and during our first few nights in Huaraz can go in your carry on luggage. Your carry on may be a rolling type suitcase with wheels. This will also be left in the hotel while we are in the mountains. Make sure to bring TSA compliant travel locks for added security and peace of mind.
                </p>
                <p>
                    This list is based on our personal experience and to be used as a guide. 
                    <a href="mailto:info@sierravistaexpeditions.com.com">E-mail</a> for details.
                </p>
            </GearShop>
        </React.Fragment>
    );
}

export default GearShopPage;