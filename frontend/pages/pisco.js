import InnerPageContainer from '../components/InnerPageContainer';
import InnerPageContent from '../components/InnerPageContent';
import ContentContainer from '../components/ContentContainer';
import ContentSection from '../components/ContentSection';
import GearInfo from '../components/GearInfo';
import TripNav from '../components/TripNav';
import Button from '../components/Button';
import ContactButton from '../components/ContactButton';
import HeroImage from '../components/HeroImage';
import SidePanel from '../components/SidePanel';
import TripHeader from '../components/TripHeader';
import TripDates from '../components/TripDates';
import ElevationsChart from '../components/ElevationsChart';
import ExperienceGainedChart from '../components/ExperienceGainedChart';
import PriceChart from '../components/PriceChart';
import InclusionChart from '../components/InclusionChart';
import Skills from '../components/Skills';
import Title from '../components/Title';
import DownloadLink from '../components/DownloadLink';
import {
    AcclimatizeIcon,
    BookTripIcon,
    EmailIcon,
    GearIcon,
    ItineraryIcon,
    PriceIcon,
    RoutesIcon,
} from '../components/icons';
import trips from '../static/trip-data';
import theme from '../components/theme';

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
 } = trips.pisco;

const Pisco = () => {
    return (
        <React.Fragment>
            <HeroImage src={heroImg} alt={name} base64={base64} />
            <InnerPageContainer>
                <TripHeader>
                    <div className="overview-title">
                        <h2>{title}</h2>
                        <span>{elevations.summit[1]}</span>
                    </div>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#routes">Routes</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>
                        <li><a href="#prices">Prices</a></li>
                        <li>
                            <a
                                href={`static/${application}`}
                                download="Book_Trip"
                                style={{ margin: 0 }}
                            >
                                <Button>
                                    <BookTripIcon size={15} color={theme.black} />
                                    Book
                                </Button>
                            </a>
                        </li>
                        <li>
                            <ContactButton width="75px">
                                <EmailIcon size={15} color={theme.dkBlue} />
                                Email
                            </ContactButton>
                        </li>
                    </TripNav>
                </TripHeader>
                
                <InnerPageContent>
                    <ContentContainer>
                        <ContentSection>
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
                            <h4 className="trip-section-sub-title">Pisco South West Ridge:</h4>  
                            {routes.map((route, i) => <p key={i}>{route}</p>)}
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear" className="trip-section-title"><GearIcon size={24} />Gear List</h3>
                            <GearInfo tripType="climbing" />
                            <DownloadLink linkText="printable version" text="Download a" url={`/static/${gearList}`} />
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization" className="trip-section-title"><AcclimatizeIcon size={24} />Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for summit success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan with 2 nights sleeping in Huaraz, and one day hike to 3,720m
                                (12,200ft). Pisco is a long wandering climb to the summit. It is crucial to take our time with
                                acclimatization, all the while learning and practicing the skills required.
                            </p>
                            <h4 className="trip-section-sub-title">Acclimatization Day Hikes:</h4>
                            <p>
                                Laguna Wilcacocha is a high alpine lake which sits at 3,720m (12,200ft) in the Cordillera Negra. This
                                lake boasts incredible views of the southern Cordillera Blanca range with towering peaks, many over
                                20,000ft. Lunch and transportation will be included in this day hike.
                            </p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="prices" className="trip-section-title"><PriceIcon size={24} />Prices:</h3>
                            <PriceChart trip="pisco" style={{ padding: '0 3rem' }} />
                            <InclusionChart trip="pisco" />
                        </ContentSection>
                    </ContentContainer>
                    
                    <SidePanel>
                        {({ scrollY }) => {
                            return (
                                <>
                                    <Title className="side-panel-title">{title}</Title>
                                    <TripDates dates={dates} duration={duration} />
                                    <PriceChart trip="pisco" renderTitle />
                                    <Skills skillLevel={skillLevel} />
                                    <DownloadLink
                                        linkText="gear list"
                                        text="Download a"
                                        url={`/static/${gearList}`}
                                    />
                                    <ElevationsChart elevations={elevations} scrollY={scrollY} />
                                    <ExperienceGainedChart 
                                        experience={experience}
                                        scrollY={scrollY}
                                    />
                                </>
                            )
                        }}
                    </SidePanel>
                </InnerPageContent>
            </InnerPageContainer>
        </React.Fragment>
        
    )
}

export default Pisco;