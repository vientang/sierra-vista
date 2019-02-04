import styled from 'styled-components';
import { Tooltip } from 'antd';

const StyleExperienceContainer = styled.div`
    margin: 0.5rem 0;
    p {
        display: inline-block;
    }
    .experience-tooltip {
        color: ${props => props.theme.dkBlue};
        cursor: pointer;
    }
`;

const StyledExperienceCharts = styled.div`
    display: grid;
    grid-template-columns: 1fr;
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

const ExperienceColumn = ({ experience }) => {
    return (
        <ul>
            {Object.values(experience).map((exp, i) => (
                <li key={`${exp}-${i}`}>{exp}</li>
            ))}
        </ul>
    )
}

const ExperienceContent = ({ experience }) => {
    return (
        <StyledExperienceCharts>
            <ExperienceColumn experience={experience} />
        </StyledExperienceCharts>
    )
}

const overlayStyle = {
    fontSize: '0.7rem',
    fontFamily: 'Arial, sans-serif',
    minWidth: 300,
};

const ExperienceGainedChart = ({ experience, scrollY }) => {
    const experienceDisplay = scrollY > 860
        ? <Tooltip
            autoAdjustOverflow={false}
            placement="right"
            title={<ExperienceContent experience={experience} />}
            overlayStyle={overlayStyle}
        >
            <p className="experience-tooltip">Experience gained</p>
        </Tooltip>
        : <><p>Experience gained:</p><ExperienceContent experience={experience} /></>;

    return (
        <StyleExperienceContainer>
            {experienceDisplay}
        </StyleExperienceContainer>
    )
}

export default ExperienceGainedChart;