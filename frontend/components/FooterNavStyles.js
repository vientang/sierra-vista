import styled from 'styled-components';

const FooterNavStyles = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    p {
        display: inline-block;
        margin: 0;
        line-height: 1.5;
    }
    .footer-site-name {
        font-family: 'radnika_next';
        margin: 0 0 0 0.5rem;
    }
    .footer-logo {
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
    .footer-trips-heading {
        align-self: flex-end;
        font-size: 0.8rem;
        line-height: 2;
        text-transform: uppercase;
        color: white;
    }
    .footer-trips {
        align-self: flex-end;
    }
    a {
        position: relative;
        display: flex;
        padding: 0;
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
        font-size: 0.8rem;
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
        span {
            display: inline-block;
        }
    }
    .footer-links {
        display: inline-block;
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