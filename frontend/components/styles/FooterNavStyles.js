import styled from 'styled-components';

const FooterNavStyles = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    a,
    span {
        position: relative;
        display: flex;
        padding: 0;
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
        font-size: 0.7rem;
        color: white;
        white-space: nowrap;
        background: none;
        border: 0;
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 0.8rem;      
            padding: 0 15px;
        }    
        &:hover,
        &:focus {
            color: ${props => props.theme.blue};
            outline: none;
        }
    }
    .ft-third-col,
    span {
        justify-content: flex-end;
        align-self: flex-end;
    }
    @media (max-width: 1300px) {
        border-top: 1px solid ${props => props.theme.lightGrey};
        width: 100%;
        justify-content: center;
        a {
            font-size: 0.6rem;
        }
    }
`;

export default FooterNavStyles;
