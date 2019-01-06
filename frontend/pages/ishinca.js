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

/**
 * This page holds the content for Ishinca Valley trip.
 * Includes photo, quick itinerary, detailed itinerary, information, 
 * skill level, cost, gear, elevation, experience gained, routes,
 * not included in cost
 */
const IshincaValley = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/IMG_0010_4.JPG" alt="Ishinca Valley" />
            <TripContainer>
                <TripHeader>
                    <h2>Ishinca Valley Expedition</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#routes">Routes</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li><a href="static/trip_application.pdf" download="Book_Trip"><RentButton>Book this trip</RentButton></a></li>
                    </TripNav>                    
                </TripHeader>
                
                <TripContent>
                <ContentContainer>
                        <ContentSection>
                            <h3 id="overview">Urus Este, and Ishinca. Cordillera Blanca, Ancash, Peru</h3>
                            <p>
                                The Cordillera Blanca is the perfect destination for novice and advanced climbers alike. Also, for those
                                looking to develop glacier experience, high altitude snow and ice climbing, climbers looking for partners
                                or just to broaden your alpine climbing resume.
                            </p>
                            <p>
                                Sierra Vista Expeditions offers a cost effective high altitude expedition to 2 incredible introductory
                                peaks. This expedition is limited to 6 climbers and two expedition leaders. With a 1:3 leader climber
                                ratio.
                            </p>
                            <p>
                                Our experience shows that with a high level of fitness and basic crampon skills, you will enjoy the
                                adventure more and perform better. We will review and discuss all practices needed for a safe, fast, light
                                expedition of two 5,000 meter summits.
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
                                <p>Day 1: Arrive in Lima, hotel in Lima</p>
                                <p>Day 2: Luxury bus to Huaraz</p>
                                <p>Day 3: Acclimatization hike to Laguna Wilcacocha, hotel in Huaraz</p>
                                <p>Day 4: Acclimatization hike to Laguna Churup, hotel in Huaraz</p>
                                <p>Day 5: Private transport to Pashpa, hike to Ishinca Valley base camp</p>
                                <p>Day 6: Rest Day at base camp</p>
                                <p>Day 7: Glacier review day on Ishinca</p>
                                <p>Day 8: Climb Ishinca</p>
                                <p>Day 9: Rest day at base camp</p>
                                <p>Day 10: Climb Urus Este</p>
                                <p>Day 11: Hike to Pashpa, private transport to hotel in Huaraz</p>
                                <p>Day 12: Luxury bus to Lima, hotel in Lima.</p>
                                <p>Day 13: Depart Lima</p>
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
                            <p>Day 5: Our team will begin with breakfast at our hotel in Huaraz and depart at 8am. We will then make the one
                            hour drive, as a team, with private transportation to Pashpa at the mouth of the Ishinca Valley. This is where we will
                            meet the burros and arrieros. After loading, we will begin our 3 to 4 hour trek into Ishinca Valley base camp
                            4,350m (14,270ft) with light packs and lunch on the trail. Once camp is set up, we will enjoy a delicious and wholesome
                            dinner surrounded with incredible views. All meals included.</p>
                            <p>Day 6: Rest day at base camp. Today is a day for catching up on hydration and calories. We continue to
                            acclimatize in anticipation for our summit days. All meals included.</p>
                            <p>Day 7: Today we will depart base camp and hike 3 hours to the toe of the Ishinca glacier. Once on the
                            glacier, we will practice roped travel, building anchors, crampon placement, ice axe placement, and
                            crevasse rescue. We will stash all of our climbing gear and return to base camp. All meals included.</p>
                            <p>Day 8: Departing base camp at 4 am, out by 5 am we will head back to the Ishinca gacier. Once on the
                            glacier, our climb begins. After the summit 5,530m (18,145ft) and once off the glacier, we return to base
                            camp. All meals included.</p>
                            <p>Day 9: Relaxed morning and rest. After lunch, we will review crevasse rescue and anchor construction.
                            All meals included.</p>
                            <p>Day 10: Another alpine start leaving base camp by 5 am we will climb Urus Este 5,420m (18,145ft).
                            Once off the glacier, we return to base camp in time for lunch. All meals included.</p>

                            <p>Day 11: Depart base camp in the morning and trek back to Pashpa. Private transportation back to our
                            hotel in Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.</p>
                            <p>Day 12: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with
                            time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima
                            one additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
                            <p>Day 13: Depart Lima for your next adventure.</p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear">Gear List</h3>
                            <GearInfo />
                            <DownloadLink linkText="printable version" text="Download a" url="/static/climbing_gear_check_list.pdf" />
                        </ContentSection> 
                        <ContentSection>
                            <h3 id="routes">Routes</h3>  
                            <h4>Urus Este South East Face/East Ridge:</h4>  
                            <p>
                                We will begin on a trail immediately out of base camp on the north side of the valley. The trail is well
                                marked and climbs 400 meters to the edge of the moraine ridge. Snow line is reached in 2-3 hours from
                                base camp.
                            </p>
                            <p>
                                Climbing begins with a 45 degree snow slope while crossing over rock slabs leading to the base of the
                                south east face snow slopes. The slopes climb 45 degree snow and relaxing gradually to the base of the
                                east ridge.
                            </p>
                            <p>
                                The east ridge climbs at 45-50 degrees on snow, with some granite rock scrambling. The ridge leads to a
                                30 degree snow slope to the summit. The summit takes on average 1-3 hours from the base of the snow
                                line.
                            </p>
                            <h4>Ishinca North West ridge to South West ridge:</h4>  
                            <p>
                                Leading out of the south end of base camp lies a trail to take us to Laguna Ishinca. Once past the lake, the
                                trail steepens and ends at the foot of the Ishinca glacier. 3-4 hours expected from base camp.
                            </p>
                            <p>
                                Once on the glacier the route takes us gradually onto the north west ridge, gaining the summit with a short
                                but steep 50 degree snow climb. 2-3 hours from the edge of the glacier to summit.
                            </p>
                            <p>
                                Making a full traverse of the mountain, we will descend the south west ridge with gentle snow slopes
                                leading off the glacier. Time to base camp can be anywhere from 3-5 hours total.
                            </p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="acclimatization">Acclimatization Process:</h3>
                            <p>
                                To have the best opportunity for summit success we have an optimized and ideal acclimatization plan.
                                Acclimatization starts during the 7 hour luxurious bus ride from Lima and ending in Huaraz at 3,050m
                                (10,000ft). We allow a gradual plan prior to base camp with 3 nights sleeping in Huaraz, and two day
                                hikes slowly increasing with altitude ending at 4,450m (14,600ft). Once in base camp, we allow ample
                                rest days to recover increasing strength and acclimatization.
                            </p>
                            <h4>Acclimatization Day Hikes:</h4>
                            <p>
                                Laguna Wilcacocha is a high alpine lake which sits at 3,720m (12,200ft) in the Cordillera Negra. This
                                lake boasts incredible views of the southern Cordillera Blanca range with towering peaks, many over
                                20,000ft. Lunch and transportation will be included in this day hike.
                                Laguna Churup is yet another high alpine lake residing at 4,450m (14,600ft). The mountain Nevado
                                Churup sits directly above the lake and offers amazing views. Lunch and transportation will be included
                                in this day hike.
                            </p>
                        </ContentSection>
                    </ContentContainer>
                    
                    <TripSidePanel>
                        <p>Dates: <span className="trip-dates">7/03/19 - 7/15/19 (13 days)</span></p>
                        <p>Skill Level: 1</p>
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
                                <li>Laguna Churup 4,450m (14,600ft)</li>
                                <li>Ishinca Base Camp: 4,350m (14,270ft)</li>
                                <li>Urus Este Summit 5,420m (17,780ft)</li>
                                <li>Ishinca Summit 5,530m (18,145ft)</li>
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

export default IshincaValley;