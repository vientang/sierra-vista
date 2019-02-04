import styled from 'styled-components';

const InnerPageContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export default InnerPageContent;
