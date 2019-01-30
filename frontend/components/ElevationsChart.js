import styled from 'styled-components';
import { Tooltip } from 'antd';

const StyleElevationsContainer = styled.div`
    margin: 0.5rem 0;
    p {
        display: inline-block;
    }
    .elevation-tooltip {
        color: ${props => props.theme.dkBlue};
        cursor: pointer;
    }
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

const ElevationContent = ({ elevations }) => {
    return (
        <StyledElevationsCharts>
            <ElevationColumn elevations={elevations} mountain />
            <ElevationColumn elevations={elevations} />
        </StyledElevationsCharts>
    )
}

const overlayStyle = { 
    fontSize: '0.7rem', 
    fontFamily: 'Arial, sans-serif', 
    minWidth: 350,
};

const ElevationsChart = ({ elevations, scrollY }) => {
    const elevationDisplay = scrollY > 790 
        ? <Tooltip
            autoAdjustOverflow={false}
            placement="right"
            title={<ElevationContent elevations={elevations} />}
            overlayStyle={overlayStyle}
        >
            <p className="elevation-tooltip">Elevations</p>
        </Tooltip>
        : <><p>Elevations:</p><ElevationContent elevations={elevations} /></>;

    return (
        <StyleElevationsContainer>
            {elevationDisplay}
        </StyleElevationsContainer>
    )
}

export default React.memo(ElevationsChart);