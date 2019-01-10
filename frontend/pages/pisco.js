import { 
    Button, 
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

/**
 * This page holds the content for Pisco trip.
 * Includes photo, quick itinerary, detailed itinerary, information, 
 * skill level, cost, gear, elevation, experience gained, routes,
 * not included in cost
 */
const Pisco = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/IMG_3676.JPG" alt="Pisco" />
            <TripContainer>
                <TripHeader>
                    <h2>Pisco 5,750m (18,870ft)</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#routes">Routes</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li><a href="static/trip_application.pdf" download="Book_Trip"><Button>Book this trip</Button></a></li>
                    </TripNav>
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            <p id="overview">
                                Pisco is a classic mountain in the Cordillera Blanca. With relatively high altitude, This makes a great
                                choice for those new to the Cordillera Blanca, and also for those who are short on time. Once on the
                                summit, we will have one of the best 360 degree views in the Cordillera Blanca.
                            </p>
                            <p>
                                Our main priority on this expedition is safety through proper acclimatization, proper skills, techniques,
                                and proper leadership. We want to emphasize, fast and light alpine climbing, while being well within our
                                boundary's. This expedition is not guided, rather led. All expedition leaders have summited the mountains
                                they are leading multiple times, and have adequate, sufficient experience to lead the team in a hazardous,
                                high altitude environment.
                            </p>                            
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary">Itinerary</h3>                    
                                <p>Day 1: Arrive in Lima</p>
                                <p>Day 2: Luxury Bus Lima to Huaraz</p>
                                <p>Day 3: Acclimatization day hike</p>
                                <p>Day 4: Drive to Pisco base camp</p>
                                <p>Day 5: Move to Pisco cave camp</p>
                                <p>Day 6: Rest day in cave camp</p>
                                <p>Day 7: Carry to moraine camp, return to cave camp</p>
                                <p>Day 8: Move to moraine camp, review climbing skills on glacier</p>
                                <p>Day 9: Summit day back to cave camp</p>
                                <p>Day 10: Return to Huaraz</p>
                                <p>Day 11: Luxury bus Huaraz to Lima</p>
                                <p>Day 12: Depart Lima</p>
                            </div>
                            <h4>Detailed Itinerary</h4>
                            <p>Day 1: Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you.
                            Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.</p>
                            <p>Day 2: Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz
                            3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.</p>
                            <p>Day 3: Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin
                            our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return
                            to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike.
                            Dinner not included.</p>
                            <p>Day 4: We will depart our hotel in Huaraz at 8am and drive as a team to Pisco base camp 3,810m
                            (12,500ft) in the Llanganuco valley. The scenic 3 hour drive will take us through beautiful farming
                            communities and past the notorious ice blue Llanganuco lakes. Here we will set up base camp and
                            continue to acclimatize. All meals included.</p>
                            <p>Day 5: From base camp we will hike as a team to Pisco cave camp 4,265m (14,000ft). All meals
                            included.</p>
                            <p>Day 6: Active rest day in cave camp. Today we will review glacier and crevasse rescue skills. All meals
                            included.</p>
                            <p>Day 7: Carry loads to moraine camp 4,877m (16,000ft). This day crosses a challenging morainal glacier.
                            Return to sleep in cave camp. All meals included.</p>
                            <p>Day 8: Move as a team to moraine camp. After lunch and a rest we head onto the glacier. We will
                            review all skills covered on day 6, now including crampon and ice axe skills. This day greatly aids in
                            acclimatization and allows a huge gain in summit possibility making tomorrows climb shorter. Return to
                            moraine camp for the night. All meals included.</p>
                            <p>Day 9: Summit day 5,750m (18,870ft). With an early alpine start, we will gain the summit of Pisco and
                            return to cave camp. All meals included.</p>
                            <p>Day 10: Depart from cave camp in the morning and trek back to base camp. With our private
                            transportation we drive back to our hotel in Huaraz. Celebratory dinner provided by Sierra Vista
                            Expeditions. All meals included.</p>
                            <p>Day 11: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with
                            time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima
                            one additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
                            <p>Day 12: Depart Lima for your next adventure.</p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="routes">Routes</h3>  
                            <h4>Pisco South West Ridge:</h4>  
                            <p>
                                We will climb the normal route on Pisco's south west ridge beginning with 3rd
                                class rock scrambles before the snow line. From the toe of the glacier we climb moderate slopes to the 
                                saddle between Huandoy este and Pisco. With a gradual sloping glacier weaving around crevasses we climb
                                to the final summit wall. The wall is often steep, requiring 60 degree snow and ice climbing and 
                                excellent crampon and ice axe placement.
                            </p>                            
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear">Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url="/static/climbing_gear_check_list.pdf" />
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization">Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for summit success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan with 2 nights sleeping in Huaraz, and one day hike to 3,720m
                                (12,200ft). Pisco is a long wandering climb to the summit. It is crucial to take our time with
                                acclimatization, all the while learning and practicing the skills required.
                            </p>
                            <h4>Acclimatization Day Hikes:</h4>
                            <p>
                                Laguna Wilcacocha is a high alpine lake which sits at 3,720m (12,200ft) in the Cordillera Negra. This
                                lake boasts incredible views of the southern Cordillera Blanca range with towering peaks, many over
                                20,000ft. Lunch and transportation will be included in this day hike.
                            </p>
                        </ContentSection>
                    </ContentContainer>
                    
                    <TripSidePanel>
                        <p>Dates: <span className="trip-dates">7/22/19 - 8/02/19 (12 days)</span></p>
                        <p>Skill Level: 5</p>
                        <DownloadLink linkText="gear list" text="Download a" url="/static/climbing_gear_check_list.pdf" />
                        <PriceChart trip="ishinca13" />
                        <div>
                            <span className="inclusion-title">Included in the price:</span>
                            <ul>
                                <li>All required transportation as stated in itinerary</li>
                                <li>All meals as stated in itinerary</li>
                                <li>Celebratory dinner upon successful completion of expedition</li>
                                <li>All hotel rooms, private double occupancy</li>
                                <li>Burros for personal and group gear to and from base camp</li>
                                <li>Cooking tent, dining tent, tables, and chairs</li>
                                <li>Stoves and fuel</li>
                                <li>Cook and/or assistant cook</li>
                                <li>Tents for base camp, double occupancy</li>
                                <li>Ropes for climbing</li>
                                <li>All park fees, conservation fees and highway fees</li>     
                            </ul>
                        </div>
                        <div>
                            <span className="inclusion-title">Not included in the price:</span>
                            <ul>
                                <li>International round-trip airfare to or from Lima</li>
                                <li>Dinners in Huaraz/Lima unless stated in Itinerary</li>
                                <li>Rescue or medical insurance, evacuation costs, insurance of any kind</li>
                                <li>Additional lodging/tent charges for single occupancy</li>
                                <li>Alcoholic beverages</li>
                                <li>Snacks/energy food during expedition</li>
                                <li>Personal climbing/trekking clothing</li>
                                <li>Personal climbing/trekking equipment</li>
                                <li>Staff gratuities</li>
                                <li>Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc.</li>
                            </ul>
                        </div>
                        <div>
                            <p>Elevations:</p>
                            <ul>
                                <li>Huaraz 3,050m (10,000ft)</li>
                                <li>Laguna Wilcacocha 3,720m (12,200ft)</li>
                                <li>Pisco base camp 3,810m (12,500ft)</li>
                                <li>Cave camp 4,265m (14,000ft)</li>
                                <li>Moraine camp 4,877m (16,000ft)</li>
                                <li>Pisco summit 5750m (18,870ft)</li>
                            </ul>
                        </div>
                        <div>
                            <p>Experience gained:</p>
                            <ul>
                                <li>Crampon and ice axe technique</li>
                                <li>Snow and ice anchors</li>
                                <li>Crevasse rescue</li>
                                <li>Moving as a rope team on a glacier</li>
                                <li>Snow and moderate ice climbing at altitude</li>
                                <li>Route finding and glacier navigation</li>
                                <li>Cold weather camping</li>
                            </ul>
                        </div>
                        
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>
        
    )
}

export default Pisco;