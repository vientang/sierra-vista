import styled from 'styled-components';

const RentButton = styled.button`
    position: relative;              
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 900;
    white-space: nowrap;        
    border: 0;
    background: ${props => props.theme.blue};
    cursor: pointer;
    @media (max-width: 700px) {
        font-size: 0.8rem;      
        padding: 0 15px;
    }
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        background: red;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 1rem;
    }
    &:hover,
    &:focus {
        outline: none;
        &:after {
            width: calc(100% - 30px);
        }
        @media (max-width: 700px) {
            width: calc(100% - 10px);
        }
    }
`;

export default RentButton;
