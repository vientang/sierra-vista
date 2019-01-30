import styled from 'styled-components';
import get from 'lodash/get';
import { Tooltip } from 'antd';
import priceData from '../static/price-data';

const StylePriceContainer = styled.div`
    margin: 0.5rem 0;
    .more-info-tooltip {
        color: ${props => props.theme.dkBlue};
        font-style: italic;
        cursor: pointer;
    }
`;

const StyledPriceChart = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 10px;
    width: 100%;
    max-width: 100%;
    padding: ${props => props.padding};
    box-sizing: border-box;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    ul:nth-child(2) {
        text-align: right;
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

const overlayStyle = {
    fontSize: '0.7rem',
    fontFamily: 'Arial, sans-serif',
    minWidth: 300,
};

const MoreInfo = () => (
    <Tooltip 
        placement="right"
        title="Prices are reflected for one person and will be less with more people."
        overlayStyle={overlayStyle}
    >
        <small className="more-info-tooltip">(more info)</small>
    </Tooltip>
)

const PriceChart = ({ trip, style, renderTitle = false }) => {
    const data = priceData.find(tripData => tripData.trip === trip);
    const packages = data.prices;
    const padding = get(style, 'padding', null) ? get(style, 'padding', null) : '0 0.4rem';
    
    return (
        <StylePriceContainer>
            {renderTitle && <p>Prices <MoreInfo />:</p>}
            <StyledPriceChart padding={padding}>
                <PackageColumn items={packages} />
                <PriceColumn items={packages} />
            </StyledPriceChart>
        </StylePriceContainer>
    )
}

export default PriceChart;