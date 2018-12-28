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
 * This page holds the content for Ishina 13 day trip.
 * Includes photo, quick itinerary, detailed itinerary, information, 
 * skill level, cost, gear, elevation, experience gained, routes,
 * not included in cost
 */
const QuilValluna = () => {
    return (
        <React.Fragment>
            <TripImage src="static/images/mountain2.jpg" />
            <TripContainer>
                <TripHeader>
                    <h2>Quilcayhuanca 3 Day Trek Vallunaraju 2 Day Climb</h2>
                    <TripNav>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li><a href="#routes">Routes</a></li>
                        <li><a href="#gear">Gear List</a></li>
                        <li><a href="#acclimatization">Acclimatization</a></li>                        
                        <li><RentButton>Book this trip</RentButton></li>
                    </TripNav>                    
                </TripHeader>
                
                <TripContent>
                    <ContentContainer>
                        <ContentSection>
                            <h3>Quilcayhuanca to Cojup Trek</h3>
                            <p id="overview">
                                This relatively relaxed two night three day trek is an ideal entry level trip to high altitude trekking. The
                                first days trek to Tullpacocha is absolutely stunning. We will be hiking on soft grass areas know as
                                pampas, all the while next to stunning alpine creeks, surrounded by incredible high valley walls, with
                                high alpine wild flowers galore. Our active rest day includes a chance to explore a second valley,
                                Quebrada Cayesh. Beautiful views of high mountains and opportunities to sight condors are included.
                                Our final day, we descend gradually out of the valley to meet our transportation and head back to Huraz.
                            </p>
                            <h3>Vallunaraju Climb</h3>
                            <p>
                                Nevado Vallunaraju sits directly above the city of Huaraz with a striking twin summit. After our
                                acclimatization day hikes and our 3 day trek we will be well acclimatized. Vallunaraju offers wonderful
                                views of the city of Huaraz and the peaks that surround it. This is en entry level climb with relatively
                                high altitude, and a great chance to practice cramponing, ice axe, and roped glacial travel techniques.
                            </p>
                            <h3>Vallunaraju Southwest Slopes</h3>
                            <p>
                                Departing moraine camp we will step onto the glacier after 20 minutes. Here we will gear up and begin
                                our roped climb on the glacier. Walking on gradual glacial slopes while weaving around crevasses will
                                take us to the col of the north and south summits. The north summit is higher and will be steeper, up to
                                40 degree snow climbing. If time allows, we will climb the south summit as well before returning to
                                moraine camp. 4-5 hours to north summit, 1-2 hours descent.
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
                            <h3 id="itinerary">Itinerary</h3>
                            <p>Day 1: Arrive in Lima</p>
                            <p>Day 2: Luxury Bus Lima to Huaraz</p>
                            <p>Day 3: Acclimatization day hike</p>
                            <p>Day 4: Acclimatization day hike</p>
                            <p>Day 5: Drive to the base of Quilcayhuanca, hike to first camp Tullpacocha</p>
                            <p>Day 6: Active rest day</p>
                            <p>Day 7: Hike to base of Quilcayhuanca, Drive back to Huaraz</p>
                            <p>Day 8: Huaraz rest day, gear check</p>
                            <p>Day 9: Drive to Vallunaraju base camp, carry to moraine camp</p>
                            <p>Day 10: Climb Vallunaraju, back to Huaraz</p>
                            <p>Day 11: Luxury bus Huaraz to Lima</p>
                            <p>Day 12: Depart Lima</p>

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
                            Quilcayhuanca valley. Here we will organize our burros and begin hiking to the head of the valley to
                            make our first camp at Tullpacocha (4,250m) 13,940ft. 4-5 hours walking. All meals included.</p>
                            <p>Day 6: Today we have a nice active rest day. In the mid morning,, we will take a day hike up into the
                            Cayesh valley. Or for those who wish to relax, you can spend your day hiking around the lake or just
                            read a book while looking at the mountains. All meals included.</p>
                            <p>Day 7: Once breakfast is finished and the camp is packed, we will begin hiking out of the Quilcayhuanca
                            valley. Once at the entrance, our transportation will be waiting to take us back to Huaraz. Dinner not
                            included.</p>
                            <p>Day 8: Active rest day in Huaraz. We have the recommended option of an additional acclimatization
                            day hike to lake 69 4,550m (14,925ft) where lunch will be provided at the lake. Otherwise we will take a
                            lazy rest day enjoying the town and restaurants, with a gear check in the evening. Dinner not included.</p>
                            <p>Day 9: After breakfast in our hotel, we will depart for Vallunaraju base camp in our private
                            transportation, driving right up to the camp. Here we will organize packs and begin our hike to moraine
                            camp 4,760m (15,600ft) Total hiking 3-4 hours. Once camp is setup we will review glacier and crampon
                            techniques. We will get a good nights rest in anticipation of our early morning summit bid. *Porters are
                            provided for our carry to moraine camp. All meals included.</p>
                            <p>Day 10: Leaving camp by 4am we will begin our climb to the summit of Vallunaraju 5,686m (18,650ft).
                            A minimum of 4 hours climbing with a descent of 1-2 hours. Once back to moraine camp, we will spend
                            1-2 hours resting and make our way back to base camp. Here our transportation will be waiting to drive
                            us back to our hotel in Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals
                            included.</p>
                            <p>Day 11: Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with
                            time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima
                            one additional night to enjoy fresh seafood and nightlife. Dinner not included.</p>
                            <p>Day 12: Depart Lima for your next adventure.</p>
                        </ContentSection>
                        <ContentSection>
                            <h3 id="gear">Gear List</h3>
                            <GearInfo />
                            <GearList />
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
                                (10,000ft). We allow a gradual plan prior to the trek with 3 nights sleeping in Huaraz, and two day hikes
                                slowly increasing with altitude ending at 4,450m (14,600ft). On our 8th day, we have a highly
                                recommended additional day hike to 69 4,550m (14,925ft).
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
                        <p>Skill Level: 5</p>
                        <DownloadLink linkText="gear list" text="Download a" url="/gear-list" />
                        <PriceChart trip="quilvaluna" />
                        <div>
                            <span>Included in the price:</span>
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
                            <span>Not included in the price:</span>
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
                                <li>Tullpacocha: 4,250m (13,940ft)</li>
                                <li>Laguna Churup 4,450m (14,600ft)</li>
                                <li>Vallunaraju Moraine Camp 4,760m (15,600ft)</li>
                                <li>Vallunaraju Summit 5,686m (18,650ft)</li>
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

export default QuilValluna;