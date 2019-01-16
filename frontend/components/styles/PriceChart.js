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

const StyledInclusionChart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    max-width: 100%;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: rgba(225, 225, 225, 0.4);
    box-sizing: border-box;
    ul {
        list-style-type: disc;
        padding-left: 1rem;
    }
    li {
        font-size: 0.8rem;
        line-height: 1.5;
        margin: 0.5rem 0;
    }
    .inclusion-title {
        display: inline-block;
        margin: 0;
        padding: 0;
        line-height: normal;
        font-size: 0.8rem;
        font-style: italic;
        color: ${props => props.theme.mdGrey};
        border-bottom: 1px solid ${props => props.theme.mdGrey};
    }
`;

const StyledAddOn = styled.span`
    margin-left: 0.2rem;
    color: ${props => props.theme.blue};
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

const InclusionColumn = ({ data, included }) => {
    const title = included ? 'Included in the price:' : 'Not included in the price:';
    const inclusions = included ? data.included : data.notIncluded;
    return (
        <div>
            <p className="inclusion-title">{title}</p>
            <ul>{inclusions.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
    );
}

const PriceChart = ({ trip }) => {
    const data = priceData.find(tripData => tripData.trip === trip);
    const packages = data.prices;

    return (
        <>
            <StyledPriceChart>
                <PackageColumn items={packages} />
                <PriceColumn items={packages} />
            </StyledPriceChart>
            <StyledInclusionChart>
                <InclusionColumn included data={data} />
                <InclusionColumn data={data} />
            </StyledInclusionChart>
        </>
    )
}

export default PriceChart;