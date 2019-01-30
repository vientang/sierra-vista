import InnerPageContainer from '../components/InnerPageContainer';
import InnerPageContent from '../components/InnerPageContent';
import ContentContainer from '../components/ContentContainer';
import ContentSection from '../components/ContentSection';
import GearInfo from '../components/GearInfo';
import TripNav from '../components/TripNav';
import Button from '../components/Button';
import HeroImage from '../components/HeroImage';
import SidePanel from '../components/SidePanel';
import TripHeader from '../components/TripHeader';
import TripDates from '../components/TripDates';
import ElevationsChart from '../components/ElevationsChart';
import PriceChart from '../components/PriceChart';
import InclusionChart from '../components/InclusionChart';
import Skills from '../components/Skills';
import Title from '../components/Title';
import DownloadLink from '../components/DownloadLink';
import { AcclimatizeIcon, GearIcon, ItineraryIcon, PriceIcon } from '../components/icons';
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
            <InnerPageContainer>
                <TripHeader>
                    <h2 className="overview-title">{title}</h2>
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
                <InnerPageContent>
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
                            <PriceChart trip="huayhuash" style={{ padding: '0 3rem' }} />
                            <InclusionChart trip="huayhuash" />
                        </ContentSection>
                    </ContentContainer>
                    
                    <SidePanel>
                        {({ scrollY }) => {
                            return (
                                <>
                                    <Title className="side-panel-title">{title}</Title>
                                    <TripDates dates={dates} duration={duration} />
                                    <PriceChart trip="huayhuash" renderTitle />
                                    <Skills skillLevel={skillLevel} />
                                    <DownloadLink 
                                        linkText="gear list" 
                                        text="Download a" 
                                        url={`/static/${gearList}`} 
                                    />
                                    <ElevationsChart elevations={elevations} scrollY={scrollY} />
                                </>
                            )
                        }}
                    </SidePanel>
                </InnerPageContent>
            </InnerPageContainer>
        </React.Fragment>        
    )
}

export default CordilleraHuayhuash;