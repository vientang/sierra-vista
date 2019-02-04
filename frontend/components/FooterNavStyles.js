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
    }
    .footer-site-name,
    .footer-trips-heading,
    .footer-trips,
    .footer-links {
        color: ${props => props.theme.offWhite};
    }
    .footer-site-name {
        width: 100%;
        font-size: 1rem;
        font-family: 'radnika_next';
        white-space: nowrap;
        margin: 0 0 0 1.2rem;
    }
    .footer-trips-heading {
        align-self: flex-end;
        font-size: 0.8rem;
        line-height: 2;
        text-transform: uppercase;
    }
    .footer-trips {
        align-self: flex-end;
    }
    .footer-links,
    .footer-trips {
        position: relative;
        display: inline-block;
        padding: 0;
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 2.2;
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
`;

export default FooterNavStyles;
