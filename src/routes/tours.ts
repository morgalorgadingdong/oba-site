export const tours = [
    {
        id: 1,
        title: "McKenzie Pass Scenic Tour",
        nickname: 'McKenzie Pass',
        type: 'Single Day',
        duration: 'Half Day',
        difficulty: 'Difficult',
        difficultyRating: 4,
        available: true,
        availabilityStart: 'May 15th',
        availabilityEnd: 'October 15th',
        price: '$ 155',
        ages: '12+',
        distance: '30 miles',
        miles: '30',
        elevationGain: '2,100 ft',
        ebikes: false,
        featured: true,
        featuredIndex: 1,
        description: [
            {
                content: `Experience the awe-inspiring beauty of McKenzie Pass on a guided bicycle tour, with a unique opportunity to ride on a road that is typically closed to motor vehicles before June 15th. Booking the trip before this date will allow you to ride without any cars, enhancing the serene atmosphere of this incredible journey. If you venture out early enough, you'll be amazed by giant snow walls on both sides of the road, formed by plows clearing the way for the summer season – a truly spectacular sight!`,
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
        whatToBring: "Comfortable, weather appropriate athletic clothes, phone/camera, and a sense of adventure!",
        mettingLocation: 'Bend, OR',
        importantInfo: '',
        whatsIncluded: '',
        highlights: [
            'Lava-rock moonscape',
            'Dee Wright Observatory',
            'Windy Point'
        ],
        reviews: [
            {
                name: 'John Doe',
                rating: 5,
                review: 'This was a great tour! The guide was very knowledgeable and friendly. I would definitely recommend this tour to anyone looking for a fun and unique experience.'
            },
        ],
        pics: 2,
        meals: false,
        lodging: false,
        bannerAlt: '',
        calendarURL: 'https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/451357/?fallback=simple&full-items=yes&flow=928317'
    },
    {
        id: 2,
        title: "Twin Bridges Scenic Tour",
        nickname: 'Twin Bridges',
        type: 'Single Day',
        duration: 'Half Day',
        difficulty: 'Moderate',
        difficultyRating: 3,
        distance: '25 miles',
        miles: '25',
        elevationGain: '700 ft',
        price: '$ 155',
        ages: '12+',
        ebikes: false,
        featured: true,
        featuredIndex: 2,
        description: [
            {
                content: `Join us on a guided bicycle tour along the Twin Bridges Scenic Bikeway, a picturesque route that encapsulates the natural beauty of Central Oregon. Starting at Drake Park, you'll pedal through the bustling city of Bend before quickly escaping into the tranquil high desert fields and rock formations. Along the way, you'll cross two bridges over the Deschutes River and pass by wetlands, ranches, and hobby farms. Keep your eyes peeled for wildlife and birds that are unique to this area. After a series of short climbs, enjoy a long glide down and back to the start.`,
            },
            {
                content: `Halfway through our ride, we'll take a break for a quick, yet delightful picnic, offering a chance to sample snacks that are unique to the area.`
            },
            {
                content: `With low traffic volume and bike lanes, this ride is suitable for most fitness levels, from late March through October.`
            }
        ],
        whatsProvided: ['Bike', 'Helmet', 'Water', 'Picnic', 'Shuttle back to start', 'Support vehicle', 'Storage for personal items'],
        whatToBring: "Comfortable, weather appropriate athletic clothes, phone/camera, and a sense of adventure!",
        pics: 2,
        meals: false,
        lodging: false,
        bannerAlt: '',
        ridewithgps: `https://ridewithgps.com/embeds?type=route&id=42761311&title=Twin%20Bridges%20Scenic%20Tour&sampleGraph=true&privacyCode=TVa5OuPX2YDtzuBy`,
        calendarURL: 'https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/items/451510/?fallback=simple&full-items=yes&flow=928317'
    },
    {
        id: 3,
        title: "Central Oregon Adventure Tour",
        nickname: 'COAT',
        type: 'Multi Day',
        duration: '3 Days',
        difficulty: 'Moderate',
        difficultyRating: 3,
        price: 'TBD',
        ebikes: false,
        featured: true,
        featuredIndex: 3,
        description: [
            {
                content: `Join us on a guided bicycle tour along the Twin Bridges Scenic Bikeway, a picturesque route that encapsulates the natural beauty of Central Oregon. Starting at Drake Park, you'll pedal through the bustling city of Bend before quickly escaping into the tranquil high desert fields and rock formations. Along the way, you'll cross two bridges over the Deschutes River and pass by wetlands, ranches, and hobby farms. Keep your eyes peeled for wildlife and birds that are unique to this area. After a series of short climbs, enjoy a long glide down and back to the start. With low traffic volume and bike lanes, this ride is suitable for riders of all levels from late February through November.

                Option to stop at The Bite in Tumalo to try some local food carts and beers!`
            }
        ] ,
        pics: 2,
        meals: true,
        lodging: true,
        bannerAlt: '',
        calendarURL: ''
    }
]