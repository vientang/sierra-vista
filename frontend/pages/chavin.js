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
 * This page holds the content for Olleros to Chavin trip.
 * Includes photo, quick itinerary, detailed itinerary, information, 
 * skill level, cost, gear, elevation, experience gained, routes,
 * not included in cost
 */
const Olleros = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/chinchey-1.jpg" alt="Olleros to Chavin" />
            <TripContainer>
                <TripHeader>
                    <h2>Olleros to Chavin Cultural Trek 4 Days</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li><a href="static/trip_application.pdf" download="Book_Trip"><Button>Book this trip</Button></a></li>
                    </TripNav>                    
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            <h3 id="overview">Olleros to Chavin de Huantar</h3>  
                            <p>
                                This 3 night 4 day trek is one of our easiest and entry level treks. The trekking route takes us from the
                                west side of the Cordillera Blanca, over the Yanashallah pass, and down to the east side ending at Chavin
                                de Huantar. Following an ancient Chavin civilization path, this trek is sacred. Chavin culture is
                                considered the mother culture to all Peruvian people, including the Incas. We use Llamas on this trek, as
                                was tradition, in ancient Chavin transportation methods.
                            </p>
                            <h3>Chavin de Huantar</h3>
                            <p>
                                Chavin de Huantar is an ancient archaeological site containing ruins and artifacts constructed at least by
                                3000BC. This area was occupied until 400-500BC by the Chavin, a major Pre-Incan Culture. This area
                                is a UNESCO World Heritage Site. Primarily a Cermonial site, Chavin de Huantar provided a centralized
                                location for all people of the region to gather for ceremony and worship. The site is located at the
                                meeting point of two rivers, the Mosna river and the Huanchesca river. The meeting point of two rivers is
                                referred to as tinkuy, in Quechua. Tinkuy can be defined as the harmonious meeting of opposing forces.
                                It is suggested and well known that Chavin de Huantar did serve and continues to serve as the meeting
                                place of the natural and cosmic forces.
                            </p>                    
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary">Itinerary</h3>                    
                                <p>Day 1: Arrive in Lima</p>
                                <p>Day 2: Luxury Bus Lima to Huaraz</p>
                                <p>Day 3: Acclimatization day hike</p>
                                <p>Day 4: Acclimatization day hike</p>
                                <p>Day 5: Drive to Olleros, Hike to Sacracancha camp</p>
                                <p>Day 6: Hike Yanashallash pass to Shonkoruri camp</p>
                                <p>Day 7: Hike to Chavin de Huantar, stay in lodge</p>
                                <p>Day 8: Private transportation back to Huaraz</p>
                                <p>Day 9: Luxury bus Huaraz to Lima</p>
                                <p>Day 10: Depart Lima</p>
                            </div>
                            <h4>Detailed Itinerary</h4>
                            <p>Day 1: Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you.
                            Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.</p>
                            <p>Day2: Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz
                            3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.</p>
                            <p>Day 3: Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin
                            our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return
                            to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike.
                            Dinner not included.</p>
                            <p>Day 4: Starting early again we will take our transportation to the trail head of Laguna Churup, our second
                            acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the
                            trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not
                            included.</p>
                            <p>Day 5: After breakfast in our hotel we will be transferred to the small town of Olleros 3,500m
                            (11,480ft). Here we will meet and pack our llamas and begin hiking to our first nights camp Sacracancha
                            3,850m (12,630ft). A gradual ascent will lead us to a small lake with amazing views of the surrounding
                            mountains. 4-5 hours hiking total. All meals included.</p>
                            <p>Day 6: Departing our camp we begin to hike towards the Yanashallash pass 4,700m (15,420ft). This is
                            our high point of the trek. Once over the pass, we begin a section of downhill to our second nights camp
                            at Shonkoruri 4,090m (13,420ft). 5-6 hours total hiking. All meals included.</p>
                            <p>Day 7: Once camp is packed, we make our way to the ancient ruins of Chavin de Huantar 3,150m
                            (10,335ft). Today we are hiking through small Quechua farming communities, witnessing traditional
                            living and peaceful lifestyles. Tonight we will stay in basic accommodations in Chavin. 3-4 hours hiking
                            total. All meals included.</p>
                            <p>Day 8: Departing in the morning after breakfast, Private transportation takes us back to our hotel in
                            Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.</p>
                            <p>Day 9: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with
                            time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima
                            one additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
                            <p>Day 10: Depart Lima for your next adventure.</p>
                        </ContentSection> 
                        <ContentSection>
                            <h3 id="gear">Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url="/static/trekking_gear_check_list.pdf" />                     
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
                        <p>Dates: </p>
                        <p>Skill Level: 3</p>
                        <DownloadLink linkText="gear list" text="Download a" url="/static/trekking_gear_check_list.pdf" />
                        <PriceChart trip="chavin" />
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
                                <li>Olleros 3,500m (11,480ft)</li>
                                <li>Sacracancha 3,850m (12,630ft)</li>
                                <li>Yanashallash pass 4,700m (15,420ft)</li>
                                <li>Shonkoruri 4,090m (13,420ft)</li>
                                <li>Chavin de Huantar 3,150m (10,335)</li>
                            </ul>
                        </div>                                          
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>        
    )
}

export default Olleros;