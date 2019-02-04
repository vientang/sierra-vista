import styled from 'styled-components';
import EmailIcon from './icons/EmailIcon';
import theme from '../components/theme';

const StyledContactButton = styled.button`
    position: relative;              
    width: 4.5rem;
    min-width: 3.2rem;
    padding: 0.3rem 0.5rem;
    line-height: normal;
    color: ${props => props.theme.dkBlue};
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    white-space: nowrap;
    border-radius: 2px;
    background: ${props => props.theme.lightGrey};
    box-sizing: border-box;
    box-shadow: ${props => props.theme.bs};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    @media (max-width: 700px) {
        font-size: 0.8rem;      
        padding: 0 1rem;
    }
    div {
        transition: transform 100ms ease-out;
    }
    &:hover,
    &:focus {
        div {
            transform: ${props => props.disabled ? 'scale(1)' : 'scale(1.1)'};
        }
        outline: none;
        @media (max-width: 700px) {
            width: calc(100% - 10px);
        }
    }
    &:active {
        transform: scale(0.98);
        filter: brightness(1);
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContactButton = () => {
    return (
        <StyledContactButton>
            <StyledButtonContainer>
                <EmailIcon size={15} color={theme.dkBlue} />
                Email
            </StyledButtonContainer>
        </StyledContactButton>
    )
}

export default ContactButton;
