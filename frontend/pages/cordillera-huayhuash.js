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
    GearList,
    GearInfo,
    PriceChart,
} from '../components/styles';
import DownloadLink from '../components/DownloadLink';

const CordilleraHuayhuash = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/lake.jpg" alt="Cordillera Huayhuash" />
            <TripContainer>
                <TripHeader>
                    <h2>Cordillera Huayhuash 10 Day Circuit</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li><a href="static/trip_application.pdf" download="Book_Trip"><RentButton>Book this trip</RentButton></a></li>
                    </TripNav>                    
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            <p id="overview">
                                The Cordillera Huayhuash is an isolated and compact collection of mountains in the Peruvian Andes.
                                Lying 100km south of Huaraz, this range hosts less trekkers and climbers, due to it's isolation. Ranked
                                one of the top 10 treks in the world, trekking in the Huayhuash will never disappoint.
                                Our Itinerary is a shortened version of the traditional 12-16 day trek. Due to recent improvements with
                                access, this is made possible.
                            </p>
                            <p>
                                The Cordillera Huayhuash was a completely unprotected area until 2002, when the Peruvian government
                                declared it a reserved area. However, the actual owners of this land, the communities situated around the
                                range, have designated their own respective holdings, which they themselves manage.
                                April through October is considered the dry season, with low chances of wind and rain. Temperatures
                                can be up to 70 degrees on a bright sunny day, while dropping at or just below freezing in the early
                                morning.
                            </p>
                        </ContentSection>
                        <ContentSection>
                            <div className="basic-itinerary">
                                <h3 id="itinerary">Itinerary</h3>                    
                                <p>Day 1: Arrive in Lima</p>
                                <p>Day 2: Luxury Bus Lima to Huaraz</p>
                                <p>Day 3: Acclimatization day hike</p>
                                <p>Day 4: Acclimatization day hike</p>
                                <p>Day 5: Drive Huaraz to Mantacancha camp at Cuartelhuain</p>
                                <p>Day 6: Hike to laguna Mitucocha camp at laguna Carhuacocha</p>
                                <p>Day 7: Rest day at laguna Carhuacocha</p>
                                <p>Day 8: Hike Carnicero pass to Huayhuash camp</p>
                                <p>Day 9: Hike Portachuelo pass to camp at laguna Viconga</p>
                                <p>Day 10: Rest day at laguna Viconga</p>
                                <p>Day 11: Hike Cuyoc pass camp at Rinconada</p>
                                <p>Day 12: Hike to Huatiac camp</p>
                                <p>Day 13: Hike Tapush pass and Yaucha pass camp at laguna Jahuacocha</p>
                                <p>Day 14: Hike Pampa Llamac pass to Llamac, transport back to Huaraz</p>
                                <p>Day 15: Luxury bus Huaraz to Lima, depart Lima</p>
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
                            <p>Day 5: After an early breakfast we will drive 3-4 hours to the village of Llamac 3,300m (10,825ft). Once
                            we arrive we will meet our burro team and the handlers. While we are eating lunch, the animals will be
                            packed with all necessary group and personal gear for the next 8 days. After lunch we will begin hiking
                            along the Quero river to our first nights camp at Cuartelhain 4,150m (13,615ft). 5-6 hours total hiking
                            time. All meals included.</p>
                            <p>Day 6: After departing camp we will hike the Cacananpunta pass at 4,700m (15,420ft). This pass marks
                            the Andean Continental Divide, which is the watershed from the Andes to the Amazon and South Atlantic
                            Ocean. Once over our second pass, Carhuac 4,650m (15,255ft), we will be struck with the mighty views
                            of Yerupaja 6,634m (21,765ft) and Siula Grande 6,344m (20,813ft). Siula Grande was made famous
                            from the book and film Touching the Void, Simon Yates and Joe Simpson. We will descend the pass into
                            a grassy valley and make our camp at laguna Carhuacocha 4,150m (13,615ft). This lake is renowned for
                            its crystal turquoise water. On clear calm days, the lake has a perfect reflection of the mountains
                            surrounding it. 6-7 hours hiking time. All meals included.</p>
                            <p>Day 7: A well deserved rest. You can take a stroll around the lake, or just lay down, looking up at the
                            peaks. All meals included.</p>
                            <p>Day 8: Departing camp early we begin heading towards Carnicero pass 4,800m (15,750ft). The pass is
                            in between Nevado Carnicero 5,960m (19,550ft) and Nevado Trapecio 5,653 (18,545ft). Beautiful views
                            of Lake Carnicero and Lake Atocshiac come into view. We descend into the small village of Huayhuash
                            4750m (15,585ft) and make our camp. Hiking time 6-7 hours. All meals included.</p>
                            <p>Day 9: This morning we hike the Portachuelo de Huayhuash pass 4,750m (15,585ft). From atop the pass
                            will reveal outstanding views of the Cordillera Raura, another separate mountain range. Once we reach
                            the lake of Viconga 4,395m (14,420ft), we will soak our tired bodies in the warm natural hot springs. 5-6
                            hours total hiking time. All meals included.</p>
                            <p>Day 10: Another well deserved rest day complete with a morning soak in the hot springs. Naps,
                            hydration, and extra calories are key on this day. All meals included.</p>
                            <p>Day 11: Once camp is departed we hike the Cuyoc pass 5,000m (16,405ft). For those that opt out on a
                            climb, this will be your high point. From here we have incredible views of the northern Huayhuash
                            mountains and the southern Raura mountains. We descend and continue hiking to set up our camp in
                            Rinconada 4,300m (14,110ft). Hiking time 5-6 hours. All meals included.</p>
                            <p>Day 12: Today the inclines decrease with easy walking to the village of Huayllap 3,700m (12,139ft).
                            Once in Huayllap, we continue up to the pastures of Huatiac 4,350m (14,270ft) and make camp. 4-5
                            hours hiking time. All meals included.</p>
                            <p>Day 13: Departing camp, we will hike the Yaucha pass at 4,800 (15,750ft). Descending the pass we will
                            trek into our camp at laguna Jahuacocha 4,150m (13,615ft). Hiking time 8 hours. All meals included.</p>
                            <p>Day 14: Our last day of trekking, we depart the lake for the village of Llamac. Making a full circuit, this
                            trek is not to be forgotten. At times it may test your physical and mental limits, but you just created
                            memories that will last as long as you do. Once in the village, we will depart for our arranged
                            accommodations in Huaraz. Hiking time 5-6 hours. Driving time 3-4 hours. Celebratory dinner provided
                            by SierraVista Expeditions. All meals included.</p>
                            <p>Day 15: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with
                            time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima
                            one additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
                            <p>Day 16: Depart Lima for your next adventure.</p>
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
                        <p>Dates: <span className="trip-dates">5/29/19 - 6/12/19 (15 days)</span></p>
                        <p>Skill Level: 4</p>
                        <DownloadLink linkText="gear list" text="Download a" url="/static/trekking_gear_check_list.pdf" />
                        <PriceChart trip="huayhash" />
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
                                <li>Llamac 3,300m (10,825ft)</li>
                                <li>Cuartelhuain camp 4,150m (13,615ft)</li>
                                <li>Cacananpunta pass 4,700m (15,420ft)</li>
                                <li>Carhuac pass 4,650m (15,255ft)</li>
                                <li>Laguna Carhuacocha 4,150m (13,615ft)</li>
                                <li>Carnicero pass 4,800m (15,750ft)</li>
                                <li>Huayhuash village 4750m (15,585ft)</li>
                                <li>Portachuelo de Huayhuash pass 4,750m (15,585ft)</li>
                                <li>Laguna Viconga 4,395m (14,420ft)</li>
                                <li>Cuyoc pass 5,000m (16,405ft)</li>
                                <li>Rinconada camp 4,300m (14,110ft)</li>
                                <li>Huayllap village 3,700m (12,139ft)</li>
                                <li>Huatiac camp 4,350m (14,270ft)</li>
                                <li>Yaucha pass 4,800m (15,750ft)</li>
                                <li>Laguna Jahuacocha 4,150m (13,615ft)</li>                                
                                <li>Ishinca Base Camp: 4,350m (14,270ft)</li>
                                <li>Urus Este Summit 5,420m (17,780ft)</li>
                                <li>Ishinca Summit 5,530m (18,145ft)</li>
                            </ul>
                        </div>                       
                    </TripSidePanel>
                </TripContent>
            </TripContainer>
        </React.Fragment>        
    )
}

export default CordilleraHuayhuash;