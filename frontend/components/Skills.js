import styled from 'styled-components';
import { Progress, Tooltip } from 'antd';
import skillsInfo from '../static/skills-info';

const StyleSkillsContainer = styled.div`
    margin: 0.5rem 0;
`;

const StyledSkillsBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 10%;
    padding: 0 0.4rem;
    span {
        color: ${props => props.theme.black};
        font-weight: bold;
        text-align: right;
    }
    &:hover {
        cursor: pointer;
    }
`;

const Skills = ({ skillLevel }) => {
    return (
        <StyleSkillsContainer>
            <p>Skills:</p>
            <StyledSkillsBar>
                <Tooltip
                    placement="bottom"
                    title={skillsInfo[skillLevel]}
                    overlayStyle={{ fontSize: '0.7rem', fontFamily: 'Arial, sans-serif' }}
                >
                    <Progress
                        showInfo={false}
                        strokeLinecap="square"
                        strokeColor={'linear-gradient(to right, #00BDFF, #1c85f5)'}
                        percent={20 * skillLevel}
                    />
                </Tooltip>
                <span>{skillLevel}</span>
            </StyledSkillsBar>
        </StyleSkillsContainer>
    )
}

export default Skills;