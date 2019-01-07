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
 * This page holds the content for Quilcayhuanca Valley trip.
 * Includes photo, quick itinerary, detailed itinerary, information, 
 * skill level, cost, gear, elevation, experience gained, routes,
 * not included in cost
 */
const QuilcayhuancaValley = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/mountain1.jpg" alt="Quilcayhuanca Valley" />
            <TripContainer>
                <TripHeader>
                    <h2>Quilcayhuanca Valley</h2>
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
                            <h3 id="overview">Quilcayhuanca Trek</h3>  
                            <p>
                                This relatively relaxed three night four day trek is an ideal entry level trip to high altitude trekking. The
                                first days trek to Maparaju base camp is absolutely stunning. We will be hiking on soft grass areas know
                                as pampas, all the while next to stunning alpine creeks, surrounded by incredible high valley walls, with
                                high alpine wild flowers galore. Our second day will be spent hiking further into the valley to make our
                                camp at the beautiful lake of Tullpacochca. Our active rest day includes a chance to explore a second
                                valley, Quebrada Cayesh. Beautiful views of high mountains and opportunities to sight condors are
                                included. Our final day, we descend gradually out of the valley to meet our transportation. For those that
                                do not wish to add on a climb, you will be heading back to Lima for your flights home.
                            </p>                            
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary">Itinerary</h3>                    
                                <p>Day 1: Arrive in Lima</p>
                                <p>Day 2: Luxury Bus Lima to Huaraz</p>
                                <p>Day 3: Acclimatization day hike</p>
                                <p>Day 4: Acclimatization day hike</p>
                                <p>Day 5: Drive to the base of Quilcayhuanca, hike to first camp</p>
                                <p>Day 6: Hike to Laguna Tullpacocha</p>
                                <p>Day 7: Active rest day</p>
                                <p>Day 8: Hike out, stay in Huaraz</p>
                                <p>Day 9: Luxury bus Huaraz to Lima</p>
                                <p>Day 10: Depart Lima</p>
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
                            <p>Day 4: Starting early again we will take our transportation to the trail head of Laguna Churup, our second
                            acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the
                            trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not
                            included.</p>
                            <p>Day 5: We will depart our hotel in Huaraz at 8am and drive with private transportaion to the base of the
                            Quilcayhuanca valley. Here we will organize our burros and begin hiking to the base camp of Maparaju.
                            2-3 hours walking. All meals included.</p>
                            <p>Day 6: After a leisurely morning, we will pack up camp and begin hiking to Lake Tullpacocha 4,250m
                            (13,940). Here we will make our second nights camp. All meals included.</p>
                            <p>Day 7: Today we have a nice active rest day. In the mid morning,, we will take a day hike up into the
                            Cayesh valley. Or for those who wish to relax, you can spend your day hiking around the lake or just
                            read a book while looking at the mountains. All meals included.</p>
                            <p>Day 8: Once breakfast is finished and the camp is packed, we will begin hiking out of the Quilcayhuanca
                            valley. Once at the entrance, our transportation will be waiting to take us back to Huaraz. Celebratory
                            dinner provided by SierraVista Expeditions. All meals included.</p>
                            <p>Day 9: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time
                            constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one
                            additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
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
                        <p>Dates: <span className="trip-dates">8/26/19 - 9/4/19 (10 days)</span></p>
                        <p>Skill Level: 2</p>
                        <DownloadLink linkText="gear list" text="Download a" url="/static/trekking_gear_check_list.pdf" />
                        <PriceChart trip="quilcayhuanca" />
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
                                <li>Laguna Churup 4,450m (14,600ft)</li>
                                <li>Laguna Tullpacocha: 4,250m (13,940ft)</li>
                            </ul>
                        </div>
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>
        
    )
}

export default QuilcayhuancaValley;