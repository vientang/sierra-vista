import styled from 'styled-components';

const TripNav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    list-style-type: none;
    a {
        position: relative;                
        white-space: nowrap;        
        border: 0;
        cursor: pointer; 
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
            margin-top: 2rem;
        }
        &:hover,
        &:focus {
            outline: none;
            &:after {
                width: calc(100% - 10px);
            }
            @media (max-width: 700px) {
                width: calc(100% - 10px);
            }
        }
    }
    @media (max-width: 1200px) {
        border-top: 1px solid ${props => props.theme.lightGrey};
        width: 100%;
        justify-content: center;
        font-size: 1rem;    
    }
`;

export default TripNav;
