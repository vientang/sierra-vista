import styled from 'styled-components';

const Button = styled.button`
    position: relative;              
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: ${props => props.width ? props.width : 'auto'};
    min-width: 3.2rem;
    padding: 0.3rem;
    line-height: normal;
    color: ${props => props.theme.black};
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    white-space: nowrap;
    border: 1px solid ${props => props.theme.blue};
    border-radius: 2px;
    background: linear-gradient(to right, ${props => props.theme.blue}, ${props => props.theme.lightBlue});
    transform: scale(1);
    transition: transform 150ms ease-in-out, box-shadow 125ms ease-in;
    box-sizing: border-box;
    box-shadow: ${props => props.theme.bs};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    @media (max-width: 700px) {
        font-size: 0.8rem;      
        padding: 0 1rem;
    }
    &:hover,
    &:focus {
        transform: ${props => props.disabled ? 'scale(1)' : 'scale(1.035)'};
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
