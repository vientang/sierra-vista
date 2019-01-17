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
    TripHeader, 
    TripNav, 
    TripSidePanel,
} from '../components/styles';
import { AcclimatizeIcon, GearIcon, ItineraryIcon, RoutesIcon, PriceIcon } from '../components/icons';
import DownloadLink from '../components/DownloadLink';
import trips from '../static/trip-data';

const { 
    application,
    base64, 
    dates, 
    duration,
    elevations,
    experience,
    gearList, 
    heroImg, 
    itinerary, 
    name,
    overview, 
    routes,
    skillLevel, 
    title, 
 } = trips.ishinca;

const IshincaValley = () => {
    return (
        <React.Fragment>
            <HeroImage src={heroImg} alt={name} base64={base64} />
            <TripContainer>
                <TripHeader>
                    <h2>{title}</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#routes">Routes</a></li>
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
                            <h3 id="overview">Urus Este, and Ishinca. Cordillera Blanca, Ancash, Peru</h3>
                            {overview.map((text, i) => <p key={i} className="overview-section" id={i === 0 ? 'overview' : null}>{text}</p>)}
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
                            <h3 id="routes" className="trip-section-title"><RoutesIcon size={20} />Routes</h3>  
                            <h4 className="trip-section-sub-title">Urus Este South East Face/East Ridge:</h4>  
                            {routes.map((route, i) => <p key={i}>{route}</p>)}
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear" className="trip-section-title"><GearIcon size={24} />Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url={`/static/${gearList}`} />
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization" className="trip-section-title"><AcclimatizeIcon size={24} />Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for summit success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan prior to base camp with 3 nights sleeping in Huaraz, and two day
                                hikes slowly increasing with altitude ending at 4,450m (14,600ft). Once in base camp, we allow ample
                                rest days to recover increasing strength and acclimatization.
                            </p>
                            <h4 className="trip-section-sub-title">Acclimatization Day Hikes:</h4>
                            <p>
                                Laguna Wilcacocha is a high alpine lake which sits at 3,720m (12,200ft) in the Cordillera Negra. This
                                lake boasts incredible views of the southern Cordillera Blanca range with towering peaks, many over
                                20,000ft. Lunch and transportation will be included in this day hike.
                                Laguna Churup is yet another high alpine lake residing at 4,450m (14,600ft). The mountain Nevado
                                Churup sits directly above the lake and offers amazing views. Lunch and transportation will be included
                                in this day hike.
                            </p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="prices" className="trip-section-title"><PriceIcon size={24} />Prices:</h3>
                            <InclusionChart trip="ishinca" />
                        </ContentSection>
                    </ContentContainer>
                    
                    <TripSidePanel>
                        <p>Dates: <span className="trip-dates">{dates[0]} {duration}</span></p>
                        <p>Skill Level: {skillLevel}</p>
                        <DownloadLink linkText="gear list" text="Download a" url={`/static/${gearList}`} />
                        <p>Prices:</p>
                        <PriceChart trip="ishinca" />
                        <div>
                            <p>Elevations:</p>
                            <ul>{elevations.map((elevation, i) => <li key={i}>{elevation}</li>)}</ul>                            
                        </div> 
                        <div>
                            <p>Experience gained:</p>
                            <ul>{experience.map((gained, i) => <li key={i}>{gained}</li>)}</ul>                            
                        </div>                         
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>        
    )
}

export default IshincaValley;