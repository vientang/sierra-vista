import styled from 'styled-components';
import Button from './Button';
import BookTripIcon from './icons/BookTripIcon';
import theme from '../components/theme';

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BookTripButton = () => {
    return (
        <Button width="4rem">
            <StyledButtonContainer>
                <BookTripIcon size={15} color={theme.black} />
                Book
            </StyledButtonContainer>
        </Button>
    )
}

export default BookTripButton;
