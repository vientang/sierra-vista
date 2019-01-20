import styled from 'styled-components';

const StyleExperienceContainer = styled.div`
    margin: 0.5rem 0;
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

const ExperienceGainedChart = ({ experience }) => {    
    return (
        <StyleExperienceContainer>
            <p>Experience gained:</p>
            <StyledExperienceCharts>
                <ExperienceColumn experience={experience} />
            </StyledExperienceCharts>
        </StyleExperienceContainer>
    )
}

export default ExperienceGainedChart;