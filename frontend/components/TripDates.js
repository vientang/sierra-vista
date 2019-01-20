import styled from 'styled-components';

const StyleDatesContainer = styled.div`
    margin: 0.5rem 0;
`;

const StyledTripDates = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    padding: 0 0.4rem;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`;

const TripDates = ({ dates, duration }) => {
    return (
        <StyleDatesContainer>
            <p>Dates:</p>
            <StyledTripDates>
                <ul>
                    {dates.map(date => <li key={date}>{date} {duration}</li>)}
                </ul>
            </StyledTripDates>
        </StyleDatesContainer>
    )
}

export default TripDates;