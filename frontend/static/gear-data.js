const trekkingGearData = [
    {
        category: 'Technical Clothing',
        items: [
            {
                brand: 'Patagonia Capilene Lightweight',
                title: 'Light weight long underwear (1-2) Each Tops and bottoms',
                desc: 'Non-cotton only. Must be merino wool or a synthetic fiber such as polyester.',
                required: false,
            },
            {
                brand: 'Patagonia Thermal Weight',
                title: 'Heavy weight long underwear(1) Bottoms only',
                desc: 'Non-cotton only. Must be merino wool or a synthetic fiber such as polyester.',
                required: false,
            },
            {
                brand: 'Patagonia Capilene Lightweight T-shirt',
                title: 'Synthetic short sleeve trekking shirt (1-2)',
                desc: 'Non-cotton only. Must be merino wool or a synthetic fiber such as polyester.',
                required: false,
            },
            {
                brand: 'Outdoor Researh Ferrosi Short',
                title: 'Trekking shorts (1)',
                desc: 'If the sun is shining it may be hot at lower altitudes and on day hikes from town. Highly recommended. A synthetic fast drying trekking short. Also can double as a swim suit if you feel like plunging into a high alpine lake!',
                required: false,
            },
            {
                brand: 'Outdoor Research Ferrosi Pant',
                title: 'Soft shell trekking pant (1-2)',
                desc: 'Must be a synthetic pant no jeans or cotton. Zip off style pants are OK.',
                required: false,
            },
            {
                brand: 'Mountain Hardwear Compressor pant',
                title: 'Insulated synthetic pants with full side zipper (1) (optional)',
                desc: 'These are highly recommended for extra warmth at camps. A full side zip is necessary for putting on over boots or shoes.',
                required: false,
            },
            {
                brand: 'Outdoor Research Deviator Hoody',
                title: 'Midlayer Top (1)',
                desc: 'An insulated fleece or synthetic mid layer top. Hoods are optional but recommended.',
                required: false,
            },
            {
                brand: 'Outdoor Research Winter Ferrosi Hoody',
                title: 'Insulated down or synthetic jacket (1)',
                desc: 'A lightweight jacket insulated with down or synthetic fibers. Can be used as a stand alone piece or part of your layering system. A hood is desired.',
                required: false,
            },
            {
                brand: 'Outdoor Research Interstellar jacket',
                title: 'Hard shell jacket with hood (1)',
                desc: 'Should be non-insulated and GORE-TEX or similar 3 layer waterproof and wind proof fabric with a hood. This layer is your outer shell and will need to fit over all other layers.',
                required: false,
            },
            {
                brand: 'Outdoor Research Foray pant or similar',
                title: 'Hard shell pants with full side zipper (1)',
                desc: 'Should be non-insulated and GORE-TEX or similar 3 layer waterproof and wind proof fabric. This layer is your outer shell and will need to fit over all other layers.',
                required: false,
            },
        ],
    },
    {
        category: 'Footwear',
        items: [
            {
                brand: 'La Sportiva Boulder X',
                title: 'Light trekking boots/Trekking shoes',
                desc: 'Good support while still light weight is ideal. Must have plenty of room in the toe box. These are used for acclimatization day hikes and when trekking to and from base camp.',
                required: false,
            },
            {
                brand: 'Feathered Friends Down Bootie',
                title: 'Light trekking boots/Trekking shoes',
                desc: 'A completely optional yet highly recommended piece. It is really nice to change into these after a hard day of trekking/climbing.',
                required: false,
            },
            {
                brand: 'Darn Tough or Patagonia',
                title: 'Mid to Heavy Weight Socks (4)',
                desc: 'Must be wool or synthetic, non-cotton.',
                required: false,
            }
        ],
    },
    {
        category: 'Headwear',
        items: [
            {
                brand: 'Peruvian wool hat to purchase in Huaraz',
                title: 'Fleece hat or beanie',
                desc: 'A warm, well fitting, comfortable hat that fits over your ears. Make sure this fits under your helmet.',
                required: false,
            },
            {
                brand: 'Outdoor Research or Black Diamond',
                title: 'Baseball cap or sun hat',
                desc: 'Bring your favorite hat or sun hat for protection on the neck and shoulders. No white under the brim as this is blinding on glaciers.',
                required: false,
            },
            {
                brand: 'Buff USA',
                title: 'Buff (neck gaiter)',
                desc: 'Keeping sun off your skin is critical in the mountains. These are highly functional and versatile and extremely light weight.',
                required: true,
            },
            {
                brand: 'Black Diamond Spot',
                title: 'Headlamp',
                desc: 'This is required. A 3 bulb L.E.D. Tilting headlamp is recommended. Bring spare batteries.',
                required: true,
            },
            {
                brand: '',
                title: 'Sunglasses',
                desc: 'High quality UV blocking lenses are a must. The sun at higher altitudes is much more intense than at lower altitudes.',
                required: true,
            }
        ],
    },
    {
        category: 'Handwear',
        items: [
            {
                brand: 'Black Diamond Arc Glove',
                title: 'Lightweight gloves',
                desc: 'These are wind-resistant, warm durable, and have good grip. They should be snug with a reinforced palm.',
                required: false,
            }
        ],
    },
    {
        category: 'Personal Equipment',
        items: [
            {
                brand: 'North Face Expedition Duffle',
                title: 'Duffle Bag (1) M 40-50 Liter',
                desc: 'Medium capacity with TSA Compliant locks. NO WHEELS as this will go on an animal.',
                required: false,
            },
            {
                brand: 'Mountain Hardware Lamina/Phantom',
                title: 'Sleeping bag',
                desc: 'Rated to 0 degrees down or synthetic. Make sure the bag is the right length for your body. DO NOT FORGET A COMPRESSION SACK.',
                required: true,
            },
            {
                brand: 'Black Diamond Mission 45',
                title: 'Backpack',
                desc: '30-40 liter internal frame backpack. Make sure the pack fits your torso length.',
                required: false,
            },
            {
                brand: 'Thermarest Neo Air Xlite',
                title: 'Sleeping pad',
                desc: 'Inflatable 72 inch regular width sleeping pad required.',
                required: false,
            },
            {
                brand: 'Camel back or MSR Dromedary with tube',
                title: 'Hydration System',
                desc: 'A system with 2 liter capacity is ideal with a tube for drinking.',
                required: false,
            },
            {
                brand: 'Black Diamond Alpine Carbon Cork',
                title: 'Trekking Poles',
                desc: 'Make sure these are collapsible and lightweight. Ski poles MAY NOT be used.',
                required: false,
            },
            {
                brand: '',
                title: 'Thermos (1) (optional)',
                desc: '1 liter.',
                required: false,
            },
            {
                brand: 'Nalgene',
                title: 'Water bottle (2)',
                desc: '1 liter each.',
                required: false,
            },
            {
                brand: 'Nalgene Flexible Canteen',
                title: 'Pee bottle (1)',
                desc: 'A well marked clear bottle for use overnight. 1-2 liters.',
                required: false,
            },
            {
                brand: 'Freshette',
                title: 'Pee Funnel (Women)',
                desc: 'Optional. A common brand is the freshette.',
                required: false,
            }
        ],
    },
    {
        category: 'Miscellaneous Items',
        items: [
            {
                brand: '',
                title: 'Tennis shoes.',
                desc: 'Great for traveling, while in town or out to dinner.',
                required: false,
            },
            {
                brand: '',
                title: 'Travel clothes and casual wear.',
                desc: 'For travel in and out of the country, while on buses, and for casual nights out on the town.',
                required: false,
            },
            {
                brand: 'Exoficio',
                title: 'Passport with visa if necessary',
                desc: 'For travel in and out of the country, while on buses, and for casual nights out on the town.',
                required: false,
            },
            {
                brand: 'Exoficio',
                title: 'Non-cotton underwear (4)',
                desc: 'Men - Polypro briefs or boxers. Women - Polypro sports bras and briefs.',
                required: false,
            },
            {
                brand: '',
                title: 'Sunscreen (2)',
                desc: 'SPF 40 or higher.',
                required: false,
            },
            {
                brand: '',
                title: 'Lip balm (2)',
                desc: 'SPF 20 or higher.',
                required: false,
            },
            {
                brand: '',
                title: 'Contractor Bags(2)',
                desc: 'Heavy trash bags to be used as pack liners during in-climate weather. Zip Lock Bags For organizing and waterproofing items.',
                required: false,
            },
            {
                brand: '',
                title: 'Bic Lighters (2)',
                desc: '',
                required: false,
            },
            {
                brand: '',
                title: 'Hand Warmers (3-6 packs)',
                desc: '',
                required: false,
            },
            {
                brand: '',
                title: 'Small First Aid Kit',
                desc: 'A lightweight kit with pain killers, mole skin, band-aids, and anti-septic gel or wipes. Prescription medications can go here as well.',
                required: false,
            },
            {
                brand: '',
                title: 'Knife',
                desc: 'Keep it simple and light.',
                required: false,
            },
            {
                brand: '',
                title: 'Ear Plugs',
                desc: '',
                required: false,
            },
            {
                brand: '',
                title: 'Personal Toiletry Kit',
                desc: 'Hand sanitizer is key while traveling. Tooth brush, tooth paste, floss, deodorant, travel size shampoo and soap. Also include WET WIPES. A quick dry towel is super handy.',
                required: false,
            },
            {
                brand: '',
                title: 'Camera',
                desc: 'Full size DSLR camera not recommended for use as summit camera.',
                required: false,
            },
            {
                brand: '',
                title: 'Compact Binoculars',
                desc: '',
                required: false,
            },
            {
                brand: '',
                title: 'Energy Snacks',
                desc: 'Trail mix, GU energy gel, Clif Shot Blocks, Honey Stinger Waffles, powdered drink mixes whatever your favorite trail food is while training. Don\'t bring a whole suitcase but enough for the duration of your trip. 2-3 pounds should be sufficient, unless you eat a lot. REMEMBER- YOU ARE RESPONSIBLE FOR YOUR OWN SNACK FOOD WHILE ON THIS TRIP.',
                required: false,
            }
        ],
    }
];

export { trekkingGearData };