import styled from 'styled-components';

const Button = styled.button`
    position: relative;              
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    min-width: 3.2rem;
    color: ${props => props.theme.black};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 900;
    white-space: nowrap;
    border: 0;
    background: linear-gradient(to right, ${props => props.theme.blue}, ${props => props.theme.lightBlue});
    transition: transform 150ms ease-in-out, box-shadow 125ms ease-in;
    box-sizing: border-box;    
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    @media (max-width: 700px) {
        font-size: 0.8rem;      
        padding: 0 1rem;
    }
    &:hover,
    &:focus {
        transform: scale(1.035);
        filter: brightness(1.05);
        box-shadow: ${props => props.theme.bs};
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

export default Button;
