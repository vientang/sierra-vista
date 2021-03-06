import styled from 'styled-components';

const TripNav = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0 1 65%;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    list-style-type: none;
    .trip-nav-link {
        position: relative;
        white-space: nowrap;
        border: 0;
        transition: transform 200ms ease-in-out, filter 200ms ease-in-out, box-shadow 200ms ease-in-out;
        cursor: pointer; 
        &:after {
            content: '';
            position: absolute;
            height: 2px;
            width: 0;
            background: ${props => props.theme.lightBlue};
            margin-top: 1.40rem;
            left: 50%;
            transform: translateX(-50%);
            transition: width 250ms ease-in-out;
            transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
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
    li {
        margin: 0 0.5rem;
    }
    /* @media (max-width: 1200px) {
        justify-content: center;
        width: 100%;
        font-size: 0.8rem;
        border-top: 1px solid ${props => props.theme.lightGrey};
    } */
`;

export default TripNav;
