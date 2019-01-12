import styled from 'styled-components';
import priceData from '../../static/price-data';

const StyledPriceChart = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 10px;
    width: 100%;
    max-width: 100%;
    ul {
        list-style-type: none;
    }
`;

const PackageColumn = ({ items }) => {
    return (
        <ul>
            {Object.values(items).map(item => {
                if (Array.isArray(item)) {
                    return <li key={item[0]}>{item[0]}</li>;
                } 
                return <li key="add-on">Single room/tent add on</li>;
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
    const packages = priceData.find(tripData => tripData.trip === trip).prices;
    return (
        <React.Fragment>
            <p>Prices:</p>
            <StyledPriceChart>
                <PackageColumn items={packages} />
                <PriceColumn items={packages} />
            </StyledPriceChart>
        </React.Fragment>
    )
}

export default PriceChart;