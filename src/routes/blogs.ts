
export const blogs = [
    {
        id: 1,
        title: "Biking Across America - Week 1",
        week: 1,
        date: "4/1/2023",
        author: 'Morgan Folz',
        published: true,
        transAmBlog: true,
        bannerSrc: '',
        bannerAlt: '',
        categories: [
            'TransAmerica Trail'
        ],
        sections: [
            {
                type: 'intro',
                day: 0,
                startingPoint: 'Yorktown, VA',
                endingPoint: 'Blacksburg, VA',
                startingDate: '04/21/2021',
                endingDate: '04/27/2021',
                dateRange: 'April 21 -> 27, 2021',
                milage: 365,
                totalMilage: 365,
                milageLeft: 3958,
                text: ''
                
            },
            {
                type: 'day',
                day: 1,
                date: '04/21/2021',
                startingPoint: 'Yorktown, VA',
                endingPoint: 'Charles City, VA',
                distance: 45,
                elevation: 1200,
                difficulty: 1,
                safety: 4,
                lodging: '',
                lodgingLink: '',
                strava: 'https://www.strava.com/activities/5166870471',
                notes: [
                    'Holy shit we’re actually doing this.',
                    'The Capital trail, which is a designated walk/bike path that runs from Jamestown to Richmond, is amazing.',
                    `Looking at a map we've barely budged off the coast.`,
                    `Are we actually going to be able to finish this?`
                    ],
                images: [
                    {
                        video: false,
                        number: 1,
                        caption: `"I've made a huge mistake" - Mike`,
                        alt: '',
                    },
                    {
                        video: false,
                        number: 2,
                        caption: '',
                        alt: '',
                    }
                    // {
                    //     video: true,
                    //     number: 3,
                    //     caption: '',
                    //     alt: '',
                    // }
                ]
            },
            {
                type: 'day',
                day: 2,
                date: '04/22/2021',
                startingPoint: 'Charles City, VA',
                endingPoint: 'Richmond, VA',
                distance: 35,
                elevation: 1000,
                difficulty: 1,
                safety: 5,
                lodging: 'Warm Showers Host',
                lodgingLink: '',
                strava: 'https://www.strava.com/activities/5174979338',
                notes: [
                    'Setting up and breaking down camping is taking a lot longer than we thought it would.',
                    'The Capital trail still rocks.',
                    `People rock. (Shoutout to Deb and Ephriam!)`,
                    `Pound cake rocks`
                    ],
                images: [
                    {
                        video: false,
                        number: 1,
                        caption: '',
                        alt: '',
                    },
                    {
                        video: false,
                        number: 2,
                        caption: '',
                        alt: '',
                    }
                ]
            },
            {
                type: 'day',
                day: 3,
                date: '04/23/2021',
                startingPoint: 'Richmond, VA',
                endingPoint: 'Mineral, VA',
                distance: 35,
                elevation: 1000,
                difficulty: 1,
                safety: 5,
                lodging: 'Warm Showers Host',
                lodgingLink: '',
                strava: 'https://www.strava.com/activities/5179195342',
                notes: [
                    'Setting up and breaking down camping is taking a lot longer than we thought it would.',
                    'The Capital trail still rocks.',
                    `People rock. (Shoutout to Deb and Ephriam!)`,
                    `Pound cake rocks`
                    ],
                images: [
                    {
                        video: false,
                        number: 1,
                        caption: '',
                        alt: '',
                    },
                    {
                        video: false,
                        number: 2,
                        caption: '',
                        alt: '',
                    }
                ]
            },
            {
                type: 'reflections',
                content: [
                    {
                        heading: 'The kindness of strangers',
                        content: 'This seems to be a recurring theme so far. After a year of the Pandemic, one in which I spent drastically less time meeting new people and drastically more time in front of screens, this trip is quickly restoring my faith in humanity. People, for the most part, are kind and want to help. I hope this trend continues.',
                    },
                    {
                        heading: 'How much fun I’m having ',
                        content: `I was kind of approaching this trip the way one might approach a hard workout. I figured it would be tough, it would help me be a better person, and maybe there’d be parts I enjoy along the way. So far the fun has far outweighed the ‘work’.`
                    },
                    {
                        heading: `How sore my legs can get`,
                        content: 'Maybe I was naive to think that it would only take a week for my legs to get the hang of this. They have been constantly sore since day 2, but the soreness I experienced after day 5 was unlike any I’ve felt. I have never been so sore that just rolling over in my sleep wakes me up from a deep sleep.'
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Let's Bike Across America",
        week: 0,
        date: "03/06/2023",
        Author: 'Morgan Folz',
        published: true,
        transAmBlog: true,
        bannerSrc: '',
        bannerAlt: '',
        bannerCaption: '',
        categories: [
            'TransAmerica Trail'
        ],
        sections: [
            {
                type: 'text',
                content: `"I'm quitting my job and biking across America next year" Mike told me during one of our weekly Zoom calls. It was May 2020, the COVID-19 pandemic had been in full swing for two months. Mike, our friend Rachel, and myself had started having virtual dinner every week to stay connected and spice up the quarantine life. Each week it was one person's responsibility to choose a recipe for us all to cook together (virtually) and then give a presentation to the other two. There were no rules on what you could present, but it had to be interesting and educational. Topics ranged from Blue zones, to financial tips, to Energy Generation and Consumption (did you know that the average US citizen consumes enough energy in a year to launch 55 Silverback gorillas into space?).`
            },
            // {
            //     type: 'img',
            //     caption: `One of the many zoom happy hour calls we had during the spring of 2020.`,
            //     src: '',
            //     alt: 'A picture of 9 people on a zoom call',

            // },
            {
                type: 'text',
                content: `Anywho, I forget the topic this week, Mike's declaration was far more monumental. Mike and I had been talking about biking across America ever since we both read "Changing Cadence" by Michael Dillon about 4 years prior. Apparently, all it took was a global pandemic for us to finally get our asses in gear.` 
            },
            {
                type: 'text',
                content: `But I had my hesitations. Quitting my job to bicycle across the country did not seem like the most prudent idea in the middle of a global pandemic. Was I really prepared to leave my job, my health insurance, my security? The COVID pandemic reminded me that things could get much worse, and that our safety and well-being are not guaranteed. "Now is not the time to be throwing caution to the wind and living out my fantasies Alexander Supertramp style" I thought. "I should be saving every penny I can while simultaneously building up a dry food and water storage."` 
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                content: `COVID wore on, and I damn near went mad working from home (turns out construction management is incredibly dry work to do from your bedroom). As I'm sure is the case with many, COVID spurred a lot of reflection in me, and I came to the conclusion that I needed to make some drastic changes in my life. It had been 4 years since I graduated college, and I felt like I had accomplished nothing in that time besides pad my bank account and lose some hair. Don't get me wrong, I had made some incredible memories in those 4 years, but those memories were few and far between. I realized most of my day-to-day life left me feeling more dead than alive. When I graduated college, life felt like it had limitless opportunities. But as I looked at the current trajectory of my life/career, I wasn't excited at all. I felt nothing.` 
            },
            {
                type: 'text',
                content: `"Alright, I'm in"` 
            }
        ]

        //    
        // ]
    },
    {
        id: 1,
        title: "Post 1",
        week: 0,
        date: "03/06/2023",
        Author: 'Morgan Folz',
        published: false,
        transAmBlog: false,
        bannerSrc: '',
        bannerAlt: '',
        bannerCaption: '',
        categories: [
            'TransAmerica Trail'
        ],
        sections: [
            {
                type: 'text',
                content: `"I'm quitting my job and biking across America next year" Mike told me during one of our weekly Zoom calls. It was May 2020, the COVID-19 pandemic had been in full swing for two months. Mike, our friend Rachel, and myself had started having virtual dinner every week to stay connected and spice up the quarantine life. Each week it was one person's responsibility to choose a recipe for us all to cook together (virtually) and then give a presentation to the other two. There were no rules on what you could present, but it had to be interesting and educational. Topics ranged from Blue zones, to financial tips, to Energy Generation and Consumption (did you know that the average US citizen consumes enough energy in a year to launch 55 Silverback gorillas into space?).`
            },
            {
                type: 'img',
                caption: `One of the many zoom happy hour calls we had during the spring of 2020.`,
                src: '',
                alt: 'A picture of 12 people on a zoom call',

            },
            {
                type: 'text',
                content: `Anywho, I forget the topic this week, Mike's declaration was far more monumental. Mike and I had been talking about biking across America ever since we both read "Changing Cadence" by Michael Dillon about 4 years prior. Apparently, all it took was a global pandemic for us to finally get our asses in gear.` 
            },
            {
                type: 'text',
                content: `But I had my hesitations. Quitting my job to bicycle across the country did not seem like the most prudent idea in the middle of a global pandemic. Was I really prepared to leave my job, my health insurance, my security? The COVID pandemic reminded me that things could get much worse, and that our safety and well-being are not guaranteed. "Now is not the time to be throwing caution to the wind and living out my fantasies Alexander Supertramp style" I thought. "I should be saving every penny I can while simultaneously building up a dry food and water storage."` 
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                content: `COVID wore on, and I damn near went mad working from home (turns out construction management is incredibly dry work to do from your bedroom). As I'm sure is the case with many, COVID spurred a lot of reflection in me, and I came to the conclusion that I needed to make some drastic changes in my life. It had been 4 years since I graduated college, and I felt like I had accomplished nothing in that time besides pad my bank account and lose some hair. Don't get me wrong, I had made some incredible memories in those 4 years, but those memories were few and far between. I realized most of my day-to-day life left me feeling more dead than alive. When I graduated college, life felt like it had limitless opportunities. But as I looked at the current trajectory of my life/career, I wasn't excited at all. I felt nothing.` 
            },
            {
                type: 'text',
                content: `"Alright, I'm in"` 
            }
        ]

        //    
        // ]
    },
    {
        id: 0,
        Title: "Template Post",
        Date: "03/06/2023",
        Author: 'Morgan Folz',
        Published: true,
        BannerSrc: '',
        BannerAlt: '',
        BannerCaption: '',
        Categories: [
        ],
        Sections: [
            {
                type: 'heading',
                content: ``
            },
            {
                type: 'text',
                content: `` 
            },
            {
                type: 'img',
                caption: ``,
                src: '',
                alt: '',
            },
            {
                type: 'divider',
            },
            {
                type: 'highlight',
                content: ``
            }
        ]
    },
]