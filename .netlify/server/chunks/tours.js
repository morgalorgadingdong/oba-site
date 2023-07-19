const tours = [
  {
    id: 1,
    title: "McKenzie Pass Scenic Tour",
    nickname: "McKenzie Pass",
    featured: true,
    published: true,
    type: "Single Day",
    duration: "6 Hours",
    difficulty: "Intermediate",
    difficultyRating: 4,
    available: true,
    availabilityStart: "May 15th",
    availabilityEnd: "October 15th",
    price: "$ 75",
    ages: "12+",
    distance: "38 miles",
    miles: "38",
    elevationGain: "2,400 ft",
    ebikes: false,
    featuredIndex: 1,
    quickDetails: true,
    meetingLocation: "Sisters, OR",
    maxGroupSize: 4,
    description: [
      {
        content: `Experience the awe-inspiring beauty of McKenzie Pass on a guided bicycle tour, with a unique opportunity to ride on a road that is typically closed to motor vehicles before June 15th. Booking the trip before this date will allow you to ride without any cars, enhancing the serene atmosphere of this incredible journey. If you venture out early enough, you'll be amazed by giant snow walls on both sides of the road, formed by plows clearing the way for the summer season – a truly spectacular sight!`
      },
      {
        content: `The climb to the top is not for the faint of heart, but the reward is worth it. You'll be greeted by a lava-rock moonscape that spreads out before you for miles, a view unlike anything you've probably ever encountered on a bike ride. Along the way, you'll follow an 1860s wagon route and pass through Windy Point, where you'll get a great view of Mt. Washington and your first look at the vast, 2,000-year-old lava flow.`
      },
      {
        content: `At the summit, you'll be able to explore the lava-rock-constructed Dee Wright Observatory, which provides 360-degree views of mountains, buttes, and other topography. Don't miss out on this unforgettable experience!`
      },
      {
        content: `Water and snacks provided.`
      }
    ],
    whatsProvided: ["Tour guide to teach, motivate, and inspire you while you ride", "Water & snacks", "Picnic at the Summit", "Support vehicle with storage for personal items", "Optional bike & helmet rental", "Optional shuttle to and from Bend"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes", "Phone/camera", "A sense of adventure!"],
    mettingLocation: "Bend, OR",
    importantInfo: "",
    highlights: [
      "Lava-rock moonscape",
      "Dee Wright Observatory",
      "Windy Point"
    ],
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        review: "This was a great tour! The guide was very knowledgeable and friendly. I would definitely recommend this tour to anyone looking for a fun and unique experience."
      }
    ],
    pics: 8,
    picAlts: [
      "3 people with bikes posing at the summit of McKenzie Pass, sunny sky and mountain views in the background",
      "2 people posing on their bikes in front of a wall of snow next to the road",
      "Beautiful scene featuring a wooden fence, a green pasture, and the sisters mountains in the background",
      "A picture taken from behind of 3 ciclist biking up the McKenzie Pass, blue skies and tall trees loom overhead",
      "A picture of a woman biking up the McKenzie Pass, looking at the camera and giving a hang loose, with lava rock and mountains in the background",
      "A drone shot of the top of the Mckenzie pass, featuring the Dwight Observatory made of lavarock",
      "A picture taken from behind of 3 ciclist biking up the McKenzie Pass, surrounded by green, lush trees",
      "A picture taken from behind of 2 ciclist biking up the McKenzie Pass, surrounded by green trees and a blue sky"
    ],
    bannerAlt: "A picture of lavarock and mountains, with a blue sky in the background, taken from the top of the McKenzie Pass",
    meals: false,
    lodging: false,
    calendarURL: "https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/451357/?fallback=simple&full-items=yes&flow=928317",
    ridewithgps: `https://ridewithgps.com/embeds?type=route&id=42770639&sampleGraph=true&privacyCode=CEPHFlyV4wdGq6ag`,
    conclusion: "",
    contact: false
  },
  {
    id: 2,
    title: "Twin Bridges Scenic Tour",
    nickname: "Twin Bridges",
    featured: true,
    published: true,
    type: "Single Day",
    duration: "4 Hours",
    difficulty: "Intermediate",
    difficultyRating: 3,
    distance: "25 miles",
    miles: "25",
    elevationGain: "700 ft",
    price: "$ 65",
    ages: "12+",
    ebikes: false,
    featuredIndex: 2,
    quickDetails: true,
    meetingLocation: "Bend, OR",
    maxGroupSize: 4,
    description: [
      {
        content: `Join us on a guided bicycle tour along the Twin Bridges Scenic Bikeway, a picturesque route that encapsulates the natural beauty of Central Oregon. Starting at Drake Park, you'll pedal through the bustling city of Bend before quickly escaping into the tranquil high desert fields and rock formations. Along the way, you'll cross two bridges over the Deschutes River and pass by wetlands, ranches, and hobby farms. Keep your eyes peeled for wildlife and birds that are unique to this area. After a series of short climbs, enjoy a long glide down and back to the start.`
      },
      {
        content: `Partway through our ride, we'll take a break for a quick, yet delightful picnic, offering a chance to sample snacks that are unique to the area.`
      },
      {
        content: `With low traffic volume and bike lanes, this ride is suitable for most fitness levels, from late March through October.`
      }
    ],
    whatsProvided: ["Tour guide to teach, motivate, and inspire you while you ride", "Water & snacks", "Beer and food vouchers at the Bite in Tumalo", "Shuttle back to Bend", "Support vehicle with storage for personal items", "Optional bike & helmet rental", "Optional custom pickup and dropoff locations"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes", "Wallet/ID", "Phone/camera", "A sense of adventure!"],
    pics: 4,
    picAlts: [
      "A picture taken from behind of 4 ciclists biking on a back road, about to head downhill, blue skies and green trees loom overhead",
      "2 people biking towards the camera on a two lane backroad, with south sister mountain in the background",
      '1 person taking a right hand turn on his bike towards the camera. Ranch fence and pasture in the background, with the sisters mountains behind that. A sign on the road reads "Bend 12" and "Sisters 10" in opposite directions',
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time."
    ],
    bannerAlt: "Close up of two bicyclist biking down a back road, away from the camera and towards the sisters mountains in the background",
    meals: false,
    lodging: false,
    ridewithgps: `https://ridewithgps.com/embeds?type=route&id=42761311&title=Twin%20Bridges%20Scenic%20Tour&sampleGraph=true&privacyCode=TVa5OuPX2YDtzuBy`,
    calendarURL: "https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/451510/?fallback=simple&full-items=yes&flow=928317",
    conclusion: "",
    contact: false
  },
  {
    id: 3,
    title: "The Essential Central Oregon Bike Tour",
    nickname: "COAT",
    featured: true,
    published: true,
    type: "Multi Day",
    duration: "4 Days",
    difficulty: "Intermediate",
    difficultyRating: 4,
    distance: "109 miles",
    miles: "109",
    elevationGain: "4,200 ft",
    ages: "18+",
    price: "$2,600",
    ebikes: false,
    featuredIndex: 3,
    quickDetails: true,
    meetingLocation: "Bend, OR",
    maxGroupSize: 8,
    activities: ["Biking (bike included)", "Hiking", "Beer tasting", "Brewery Tour", "Foot Tours"],
    description: [
      {
        content: `Get ready for an unforgettable journey through Central Oregon's most scenic landscapes. This 4-day cycling adventure has been expertly curated to ensure you experience the absolute best of Central Oregon, covering its must-see spots and hidden gems.`
      },
      { content: `From the charming streets of Bend to the stunning panoramas of Smith Rock, we've got it all covered. Savor local brews in Bend, pedal your way through the captivating Crooked River Canyon, and witness the awe-inspiring views from the summit of McKenzie Pass. You'll taste award-winning wines at Faith, Hope & Charity Vineyards, and enjoy a well-deserved celebratory meal at the historic McKenzie General Store.` },
      { content: `Don't miss out on the chance to immerse yourself in the local culture, savor local flavors, and create lifelong memories while traversing the region's diverse landscapes. This is the tour for those who want to experience Central Oregon as we believe it’s best experienced - from the seat of a bicycle.` }
    ],
    whatsProvided: ["Tour guide to teach, motivate, and inspire you while you ride", "Water & snacks", "Support vehicle with storage for personal items", "Bike & helmet rental", "3 Nights in unique, locally-inspired lodging", "3 Breakfasts, 3 Lunches, 3 Dinners", "Wine tasting at Faith, Hope, and Charity Vineyards", "Brewery tour and tasting at Deschutes Brewery", "Access to all photos taken by our photographer", "Complimentary OBA Jersey and water bottle"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes for 4 days", "Swimsuit", "Phone/camera", "A sense of adventure!"],
    pics: 13,
    picAlts: [
      "A picture taken from behind of 4 ciclists biking on a back road, about to head downhill, blue skies and green trees loom overhead",
      "2 people biking towards the camera on a two lane backroad, with south sister mountain in the background",
      '1 person taking a right hand turn on his bike towards the camera. Ranch fence and pasture in the background, with the sisters mountains behind that. A sign on the road reads "Bend 12" and "Sisters 10" in opposite directions',
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time.",
      "5 people pose on the back of a truck, with bikes in the back. They are all smiling and appear to be having a great time."
    ],
    meals: true,
    lodging: true,
    bannerAlt: "Smith rock, with a red path winding in the foreground, and the river and jagged rocks in the background",
    calendarURL: "https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/460994/?fallback=simple&full-items=yes&flow=no",
    bookBtnURL: "https://fareharbor.com/embeds/book/oregonbicycleadventures/items/460994/?full-items=yes&flow=no",
    ridewithgps: `https://ridewithgps.com/embeds?type=route&id=42716795&sampleGraph=true&privacyCode=FQBtdqGEu1IyLSSp`,
    conclusion: "",
    contact: false,
    notes: "https://ridewithgps.com/embeds?type=route&id=42716795&sampleGraph=true&privacyCode=FQBtdqGEu1IyLSSp",
    itinerary: [
      {
        day: "1",
        title: "Bend meet and greet, Ride the River Trail, and tour brewery",
        description: [
          `Welcome to the vibrant town of Bend! We're about to kick off our adventure with an optional spin around downtown and along the scenic river trail. Next, we'll cycle to the renowned Deschutes Brewery, a pillar of Bend's thriving beer culture since the late '80s. There, we'll get a sneak peek into their brewing magic, followed by a taste of their renowned brews. Our journey carries on at Deschutes Public House, where a dinner inspired by the art of brewing is set up for us. We wrap up the day at the quirky McMenamins Old St. Francis School. This revamped 1936 schoolhouse-turned-hotel is a trove of charm, with art commemorating its history and a relaxing soaking pool. We're all set to dive into local culture, tastes, and tales together - the perfect launch pad for our thrilling adventure ahead.`
        ],
        meals: ["Dinner"],
        lodging: "McMenamins Old St. Francis School",
        activities: "Brewery Tour",
        miles: "Optional 8",
        elevationGain: "0 ft",
        elevationLoss: "0 ft",
        ridewithgps: "",
        pics: 0
      },
      {
        day: "2",
        title: "Crooked River Scenic Ride to Smith Rock",
        description: [
          `Our first official day of biking gets underway on the captivating Crooked River Scenic Bikeway. We're riding through the timeless beauty of narrow, basalt canyons, reminiscent of the old Oregon Trail days. Our backdrop? The grandeur of the Cascade Mountains, peaceful rivers, and expansive high-desert pastureland on our journey to Smith Rock.`,
          `Our mid-point sees us dropping by Prineville for a bite at the legendary Tastee Treet. A go-to spot for delicious burgers, homemade fries, and retro shakes, it's been winning over locals for more than half a century.`,
          `Refueled, we press on to Smith Rock, celebrated as the birthplace of U.S. sport rock-climbing and one of Oregon's Seven Wonders. There's an optional hike to the top on offer - brace for awe-inspiring views and a light picnic at the summit. Be on the lookout for golden eagles and river otters!`,
          `We'll cap off the day with dinner at Terrebonne Depot before heading to Smith Rock Resort. Our night's rest is in unique yurt-style rooms with grand views of the Crooked River canyons.`
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        lodging: "Smith Rock Resort",
        activities: "Smith Rock Hike",
        miles: "38",
        elevationGain: "748 ft",
        elevationLoss: "1,187 ft",
        ridewithgps: "",
        pics: 0
      },
      {
        day: "3",
        title: "Smith Rock to Sisters",
        description: [
          `Day three sees us riding the Sisters to Smith Rock Scenic Bikeway in reverse. Our ride will whisk us past historic landmarks, follow the curves of the Deschutes River, and offer spectacular vistas of the Cascade Mountains. The route unfolds through tranquil forests, fertile valleys, and charming riverside paths.`,
          `Around the mid-point of our journey, we'll pause for a well-deserved lunch break at Faith Hope & Charity Vineyards. Surrounded by the captivating Central Oregon landscape, we'll savor a delicious meal and partake in a spot of wine tasting.`,
          `Once our cycling adventure concludes, you'll have free rein to explore downtown Sisters. This 1880's western-themed town is a haven of unique boutiques, vibrant galleries, and a rich local culture waiting to be discovered.`,
          `At the end of the day, we'll retreat to the comfort and luxury of the FivePine Lodge & Spa. Combining the warmth of a bed and breakfast, the privacy of secluded cabins, and all the amenities of a high-end resort, it's the perfect way to round off an exhilarating day.`
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        lodging: "FivePine Lodge and Spa",
        activities: "Sisters Walking Tour & Shopping",
        miles: "33",
        elevationGain: "1,236 ft",
        elevationLoss: "891 ft",
        ridewithgps: "",
        pics: 0
      },
      {
        day: "4",
        title: "McKenzie Pass Scenic Ride and Hot Spring ",
        description: [
          `Day four kicks off at Sisters Coffee Company, a local treasure that has been brewing up a storm since 1989. We'll warm up with their expertly crafted coffee and a wholesome breakfast to fuel the day ahead.`,
          `Next up is the ride along McKenzie Pass Scenic Bikeway, an iconic route showcasing Oregon's stunning geological beauty and breathtaking landscapes. The climb to the top is an exhilarating challenge, but reaching the summit to the Dee Wright Observatory, with sweeping views of mountains, buttes, and the path we've traversed, is the perfect reward.`,
          `We wrap up the day, and our trip, at the historic McKenzie General Store. Established in 1932, it's a spot that seamlessly blends history, local allure, and delightful food. Over a celebratory lunch, we'll look back on our adventure, cherishing the memories of our extraordinary four-day journey.`
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
        lodging: "",
        activities: "Sisters Walking Tour & Shopping",
        miles: "38",
        elevationGain: "2,367 ft",
        elevationLoss: "3,876 ft",
        ridewithgps: "",
        pics: 0
      }
    ]
  },
  {
    id: 5,
    title: "Madras Mountain Views Tour",
    nickname: "Madras",
    featured: false,
    published: false,
    type: "Single Day",
    duration: "Half Day",
    difficulty: "Intermediate",
    difficultyRating: 3,
    distance: "29 miles",
    miles: "29",
    elevationGain: "1,000 ft",
    ages: "12+",
    price: "$ 75",
    ebikes: false,
    featuredIndex: 4,
    quickDetails: true,
    meetingLocation: "Madras, OR",
    maxGroupSize: 4,
    description: [
      {
        content: `Join us at Oregon Bicycle Adventures for an unforgettable 29-mile bike tour through the heart of Central Oregon's scenic landscapes. From the lively town of Madras, pedal your way through serene ranch lands, brushing the stunning rim of Lake Billy Chinook, while the majestic snowy peaks of the Cascade Range paint a beautiful backdrop. Encounter playful goats, munching horses, and bask in the delightful scent of fresh crops. At the midpoint, we'll pause in the quaint town of Culver for a delicious picnic amidst this idyllic rural setting. Refreshed, continue to The Cove Palisades State Park, where the high-desert and deep canyon vistas are simply breathtaking. An optional detour at mile 20 leads to Round Butte Overlook Park, a great spot for birdwatching. The tour wraps up with a tranquil downhill glide back into Madras, completing a day full of charming Oregonian vistas and memories.`
      }
    ],
    whatsProvided: ["Bike", "Helmet", "Water", "Picnic", "Shuttle from Bend", "Support vehicle", "Storage for personal items"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes", "Phone/camera", "A sense of adventure!"],
    pics: 0,
    meals: false,
    lodging: false,
    bannerAlt: "",
    ridewithgps: `https://ridewithgps.com/embeds?type=route&id=42761311&title=Twin%20Bridges%20Scenic%20Tour&sampleGraph=true&privacyCode=TVa5OuPX2YDtzuBy`,
    calendarURL: "https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/451510/?fallback=simple&full-items=yes&flow=928317",
    conclusion: "",
    contact: false
  },
  {
    id: 4,
    title: "Custom Bicycle Tour",
    nickname: "Custom Tour",
    featured: false,
    published: true,
    featuredIndex: 3,
    type: "",
    duration: "",
    difficulty: "",
    difficultyRating: "",
    distance: "",
    miles: "",
    elevationGain: "",
    ages: "",
    price: "",
    ebikes: false,
    quickDetails: false,
    meetingLocation: "",
    maxGroupSize: "",
    description: [
      {
        content: `Discover the beauty of the Pacific Northwest on a one-of-a-kind, personalized bicycle adventure with Oregon Bicycle Adventures. Our Custom Private Bike Tour offers you the ultimate cycling experience, tailored to your unique interests, preferences, and fitness level. Simply tell us about your dream cycling tour, and we will handle all the planning and logistics to create a memorable trip just for you.`
      },
      {
        content: `From the rugged coastline to the Cascade Mountains, Oregon is home to diverse landscapes, charming towns, and a wealth of outdoor activities. Whether you're interested in a tailored day trip to explore Oregon's natural wonders such as Crater Lake and Smith Rock, or you're ready to take on an epic journey across the state, we accommodate all sizes and types of adventures to suit your desires.`
      }
    ],
    whatsProvided: ["A pre-tour consultation to discuss your preferences, interests, and desired trip duration", "Customized route planning, tailored to your preferred difficulty and distance", "Professional and knowledgeable local guides to lead your tour and provide insider insights", "Premium bike rental, including road, gravel, or mountain bikes", "Support vehicle to carry your belongings and provide on-route assistance if needed", "Carefully selected accommodations, from cozy B&Bs to luxurious boutique hotels", "Delicious, locally sourced meals to fuel your adventure", "Optional activities and experiences based on your interests, such as wine tastings, white water rafting, or guided hikes"],
    whatToBring: "",
    mettingLocation: "",
    importantInfo: "",
    highlights: [
      "Lava-rock moonscape",
      "Dee Wright Observatory",
      "Windy Point"
    ],
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        review: "This was a great tour! The guide was very knowledgeable and friendly. I would definitely recommend this tour to anyone looking for a fun and unique experience."
      }
    ],
    pics: 0,
    meals: false,
    lodging: false,
    bannerAlt: "A cyclist with panniers rides on a scenic road with trees to his right, and a winding river to his left",
    calendarURL: "",
    ridewithgps: ``,
    conclusion: "To start planning your Custom Private Bike Tour with Oregon Bicycle Adventures, please contact us through our contact form or give us a call at (503) 949-8766. Our team is excited to help you create an unforgettable cycling experience in the breathtaking Pacific Northwest!",
    contact: true
  },
  {
    id: 6,
    title: "Custom Shuttle Ride",
    nickname: "Shuttle",
    featured: false,
    published: false,
    type: "Single Day",
    duration: "",
    difficulty: "",
    difficultyRating: "",
    distance: "",
    miles: "",
    elevationGain: "",
    ages: "12+",
    price: "Starting at $ 20 per person",
    ebikes: false,
    featuredIndex: 4,
    quickDetails: false,
    meetingLocation: "Bend, OR",
    maxGroupSize: 4,
    description: [
      {
        content: `With years of experience exploring the diverse trails around Bend, we at Oregon Bicycle Adventures are excited to introduce our new shuttle service for mountain bikers. Whether you're a seasoned rider or a newcomer, we curate tailored routes to match your skill level and interests, ensuring you make the most of your time in Bend. Leave the planning and logistics to us as we provide guidance, transportation, and gear for you to Bend's legendary trails.`
      }
    ],
    whatsProvided: [
      "Round-trip transportation from your Bend location to the trailhead and back.",
      "Curated route planning based on your skill and comfort level, leveraging our years of trail-riding experience in Bend.",
      "Careful handling and transportation of your bike.",
      "Optional bike and helmet rentals available at an additional cost.",
      "Complimentary water and light refreshments for your journey.",
      "Tailored route planning based on your skill and comfort level, leveraging our years of trail-riding experience in Bend.",
      "Trail maps and detailed guidance on the selected routes.",
      "Basic first-aid kit for safety on the trails.",
      "Emergency support, should any issues arise during your ride."
    ],
    whatToBring: [
      "Your mountain bike, helmet, and a basic repair kit (if not renting)",
      "Water and snacks",
      "Comfortable, weather appropriate athletic clothes",
      "Phone/camera",
      "A sense of adventure!"
    ],
    pics: 0,
    meals: false,
    lodging: false,
    bannerAlt: "Close up of mountain bikes on a tailgate, with trees and the rising sun in the background.",
    ridewithgps: ``,
    calendarURL: "",
    conclusion: "",
    contact: false
  }
];
export {
  tours as t
};
