import { 
    Button, 
    ContentContainer,
    ContentSection,
    GearInfo,
    HeroImage, 
    InclusionChart,
    PriceChart,
    TripContainer, 
    TripContent, 
    TripDates,
    TripHeader, 
    TripNav, 
    TripSidePanel,
} from '../components/styles';
import { AcclimatizeIcon, GearIcon, ItineraryIcon, PriceIcon } from '../components/icons';
import DownloadLink from '../components/DownloadLink';
import trips from '../static/trip-data';

const { 
    application,
    base64, 
    dates, 
    duration,
    elevations,
    gearList, 
    heroImg, 
    itinerary, 
    name,
    overview, 
    skillLevel, 
    title, 
 } = trips.huayhuash;

const CordilleraHuayhuash = () => {    
    return (
        <React.Fragment>
            <HeroImage src={heroImg} alt={name} base64={base64} />
            <TripContainer>
                <TripHeader>
                    <h2>{title}</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>
                        <li><a href="#prices">Prices</a></li>
                        <li>
                            <a href={`static/${application}`} download="Book_Trip">
                                <Button>Book this trip</Button>
                            </a>
                        </li>
                    </TripNav>
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            <p className="overview-section">{overview[0]}</p>
                            <p className="overview-section">{overview[1]}</p>     
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary" className="trip-section-title"><ItineraryIcon size={24} />Itinerary</h3>
                                {itinerary.basic.map((plan, i) => (
                                    <p key={i}>
                                        <strong>Day {i + 1}: </strong>
                                        {plan}
                                    </p>
                                ))}
                            </div>
                            <h4 className="trip-section-sub-title">Detailed Itinerary</h4>
                            {itinerary.detailed.map((plan, i) => (
                                <p key={i}>
                                    <strong>Day {i + 1}: </strong>
                                    {plan}
                                </p>
                            ))}
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear" className="trip-section-title"><GearIcon size={24} />Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url={`/static/${gearList}`} />
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization" className="trip-section-title"><AcclimatizeIcon size={24} />Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for trekking success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan prior to the trek with 3 nights sleeping in Huaraz, and two day hikes
                                slowly increasing with altitude ending at 4,450m (14,600ft).
                            </p>
                            <h4 className="trip-section-sub-title">Acclimatization Day Hikes:</h4>
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
                        <ContentSection>
                            <h3 id="prices" className="trip-section-title">
                                <PriceIcon size={24} />Prices:
                            </h3>
                            <InclusionChart trip="huayhuash" />
                        </ContentSection>
                    </ContentContainer>
                    
                    <TripSidePanel>
                        <TripDates dates={dates} duration={duration} />
                        <p>Skill Level: {skillLevel}</p>
                        <DownloadLink linkText="gear list" text="Download a" url={`/static/${gearList}`} />
                        <p>Prices:</p>
                        <PriceChart trip="huayhuash" />
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