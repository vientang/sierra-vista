import styled from 'styled-components';

const StyleElevationsContainer = styled.div`
    margin: 0.5rem 0;
`;

const StyledElevationsCharts = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 5px;
    width: 100%;
    max-width: 100%;
    padding: 0 0.4rem;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    ul:nth-child(2) {
        text-align: right;
    }
`;

const ElevationColumn = ({ elevations, mountain }) => {
    const idx = mountain ? 0 : 1;
    return (
        <ul>
            {Object.values(elevations).map((elevation, i) => (
                <li key={`${elevation[i]}-${i}`}>{elevation[idx]}</li>
            ))}
        </ul>
    )
}

const ElevationsChart = ({ elevations }) => {    
    return (
        <StyleElevationsContainer>
            <p>Elevations:</p>
            <StyledElevationsCharts>
                <ElevationColumn elevations={elevations} mountain />
                <ElevationColumn elevations={elevations} />
            </StyledElevationsCharts>
        </StyleElevationsContainer>
    )
}

export default ElevationsChart;