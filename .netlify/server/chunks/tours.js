const tours = [
  {
    id: 1,
    title: "McKenzie Pass Scenic Tour",
    nickname: "McKenzie Pass",
    featured: true,
    published: true,
    type: "Single Day",
    duration: "6 Hours",
    difficulty: "Difficult",
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
    difficulty: "Moderate",
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
    title: "Central Oregon Adventure Tour",
    nickname: "COAT",
    featured: false,
    published: true,
    type: "Multi Day",
    duration: "3 Days",
    difficulty: "Moderate",
    difficultyRating: 4,
    distance: "109 miles",
    miles: "109",
    elevationGain: "4,200 ft",
    ages: "12+",
    price: "TBD",
    ebikes: false,
    featuredIndex: 3,
    quickDetails: true,
    meetingLocation: "Bend, OR",
    maxGroupSize: 4,
    description: [
      {
        content: `Coming soon!`
      }
    ],
    whatsProvided: ["Bike", "Helmet", "Water", "All lunches and dinners", "Snacks", "Support vehicle", "Storage for personal items"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes", "Phone/camera", "A sense of adventure!"],
    pics: 0,
    meals: true,
    lodging: true,
    bannerAlt: "Smith rock, with a red path winding in the foreground, and the river and jagged rocks in the background",
    calendarURL: "",
    ridewithgps: ``,
    conclusion: "",
    contact: false,
    notes: "https://ridewithgps.com/embeds?type=route&id=42716795&sampleGraph=true&privacyCode=FQBtdqGEu1IyLSSp"
  },
  {
    id: 5,
    title: "Madras Mountain Views Tour",
    nickname: "Madras",
    featured: false,
    published: false,
    type: "Single Day",
    duration: "Half Day",
    difficulty: "Moderate",
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
    featured: true,
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
    published: true,
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
