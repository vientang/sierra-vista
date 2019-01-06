import { 
    RentButton, 
    TripHeader, 
    TripNav, 
    TripImage, 
    TripContent, 
    TripContainer, 
    TripSidePanel,
    ContentContainer,
    ContentSection,
    GearInfo,
    PriceChart,
} from '../components/styles';
import DownloadLink from '../components/DownloadLink';
import trips from '../static/trip-data';

const { 
    application, 
    dates, 
    elevations,
    gearList, 
    heroImg, 
    itinerary, 
    overview, 
    priceInfo, 
    skillLevel, 
    title, 
 } = trips.huayhuash;

const CordilleraHuayhuash = () => {
    return (
        <React.Fragment>
            <TripImage src={`static/images/${heroImg}`} alt="Cordillera Huayhuash" />
            <TripContainer>
                <TripHeader>
                    <h2>{title}</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li>
                            <a href={`static/${application}`} download="Book_Trip">
                                <RentButton>Book this trip</RentButton>
                            </a>
                        </li>
                    </TripNav>                    
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            {overview.map((text, i) => <p key={i} id={i === 0 ? 'overview' : null}>{text}</p>)}
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary">Itinerary</h3>
                                {itinerary.basic.map((plan, i) => (
                                    <p key={i}>
                                        <strong>Day {i + 1}: </strong>
                                        {plan}
                                    </p>
                                ))}
                            </div>
                            <h4>Detailed Itinerary</h4>
                            {itinerary.detailed.map((plan, i) => (
                                <p key={i}>
                                    <strong>Day {i + 1}: </strong>
                                    {plan}
                                </p>
                            ))}
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear">Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url={`/static/${gearList}`} />
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization">Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for trekking success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan prior to the trek with 3 nights sleeping in Huaraz, and two day hikes
                                slowly increasing with altitude ending at 4,450m (14,600ft).
                            </p>
                            <h4>Acclimatization Day Hikes:</h4>
                            <p>
                                Laguna Wilcacocha is a high alpine lake which sits at 3,720m (12,200ft) in the Cordillera Negra. This
                                lake boasts incredible views of the southern Cordillera Blanca range with towering peaks, many over
                                20,000ft. Lunch and transportation will be included in this day hike.
                            </p>
                            <p>
                                Laguna Churup is yet another high alpine lake residing at 4,450m (14,600ft). The mountain Nevado
                                Churup sits directly above the lake and offers amazing views. Lunch and transportation will be included
                                in this day hike.
                            </p>
                        </ContentSection>
                    </ContentContainer>
                    
                    <TripSidePanel>
                        <p>Dates: <span className="trip-dates">{dates}</span></p>
                        <p>Skill Level: {skillLevel}</p>
                        <DownloadLink linkText="gear list" text="Download a" url={`/static/${gearList}`} />
                        <PriceChart trip="huayhuash" />
                        <div>
                            <span className="inclusion-title">Included in the price:</span>
                            <ul>{priceInfo.included.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                        <div>
                            <span className="inclusion-title">Not included in the price:</span>
                            <ul>{priceInfo.notIncluded.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                        <div>
                            <p>Elevations:</p>
                            <ul>{elevations.map((elevation, i) => <li key={i}>{elevation}</li>)}</ul>                            
                        </div>                       
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>        
    )
}

export default CordilleraHuayhuash;