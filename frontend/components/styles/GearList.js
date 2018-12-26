import Link from 'next/link';
import styled from 'styled-components';

const StyledGearList = styled.div`
    display: flex;
    justify-content: space-between;
    ul {
        list-style-type: none;
        width: 30%; 
        margin: 0;
        padding: 0;       
    }
`;

const GearList = (props) => {
    const { trek } = props;

    if (trek) {
        return (
            <React.Fragment>
                <StyledGearList>
                    <ul>
                        <li>Trekking Poles</li>
                        <li>Fleece Hat or Beanie</li>
                        <li>Baseball Cap or Sun Hat</li>
                        <li>Buff (neck gaiter)</li>
                        <li>Headlamp</li>
                        <li>Sunglasses</li>
                        <li>Lightweight Baselayer Tops and Bottoms (1-2) Each</li>
                        <li>Heavyweight Baselayer Bottom (1)</li>
                        <li>Synthetic Short Sleeve Shirts (1-2)</li>
                        <li>Soft Shell Trekking Pants (1-2)</li>
                        <li>Trekking Shorts (1)</li>
                        <li>Insulated Synthetic Pant, Full Side Zips</li>
                        <li>Mid Layer Top</li>
                        <li>Insulated Down or Synthetic Jacket</li>
                        <li>Hard Shell Jacket with Hood</li>
                    </ul>
                    <ul>
                        <li>Hard Shell Pant, Full side Zips</li>
                        <li>Light Trekking Boots or Shoes</li>
                        <li>Down Booties (optional)</li>
                        <li>Mid to Heavyweight Socks (4)</li>
                        <li>Midweight Gloves</li>
                        <li>Duffle Bag 40-50 Liter</li>
                        <li>0 Degree Sleeping Bag</li>
                        <li>Sleeping Pad</li>
                        <li>Backpack 30-40 Liter</li>
                        <li>Hydration System</li>
                        <li>Thermos (1 Liter) (optional)</li>
                        <li>Water Bottle (2) (1 liter bottles)</li>
                        <li>Pee Bottler (1 Liter)</li>
                        <li>Pee Funnel (women)</li>
                        <li>PASSPORT</li>
                        <li>Travel Clothes</li>
                    </ul>
                    <ul>
                        <li>Non-cotton Underwear (4)</li>
                        <li>Sunscreen (2)</li>
                        <li>Lip Balm (2)</li>
                        <li>Contractor Bags (2)</li>
                        <li>Bic Lighters (2)</li>
                        <li>Hand Warmers (3-6)</li>
                        <li>First Aid Kit</li>
                        <li>Knife</li>
                        <li>Ear Plugs</li>
                        <li>Toiletry Kit</li>
                        <li>Camera</li>
                        <li>Extra Batteries/ SD Cards</li>
                        <li>Binoculars</li>
                        <li>Energy Snacks</li>
                        <li>Fit and Able Body!</li>
                    </ul> 
                </StyledGearList>
                <Link href="/gear-list"><a className="print-gear-list">Printable version</a></Link>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <StyledGearList>
                <ul>
                    <li>Basic Ice Axe With Adze</li>
                    <li>Crampons</li>
                    <li>Climbing Specific Helmet</li>
                    <li>Alpine Climbing Harness</li>
                    <li>Rappel/Belay Device</li>
                    <li>Locking Carabiners (2)</li>
                    <li>Non Locking Carabiner (2)</li>
                    <li>Trekking Poles</li>
                    <li>Prussik Cord (40ft)</li>
                    <li>Fleece Hat or Beanie</li>
                    <li>Balaclava</li>
                    <li>Baseball Cap or Sun Hat</li>
                    <li>Buff (neck gaiter)</li>
                    <li>Headlamp</li>
                    <li>Glacier Glasses</li>
                    <li>Ski Goggles</li>
                </ul>
                <ul>
                    <li>Lightweight Baselayer Tops and Bottoms (2) Each</li>
                    <li>Heavyweight Baselayer Bottom (1)</li>
                    <li>Synthetic Short Sleeve Shirts (2)</li>
                    <li>Soft Shell Trekking Pants (2)</li>
                    <li>Soft Shell Climbing Pant</li>
                    <li>Insulated Synthetic Pant, Full Side Zips</li>
                    <li>Synthetic Soft Shell Jacket</li>
                    <li>Mid Layer Top</li>
                    <li>Insulated Synthetic Jacket</li>
                    <li>Hard Shell Jacket with Hood</li>
                    <li>Hard Shell Pant, Full side Zips</li>
                    <li>Down Parka with Hood</li>
                    <li>Light Trekking Boots or Shoes</li>
                    <li>Down Booties (optional)</li>
                    <li>Double Climbing Boots</li>
                    <li>Gaiters (optional)</li>
                    <li>Mid to Heavyweight Socks (4)</li>
                    <li>Lightweight Gloves</li>
                    <li>MidWeight Gloves</li>
                    <li>Heavyweight Gloves</li>
                </ul>
                <ul>
                    <li>Duffle Bag 150 Liter</li>
                    <li>Duffle Bag 40-50 Liter</li>
                    <li>0 Degree Sleeping Bag</li>
                    <li>Sleeping Pad</li>
                    <li>Backpack 40-50 Liter</li>
                    <li>Hydration System</li>
                    <li>Thermos (1 Liter) (optional)</li>
                    <li>Water Bottle (2) (1 liter bottles)</li>
                    <li>Pee Bottler (1 Liter)</li>
                    <li>Pee Funnel (women)</li>
                    <li>Travel Clothes</li>
                    <li>PASSPORT</li>
                    <li>Non-cotton Underwear (4)</li>
                    <li>Sunscreen (2)</li>
                    <li>Lip Balm (2)</li>
                    <li>Contractor Bags (2)</li>
                    <li>Bic Lighters (2)</li>
                    <li>Hand Warmers (3-6)</li>
                    <li>First Aid Kit</li>
                    <li>Knife</li>
                    <li>Ear Plugs</li>
                    <li>Toiletry Kit</li>
                    <li>Camera</li>
                    <li>Extra Batteries/ SD Cards</li>
                    <li>Binoculars</li>
                    <li>Energy Snacks</li>
                    <li>Fit and Able Body!</li>
                </ul>
            </StyledGearList>
            <Link href="/gear-list"><a className="print-gear-list">Printable version</a></Link>
        </React.Fragment>
    )
}

export default GearList;