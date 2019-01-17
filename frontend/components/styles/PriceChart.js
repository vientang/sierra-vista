import styled from 'styled-components';
import { Tooltip } from 'antd';
import priceData from '../../static/price-data';

const StyledPriceChart = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 10px;
    width: 100%;
    max-width: 100%;
    ul {
        margin-top: 0;
        list-style-type: none;
    }
`;

const StyledAddOn = styled.span`
    margin-left: 0.2rem;
    color: ${props => props.theme.dkBlue};
    &:hover {
        cursor: pointer;
    }
`;

const addOnText = 'Add on price reflects the option for a single room and an individual tent while on the trip. The hotel rooms I book may have two single beds however you may choose to stay in your own room with this option.';

const PackageColumn = ({ items }) => {
    return (
        <ul>
            {Object.values(items).map(item => {
                if (Array.isArray(item)) {
                    return <li key={item[0]}>{item[0]}</li>;
                } 
                return (                    
                    <li key="add-on">
                        Single room/tent 
                        <Tooltip 
                            placement="bottom"
                            title={addOnText} 
                            overlayStyle={{ fontSize: '0.7rem', fontFamily: 'Arial, sans-serif' }}
                        >
                            <StyledAddOn>add on</StyledAddOn>
                        </Tooltip>
                    </li>
                );
            })}
        </ul>
    )
}

const PriceColumn = ({ items }) => {
    return (
        <ul>
            {Object.values(items).map(item => {
                if (Array.isArray(item)) {
                    return <li key={item[1]}>{item[1]}</li>;
                } 
                return <li key={item}>{item}</li>;
            })}
        </ul>
    )
}

const PriceChart = ({ trip }) => {
    const data = priceData.find(tripData => tripData.trip === trip);
    const packages = data.prices;

    return (
        <StyledPriceChart>
            <PackageColumn items={packages} />
            <PriceColumn items={packages} />
        </StyledPriceChart>
    )
}

export default PriceChart;