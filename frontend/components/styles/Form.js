import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    from {
        background-position: 0 0;
        /* rotate: 0; */
    }

    to {
        background-position: 100% 100%;
        /* rotate: 360deg; */
    }
`;

const Form = styled.form`
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 5px solid white;
    border-radius: 5px;
    padding: 1rem;
    line-height: 1.5;
    font-weight: 600;
    opacity: ${props => props.emptyCart ? 1 : 0.3};
    pointer-events: ${props => props.emptyCart ? 'none' : 'auto'};
    transition: 1s opacity ease-in;
    box-sizing: border-box;
    label {
        display: block;
        margin-bottom: 1rem;
    }
    input,
    textarea,
    select {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        border: none;
        border-radius: 3px;
        &:focus {
        outline: 0;
            border-color: ${props => props.theme.red};
        }
    }
    fieldset {
        border: 0;
        padding: 0;

        &[disabled] {
            opacity: 0.5;
        }
        &::before {
            height: 10px;
            content: '';
            display: block;
            background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
        }
        &[aria-busy='true']::before {
            background-size: 50% auto;
            animation: ${loading} 0.5s linear infinite;
        }
    }
`;

export default Form;
