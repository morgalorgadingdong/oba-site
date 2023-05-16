const tours = [
  {
    id: 1,
    title: "McKenzie Pass Scenic Tour",
    nickname: "McKenzie Pass",
    featured: true,
    type: "Single Day",
    duration: "Half Day",
    difficulty: "Difficult",
    difficultyRating: 4,
    available: true,
    availabilityStart: "May 15th",
    availabilityEnd: "October 15th",
    price: "$ 155",
    ages: "12+",
    distance: "30 miles",
    miles: "30",
    elevationGain: "2,100 ft",
    ebikes: false,
    featuredIndex: 1,
    quickDetails: true,
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
    whatsProvided: ["Bike", "Helmet", "Water", "Picnic", "Shuttle back to start", "Support vehicle", "Storage for personal items"],
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
    pics: 4,
    meals: false,
    lodging: false,
    bannerAlt: "",
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
    type: "Single Day",
    duration: "Half Day",
    difficulty: "Moderate",
    difficultyRating: 3,
    distance: "25 miles",
    miles: "25",
    elevationGain: "700 ft",
    price: "$ 155",
    ages: "12+",
    ebikes: false,
    featuredIndex: 2,
    quickDetails: true,
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
    whatsProvided: ["Bike", "Helmet", "Water", "Picnic", "Shuttle back to start", "Support vehicle", "Storage for personal items"],
    whatToBring: ["Comfortable, weather appropriate athletic clothes", "Phone/camera", "A sense of adventure!"],
    pics: 4,
    meals: false,
    lodging: false,
    bannerAlt: "",
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
    bannerAlt: "",
    calendarURL: "",
    ridewithgps: ``,
    conclusion: "",
    contact: false,
    notes: "https://ridewithgps.com/embeds?type=route&id=42716795&sampleGraph=true&privacyCode=FQBtdqGEu1IyLSSp"
  },
  {
    id: 4,
    title: "Custom Bicycle Tour",
    nickname: "Custom Tour",
    featured: true,
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
    bannerAlt: "",
    calendarURL: "",
    ridewithgps: ``,
    conclusion: "To start planning your Custom Private Bike Tour with Oregon Bicycle Adventures, please contact us through our contact form or give us a call at (503) 949-8766. Our team is excited to help you create an unforgettable cycling experience in the breathtaking Pacific Northwest!",
    contact: true
  }
];
export {
  tours as t
};
