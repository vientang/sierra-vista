import React, { Component } from 'react';
import styled from 'styled-components';
import GearItem from './GearItem';
import TripSidePanel from './TripSidePanel';
import Form from './Form';
import Button from './Button';
import Tabs from './Tabs';
import RentalCartList from './RentalCartList';
import RentalCartPanel from './RentalCartPanel';
import DownloadLink from '../DownloadLink';
import { trekkingGearData, climbingGearData } from '../../static/gear-data';

const climbingTips = 'All of your sharp, metal items (crampons, ice axe, carabiners) and other heavy items will be packed into your larger expedition duffel and checked with your airline.  Lighter travel clothes, things needed for your first night in Lima, and during our first few nights in Huaraz can go in your carry on duffle. It is recommended to put your climbing helmet in with your carry on, as it may break in a checked bag. Generally you will bring the large duffle to base camp, while leaving the other in the hotel. A light luggage travel scale is very helpful for last minute weight checks.';
const trekkingTips = 'Have most of your trekking items and clothing needed for the trip in your duffle bag as checked luggage. Lighter travel clothes, things needed for your first night in Lima, and during our first few nights in Huaraz can go in your carry on luggage. Your carry on may be a rolling type suitcase with wheels. This will also be left in the hotel while we are in the mountains. Make sure to bring TSA compliant travel locks for added security and peace of mind.';

const StyledGearShop = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-gap: 10px;
    max-width: 100%;
    padding: 0rem 5rem;
    p {
        font-family: ${props => props.theme.standardFont};
    }
    a {
        color: ${props => props.theme.blue};
    }
    a::before {
        content: ' ';
    }
    @media(max-width: 1300px) {
        top: 120px;
    }
`;

const StyledGearSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    max-width: ${props => props.theme.maxWidth};
    padding: 2rem 5rem 6rem 0rem;
    font-size: 0.9rem;
    h3 {
        margin: 0;
        line-height: normal;
    }
    @media(max-width: 1300px) {
        h3 {
            padding: 0 1rem;
        }
    }
`;

const StyledGearList = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    margin: 1rem 0;
    border: 1px solid ${props => props.theme.offWhite};
    box-shadow: ${props => props.theme.bs};
    overflow: auto;
    h3 {
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem;
    }
`;

class GearShop extends Component {
    state = {
        active: 'trekking',
        cartItems: [],
    }

    getGearList = (type) => {
        const gearList = type === 'trekking' ? trekkingGearData : climbingGearData;
        return gearList.map((item, i) => (
            <StyledGearList key={`${item.category}-${i}`}>
                <h3>{item.category}</h3>
                {item.items.map((gearItem, i) => (
                    <GearItem 
                        key={`${gearItem.brand}-${i}`} 
                        item={gearItem}
                        addToCart={this.handleUpdateCartItems} />
                ))}
            </StyledGearList>
        ));
    }

    handleUpdateCartItems = (title) => {
        const { active } = this.state;
        const gearList = active === 'trekking' ? trekkingGearData : climbingGearData;
        let item = {};
        gearList.some(category => {
            const foundItem = category.items.find(item => item.title === title);
            if (foundItem) {
                item = foundItem;
                return true;
            }
            return false;
        });
        
        this.setState((prevState) => ({ cartItems: [ item, ...prevState.cartItems ] }))
    }

    handleTabSwitch = () => {
        this.setState((prevState) => ({ 
            active: prevState.active === 'trekking' ? 'climbing' : 'trekking' 
        }));
    }

    render() {
        const { active, cartItems } = this.state;
        
        const packingTips = active === 'trekking' ? trekkingTips : climbingTips;
        return (
            <StyledGearShop>
                <StyledGearSection>                    
                <h2>Gear Shop</h2>
                    <Tabs>
                        <span 
                            className={active === 'trekking' ? 'active-tab' : ''}
                            onClick={this.handleTabSwitch}
                        >
                            Trekking
                        </span>
                        <span 
                            className={active === 'climbing' ? 'active-tab' : ''}
                            onClick={this.handleTabSwitch}
                        >
                            Climbing
                        </span>
                    </Tabs>
                    <h3>Packing Tips</h3>
                    <p>{packingTips}</p>
                    <p>
                        This list is based on our personal experience and to be used as a guide. 
                        <a href="mailto:info@sierravistaexpeditions.com.com">E-mail</a> for details.
                    </p>
                    {this.getGearList(active)}                    
                </StyledGearSection>
                <TripSidePanel>
                    <RentalCartPanel>
                        <h3>Rental items</h3>
                        <p>Select an item to rent and it will appear on this list.</p>
                        <RentalCartList>
                            {cartItems.map(item => <p key={item.title}>{item.title}</p>)}
                        </RentalCartList>
                        <Form emptyCart={cartItems.length > 0}>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                            <input type="text" placeholder="Email" />
                            <DownloadLink 
                                className="rental-agreement-link"
                                text="*Please read and sign the" 
                                linkText="rental agreement." 
                                url="/static/rental_terms_release_of_liability.pdf" 
                            />
                            <Button disabled={cartItems.length < 1}>Submit rental</Button>
                        </Form>
                    </RentalCartPanel>
                </TripSidePanel>
            </StyledGearShop>
        );
    }
}

export default GearShop;