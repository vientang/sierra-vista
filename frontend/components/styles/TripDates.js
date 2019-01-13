import styled from 'styled-components';

const StyledTripDates = styled.div`
    display: grid;
    grid-template-columns: 60%;
    width: 100%;
    max-width: 100%;
    ul {
        list-style-type: none;
    }
`;

const TripDates = ({ dates, duration }) => {
    return (
        <React.Fragment>
            <p>Dates:</p>
            <StyledTripDates>
                <ul>
                    {dates.map(date => <li key={date}>{date} {duration}</li>)}
                </ul>
            </StyledTripDates>
        </React.Fragment>
    )
}

export default TripDates;