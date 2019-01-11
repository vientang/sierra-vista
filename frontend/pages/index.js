import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { Button, HeroImage, HomeInfoSection, InfoCard } from '../components/styles';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const StyledHero = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledOverlay = styled.div`
    position: absolute;
    color: white;
    bottom: 0;
    left: 0;
    margin-bottom: 5rem;
    padding: ${props => props.theme.padding};
    background: radial-gradient(closest-corner, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    a {
        display: inline-block;
    }
    p,
    h2,
    span {
        margin: 0;
        filter: drop-shadow(.05em .05em ${props => props.theme.grey});
    }
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
        line-height: normal;
    }
    p {
        font-size: 3rem; 
    }
    span {
        display: block;
    }
`;

const StyledIntro = styled.div`
    display: block;
    padding: 5rem 20rem;
    text-align: center;
    p {
        font-family: ${props => props.theme.standardFont};
        font-size: 1.15rem;
        color: #555555;
        line-height: 1.5;
    }
    h3 {
        margin: 0;
    }
`;

const StyledInfoSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;    
    width: 100%;
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
    padding: 1rem 15rem;
    background: rgb(244,251,249);
    background: ${props => props.theme.ltGrnGradient};
    animation: ${fadeIn} 0.5s ease-in;
    box-sizing: border-box;
`;

/**
 * Link from next binds HTML5 push state to anchor tags
 */
const Home = () => {
    return (
        <div>
            <StyledHero>
                <HeroImage src="static/images/lake.jpg" alt="Cordillera Huayhuash" />
                <StyledOverlay>
                    <h2>Next Trip</h2>
                    <p>Cordillera Huayhuash</p>
                    <span>May 29th, 2019 - June 12, 2019</span>
                    <Link href="/cordillera-huayhuash">
                        <a><Button>Reserve a spot</Button></a>
                    </Link>
                </StyledOverlay>
            </StyledHero>
            
            <StyledIntro>
                <div>
                    <h3>Sierra Vista Expeditions</h3>
                    <p>
                    Here at Sierra Vista Expeditions, we offer a lower cost than most other companies based in the
                    United States. This is because we are a small company with all of our own staff and equipment based in
                    Peru. This allows us to pass on the savings to you.
                    </p>
                </div>
            </StyledIntro>
            <StyledInfoSection>                
                <InfoCard 
                    title="Assisted with animals" 
                    text="All of our trekking and climbing trips are assisted with animals, mainly burros (donkeys).
                        Everything we need for the trip including your personal gear and clothing will be transported by burros,
                        requiring you to carry only what you need for the day of hiking. This allows our guests to have lighter
                        backpacks, and more energy spent enjoying the lakes and beauty of the mountains." 
                    imgSrc="burro.jpg"
                    imagePosition="left"
                />
                <InfoCard 
                    title="Local food" 
                    text="The food we provide is excellent, hands down. We will be eating the local cuisine while on our
                        trek or climb. Examples of meals are pastas, rice, potatoes, trout, chicken, beef, oatmeal, quinoa,
                        puddings, eggs and breads. All of the food is purchased fresh in the local markets of Huaraz, and cooked
                        with a high degree of sanitation by our certified cooks. We may be able to accommodate certain dietary
                        restrictions with an advanced notice." 
                    imgSrc="food.jpg"
                    imagePosition="right"
                />
            </StyledInfoSection>
            <StyledInfoSection>
                <InfoCard 
                    title="Hospitality" 
                    text="We select excellent hotels in Lima and Huaraz with hot showers and continental breakfast
                    provided. They are located in the best affluent areas, close to restaurants and many attractions. All of the
                    transportation provided is with certified commercial drivers, and the vehicles are regularly inspected for
                    safety and maintenance." 
                    imgSrc="girl_on_street.jpg"
                    imagePosition="left"
                />
                <InfoCard 
                    title="Equipment" 
                    text="The equipment we provide on our trips is of the highest quality. Popular brand names you may
                    recognize are selected for their durability and comfort. We provide a dining tent complete with tables and
                    chairs, plates and bowls, cups and cutlery. Also provided, is a complimentary 3 person tent with double
                    occupancy during our treks and climbs. All ropes are provided for trips requiring them." 
                    imgSrc="man_w_gear.jpg"
                    imagePosition="right"
                /> 
            </StyledInfoSection>
                <InfoCard 
                    title="Private trips" 
                    text="Private trips are a great way to make your trip as private and customized as possible and to limit team size
                    to a pre-organized group. In a lot of cases we can add porters, acclimatization days, rest days, or even add
                    additional summits to your customized trip. Please inquire directly with us to talk about options, and plan
                    the perfect custom itinerary suited for your needs." 
                    imagePosition="left"
                    imgSrc="climber.jpg"
                />             
            <StyledIntro>
                <p>
                    We look forward to not only working with you but for you. Please contact us directly for any
                    and all inquiries. We look forward to providing you with one of the best all inclusive international travel
                    adventures available!
                </p>
            </StyledIntro>
        </div>
    )
}

export default Home;