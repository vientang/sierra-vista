import styled from 'styled-components';
import InfoCard from './InfoCard';

const StyledInfoSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    padding: ${props => props.theme.padding};
    box-sizing: border-box;
`;

const HomeInfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoCard 
                title="Sierra Vista Expeditions" 
                text="Here at Sierra Vista Expeditions, we offer a lower cost than most other companies based in the
                United States. This is because we are a small company with all of our own staff and equipment based in
                Peru. This allows us to pass on the savings to you." 
            />
            <InfoCard 
                title="" 
                text="All of our trekking and climbing trips are assisted with animals, mainly burros (donkeys).
                    Everything we need for the trip including your personal gear and clothing will be transported by burros,
                    requiring you to carry only what you need for the day of hiking. This allows our guests to have lighter
                    backpacks, and more energy spent enjoying the lakes and beauty of the mountains." 
            />
            <InfoCard 
                title="" 
                text="The food we provide is excellent, hands down. We will be eating the local cuisine while on our
                    trek or climb. Examples of meals are pastas, rice, potatoes, trout, chicken, beef, oatmeal, quinoa,
                    puddings, eggs and breads. All of the food is purchased fresh in the local markets of Huaraz, and cooked
                    with a high degree of sanitation by our certified cooks. We may be able to accommodate certain dietary
                    restrictions with an advanced notice." 
            />
            <InfoCard 
                title="" 
                text="We select excellent hotels in Lima and Huaraz with hot showers and continental breakfast
                provided. They are located in the best affluent areas, close to restaurants and many attractions. All of the
                transportation provided is with certified commercial drivers, and the vehicles are regularly inspected for
                safety and maintenance." 
            />
            <InfoCard 
                title="" 
                text="The equipment we provide on our trips is of the highest quality. Popular brand names you may
                recognize are selected for their durability and comfort. We provide a dining tent complete with tables and
                chairs, plates and bowls, cups and cutlery. Also provided, is a complimentary 3 person tent with double
                occupancy during our treks and climbs. All ropes are provided for trips requiring them." 
            />
            <InfoCard 
                title="" 
                text="We look forward to not only working with you but for you. Please contact us directly for any
                and all inquiries. We look forward to providing you with one of the best all inclusive international travel
                adventures available!" 
            />
            <InfoCard 
                title="Private trips" 
                text="Private trips are a great way to make your trip as private and customized as possible and to limit team size
                to a pre-organized group. In a lot of cases we can add porters, acclimatization days, rest days, or even add
                additional summits to your customized trip. Please inquire directly with us to talk about options, and plan
                the perfect custom itinerary suited for your needs." 
            />
        </StyledInfoSection>
    )
}

export default HomeInfoSection;