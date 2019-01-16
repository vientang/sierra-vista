import styled from 'styled-components';
import { TripContainer, TripContent, ContentContainer, TripSidePanel } from '../components/styles';
import { AvatarIcon, EmailIcon } from '../components/icons';

const StyledContactInfo = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-left: 1rem;
        font-family: ${props => props.theme.standardFont};
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        line-height: normal;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
    h3 {
        margin: 1rem 0;
        line-height: normal;
    }
`;

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    .staff-name {
        font-size: 1.1rem;
        line-height: 1.5;        
    }
`;

const AboutUs = () => {
    return (
        <TripContainer>
            <TripContent>
                <ContentContainer paddingTop="3rem">
                    <h2>Who are we?</h2>
                    <p>
                        Sierra Vista Expeditions started as a dream more than ten years ago by me, Josh Miller. Peru has
                        always fascinated me since my first expedition in the country in 2012. Every year since I have returned,
                        sometimes spending up to 3 months climbing and trekking in the Cordillera Blanca. After working for
                        other guiding companies both in the United States and in Peru, I gained an array of knowledge of how to
                        provide an amazing trip into these lands, and to share my amazing experiences with others.
                    </p>
                    <p>
                        Here at Sierra Vista Expeditions, we pride ourselves on being a very small, personal company
                        that provides big service to the Cordillera Blanca and Huayhuash ranges. We are unlike other companies,
                        as we only offer a few trips that have been selected solely to provide a more personal experience for our
                        client. This allows us to focus more on you and your trip, not others or other trips. Our group sizes are
                        small, only 6 guests for climbing trips with a 1:3 leader to climber ratio, and 8 guests for trekking trips,
                        1:4 leader to trekker ratio. All of our support staff provided on our trips are all local to the region,
                        providing extra work to support their families. Because we are so small, we are able to offer a lower
                        price, while still providing the same if not higher quality care for our guests.
                    </p>
                    <p>
                        On all of the trips we offer, you will gain a better understanding of the culture you are
                        surrounded by, and become a better more competent hiker or climber at altitude. Our vision moving
                        forward is to connect with others, providing what we consider a necessity for life, a better connection and
                        understanding of the natural world.
                    </p>
                    <h2>Private trips</h2>
                    <p>
                        Private trips are a great way to make your trip as private and customized as possible and to limit team size
                        to a pre-organized group. In a lot of cases we can add porters, acclimatization days, rest days, or even add
                        additional summits to your customized trip. Please inquire directly with us to talk about options, and plan
                        the perfect custom itinerary suited for your needs.
                    </p>
                </ContentContainer>
                <TripSidePanel paddingTop="3rem">
                    <StyledContactInfo>
                        <EmailIcon size={24} />
                        <a href="mailto:info@sierravistaexpeditions.com">info@sierravistaexpeditions.com</a>
                    </StyledContactInfo>
                    <h3 className="staff-heading">Staff</h3>
                    <StyledContactInfo>
                        <AvatarIcon size={60} />
                        <StyledContact>
                            <p className="staff-name">Josh Miller</p>
                            <p className="staff-title">Expedition Leader</p>
                        </StyledContact>
                    </StyledContactInfo>
                    
                    <p className="staff-desc">
                        Josh was born in Columbus, Ohio and quickly realized this was not the place for him. He began
                        exploring and climbing in California in 2010. He has climbed extensively throughout California, Utah,
                        Nevada, Arizona and Colorado. Specializing in ice and alpine climbing, he has guided Denali in Alaska
                        and guided ice climbing in Ouray Colorado.
                    </p>
                    <p className="staff-desc">
                        Josh has trekked and climbed extensively in Peru throughout the Cordillera Blanca on 8 self
                        funded expeditions. He has a passion for traveling and guiding people to places they may not be able to
                        do themselves. He spends his spring and fall guiding in the Grand Canyon, his summers climbing in
                        Peru, and his winters in either Brazil or climbing frozen waterfalls in the San Juan Mountains of
                        Colorado.
                    </p>
                    <StyledContactInfo>
                        <AvatarIcon size={60} />
                        <StyledContact>
                            <p className="staff-name">Marisete Quadrado</p>
                            <p className="staff-title">Logistics Coordinator</p>
                        </StyledContact>
                    </StyledContactInfo>
                    
                    <p className="staff-desc">
                        Marisete is a native of Brazil. Born in a farming community, she has a passion for plants and
                        nature. After having her own practice in physical therapy, she decided to travel to Colorado where she
                        fell in love with hiking in alpine environments. She has hiked in the Grand Canyon on multiple overnight
                        backpacking trips and has 3 expeditions to Peru.
                    </p>
                    <p className="staff-desc">
                        She assists our cooking staff in the packing and logistical efforts required for all of our trips in
                        Peru. Marisete joins on the trips as well, becoming a basecamp manager and assistant cook when
                        needed. She is fluent in Spanish, English and Portuguese.
                    </p>
            </TripSidePanel>
            </TripContent>
            
        </TripContainer>
    );
}

export default AboutUs;