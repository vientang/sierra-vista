import Link from 'next/link';
import styled from 'styled-components';
import { RentButton, HomePageImage } from '../components/styles';

const StyledHomePage = styled.div`
    padding: ${props => props.theme.padding};
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
`;

const StyledOverlay = styled.div`
    position: absolute;
    color: white;
    top: 0;
    left: 0;
    transform: translateY(525px);
    padding: ${props => props.theme.padding};
    a {
        display: inline-block;
    }
    p,
    h2,
    span {
        margin: 0;
        filter: drop-shadow(.05em .05em orange);
    }
    h2 {
        font-size: 1.2rem;
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

/**
 * Link from next binds HTML5 push state to anchor tags
 */
const Home = () => {
    return (
        <div>
            <HomePageImage src="static/images/lake.jpg" alt="Cordillera Huayhuash" />
            <StyledOverlay>
                <h2>Next Trip</h2>
                <p>Cordillera Huayhash</p>
                <span>April 14th - April 22nd</span>
                <Link href="/cordillera-huayhuash">
                    <a><RentButton>Reserve a spot</RentButton></a>
                </Link>
            </StyledOverlay>
            <StyledHomePage>                
                <p>
                    Here at Sierra Vista Expeditions, we offer a lower cost than most other companies based in the
                    United States. This is because we are a small company with all of our own staff and equipment based in
                    Peru. This allows us to pass on the savings to you.
                </p>
                <p>
                    All of our trekking and climbing trips are assisted with animals, mainly burros (donkeys).
                    Everything we need for the trip including your personal gear and clothing will be transported by burros,
                    requiring you to carry only what you need for the day of hiking. This allows our guests to have lighter
                    backpacks, and more energy spent enjoying the lakes and beauty of the mountains.</p><p>
                    The food we provide is excellent, hands down. We will be eating the local cuisine while on our
                    trek or climb. Examples of meals are pastas, rice, potatoes, trout, chicken, beef, oatmeal, quinoa,
                    puddings, eggs and breads. All of the food is purchased fresh in the local markets of Huaraz, and cooked
                    with a high degree of sanitation by our certified cooks. We may be able to accommodate certain dietary
                    restrictions with an advanced notice.
                </p>
                <p>
                    We select excellent hotels in Lima and Huaraz with hot showers and continental breakfast
                    provided. They are located in the best affluent areas, close to restaurants and many attractions. All of the
                    transportation provided is with certified commercial drivers, and the vehicles are regularly inspected for
                    safety and maintenance.
                </p>
                <p>
                    The equipment we provide on our trips is of the highest quality. Popular brand names you may
                    recognize are selected for their durability and comfort. We provide a dining tent complete with tables and
                    chairs, plates and bowls, cups and cutlery. Also provided, is a complimentary 3 person tent with double
                    occupancy during our treks and climbs. All ropes are provided for trips requiring them.</p><p>
                    We look forward to not only working with you but for you. Please contact us directly for any
                    and all inquiries. We look forward to providing you with one of the best all inclusive international travel
                    adventures available!
                </p>
            </StyledHomePage>            
        </div>
        
    )
}

export default Home;