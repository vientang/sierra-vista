import styled from 'styled-components';
import priceData from '../static/price-data';

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

const InclusionChart = ({ trip }) => {
    const data = priceData.find(tripData => tripData.trip === trip);

    return (
        <StyledInclusionChart>
            <InclusionColumn included data={data} />
            <InclusionColumn data={data} />
        </StyledInclusionChart>
    )
}

export default InclusionChart;