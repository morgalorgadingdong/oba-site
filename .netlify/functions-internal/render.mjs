import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/all.css","css/animations.css","css/bootstrap/bootstrap.css","css/bootstrap/bootstrap.min.css","css/style.css","favicon.png","fonts/Mohave-Italic-VariableFont_wght.ttf","fonts/Mohave-VariableFont_wght.ttf","fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf","fonts/OpenSans-VariableFont_wdth,wght.ttf","fonts/Open_Sans/OFL.txt","fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf","fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf","fonts/Open_Sans/README.txt","fonts/Open_Sans/static/OpenSans-Bold.ttf","fonts/Open_Sans/static/OpenSans-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans-Italic.ttf","fonts/Open_Sans/static/OpenSans-Light.ttf","fonts/Open_Sans/static/OpenSans-LightItalic.ttf","fonts/Open_Sans/static/OpenSans-Medium.ttf","fonts/Open_Sans/static/OpenSans-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans-Regular.ttf","fonts/Open_Sans/static/OpenSans-SemiBold.ttf","fonts/Open_Sans/static/OpenSans-SemiBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-Bold.ttf","fonts/Open_Sans/static/OpenSans_Condensed-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans_Condensed-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-Italic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-Light.ttf","fonts/Open_Sans/static/OpenSans_Condensed-LightItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-Medium.ttf","fonts/Open_Sans/static/OpenSans_Condensed-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans_Condensed-Regular.ttf","fonts/Open_Sans/static/OpenSans_Condensed-SemiBold.ttf","fonts/Open_Sans/static/OpenSans_Condensed-SemiBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-Bold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-BoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-ExtraBold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-ExtraBoldItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-Italic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-Light.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-LightItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-Medium.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-MediumItalic.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-Regular.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-SemiBold.ttf","fonts/Open_Sans/static/OpenSans_SemiCondensed-SemiBoldItalic.ttf","fonts/Roboto/LICENSE.txt","fonts/Roboto-Black.ttf","fonts/Roboto-BlackItalic.ttf","fonts/Roboto-Bold.ttf","fonts/Roboto-BoldItalic.ttf","fonts/Roboto-Italic.ttf","fonts/Roboto-Light.ttf","fonts/Roboto-LightItalic.ttf","fonts/Roboto-Medium.ttf","fonts/Roboto-MediumItalic.ttf","fonts/Roboto-Regular.ttf","fonts/Roboto-Thin.ttf","fonts/Roboto-ThinItalic.ttf","fonts/Sanchez-Italic.ttf","fonts/Sanchez-Regular.ttf","img/20210623_090917.jpg","img/20210623_090950.jpg","img/about.jpeg","img/about.jpg","img/about1.jpg","img/about2.jpg","img/blog/1. Post 1/blog1-banner.jpg","img/blog/2. Post 2/blog2-banner.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip- (1).mp4","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-1.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-10.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-11.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-12.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-13.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-14.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-15.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-16.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-17.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-18.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-19.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-2.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-3.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-4.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-5.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-6.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-7.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-8.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-9.jpg","img/blog/transam/Biking The TransAm Week 0 - Roadtrip/Biking The TransAm Week 0 - Roadtrip-banner.jpg","img/blog/transam/Let's Bike Across America/Let's Bike Across America-1.jpg","img/blog/transam/Let's Bike Across America/Let's Bike Across America-banner.jpg","img/blog/transam/week 1/day0/Biking The TransAm Week 0 - Roadtrip-2.jpg","img/blog/transam/week 1/day0/day0-1.jpg","img/blog/transam/week 1/day0/day0-2.jpg","img/blog/transam/week 1/day0/day0-3.jpg","img/blog/transam/week 1/day0/day0-4.jpg","img/blog/transam/week 1/day0/day0-5.jpg","img/blog/transam/week 1/day0/day0-6.jpg","img/blog/transam/week 1/day0/day0-7.jpg","img/blog/transam/week 1/day1/day1-1.jpg","img/blog/transam/week 1/day1/day1-10.jpg","img/blog/transam/week 1/day1/day1-11.jpg","img/blog/transam/week 1/day1/day1-12.jpg","img/blog/transam/week 1/day1/day1-2.jpg","img/blog/transam/week 1/day1/day1-3.jpg","img/blog/transam/week 1/day1/day1-4.jpg","img/blog/transam/week 1/day1/day1-5.jpg","img/blog/transam/week 1/day1/day1-6.jpg","img/blog/transam/week 1/day1/day1-7.jpg","img/blog/transam/week 1/day1/day1-8.jpg","img/blog/transam/week 1/day1/day1-9.jpg","img/blog/transam/week 1/day1/day1-elevation.jpg","img/blog/transam/week 1/day1/day1-elevation.png","img/blog/transam/week 1/day1/day1-map.jpg","img/blog/transam/week 1/day1/day1-map.png","img/blog/transam/week 1/day2/day2-1.jpg","img/blog/transam/week 1/day2/day2-2.jpg","img/blog/transam/week 1/day2/day2-3.jpg","img/blog/transam/week 1/day2/day2-4.jpg","img/blog/transam/week 1/day2/day2-5.jpg","img/blog/transam/week 1/day2/day2-6.HEIC","img/blog/transam/week 1/day2/day2-6.jpg","img/blog/transam/week 1/day2/day2-7.jpg","img/blog/transam/week 1/day2/day2-8.jpg","img/blog/transam/week 1/day2/day2-elevation.jpg","img/blog/transam/week 1/day2/day2-map.jpg","img/blog/transam/week 1/day2-elevation.png","img/blog/transam/week 1/day2-map.png","img/blog/transam/week 1/day3/day3- (3).jpg","img/blog/transam/week 1/day3/day3-1.jpg","img/blog/transam/week 1/day3/day3-2.jpg","img/blog/transam/week 1/day3/day3-3.mp4","img/blog/transam/week 1/day3/day3-5.jpg","img/blog/transam/week 1/day3/day3-6.jpg","img/blog/transam/week 1/day3/day3-elevation.jpg","img/blog/transam/week 1/day3/day3-map.jpg","img/blog/transam/week 1/day3- (9).jpg","img/blog/transam/week 1/day4/day4- (12).jpg","img/blog/transam/week 1/day4/day4- (13).jpg","img/blog/transam/week 1/day4/day4-1.jpg","img/blog/transam/week 1/day4/day4-10.jpg","img/blog/transam/week 1/day4/day4-11.jpg","img/blog/transam/week 1/day4/day4-2.jpg","img/blog/transam/week 1/day4/day4-3.jpg","img/blog/transam/week 1/day4/day4-4.jpg","img/blog/transam/week 1/day4/day4-5.jpg","img/blog/transam/week 1/day4/day4-6.jpg","img/blog/transam/week 1/day4/day4-7.jpg","img/blog/transam/week 1/day4/day4-8.jpg","img/blog/transam/week 1/day4/day4-9.jpg","img/blog/transam/week 1/day4/day4-elevation.jpg","img/blog/transam/week 1/day4/day4-map.jpg","img/blog/transam/week 1/day4- (3).jpg","img/blog/transam/week 1/day4- (6).jpg","img/blog/transam/week 1/day5/day5-1.jpg","img/blog/transam/week 1/day5/day5-10.jpg","img/blog/transam/week 1/day5/day5-11.jpg","img/blog/transam/week 1/day5/day5-2.jpg","img/blog/transam/week 1/day5/day5-3.jpg","img/blog/transam/week 1/day5/day5-4.jpg","img/blog/transam/week 1/day5/day5-5.jpg","img/blog/transam/week 1/day5/day5-6.jpg","img/blog/transam/week 1/day5/day5-7.jpg","img/blog/transam/week 1/day5/day5-8.jpg","img/blog/transam/week 1/day5/day5-9.HEIC","img/blog/transam/week 1/day5/day5-9.jpg","img/blog/transam/week 1/day5/day5-elevation.jpg","img/blog/transam/week 1/day5/day5-map.jpg","img/blog/transam/week 1/day6/day6- (2).jpg","img/blog/transam/week 1/day6/day6- (61).jpg","img/blog/transam/week 1/day6/day6- (8).jpg","img/blog/transam/week 1/day6/day6-.HEIC","img/blog/transam/week 1/day6/day6-1.jpg","img/blog/transam/week 1/day6/day6-2.jpg","img/blog/transam/week 1/day6/day6-3.jpg","img/blog/transam/week 1/day6/day6-4.jpg","img/blog/transam/week 1/day6/day6-5.jpg","img/blog/transam/week 1/day6/day6-6.jpg","img/blog/transam/week 1/day6/day6-7.jpg","img/blog/transam/week 1/day6/day6-8.jpg","img/blog/transam/week 1/day6/day6-elevation.jpg","img/blog/transam/week 1/day6/day6-map.jpg","img/blog/transam/week 1/day7/day (8).jpg","img/blog/transam/week 1/day7/day7-1.jpg","img/blog/transam/week 1/day7/day7-2.jpg","img/blog/transam/week 1/day7/day7-3.jpg","img/blog/transam/week 1/day7/day7-4.jpg","img/blog/transam/week 1/day7/day7-5.jpg","img/blog/transam/week 1/day7/day7-6.jpg","img/blog/transam/week 1/day7/day7-8.jpg","img/blog/transam/week 1/day7/day7-9.jpg","img/blog/transam/week 1/day7/day7-elevation.jpg","img/blog/transam/week 1/day7/day7-map.jpg","img/blog/transam/week 1/IMG_3952.jpg","img/blog/transam/week 1/morgan.jpg","img/blog/transam/week 1/scrap (1).jpg","img/blog/transam/week 1/scrap (2).jpg","img/blog/transam/week 1/scrap (3).jpg","img/blog/transam/week 1/Screenshot 2023-03-31 145036.png","img/blog/transam/week 1/Screenshot 2023-03-31 145057.png","img/blog/transam/week 1/Screenshot 2023-03-31 145204.png","img/blog/transam/week 1/week1-banner.jpg","img/blog.jpg","img/carl-and-morgan.jpg","img/carl-and-morgan.png","img/carl.heic","img/carl.jpg","img/contact.jpg","img/hero-10.jpg","img/hero-2.jpg","img/hero-3.jpg","img/hero-4.jpg","img/hero-5.jpg","img/hero-6.jpg","img/hero-7.jpg","img/hero-8.jpg","img/hero-9.jpg","img/hero-c.jpg","img/hero.jpg","img/logo-1.png","img/logo-10.png","img/logo-11.png","img/logo-12.png","img/logo-13.png","img/logo-14.png","img/logo-2.png","img/logo-3.png","img/logo-4.png","img/logo-5.png","img/logo-6.png","img/logo-7.png","img/logo-8.png","img/logo-9.png","img/morgan.jpg","img/OBA_PrimaryLogo_WhiteType.png","img/Screenshot 2023-04-29 155737.png","img/test.jpg","img/tour1-cover.jpg","img/tour2-cover-old.jpg","img/tour2-cover.jpg","img/tour2-cover2.jpg","img/tour3-cover.jpeg","img/tour4-cover.jpg","img/tours/1. McKenzie Pass/tour1-1.jpg","img/tours/1. McKenzie Pass/tour1-2.jpg","img/tours/1. McKenzie Pass/tour1-3.jpg","img/tours/1. McKenzie Pass/tour1-4.jpg","img/tours/1. McKenzie Pass/tour1-6.jpg","img/tours/1. McKenzie Pass/tour1-cover.jpg","img/tours/2. Twin Bridges/tour2-1.jpg","img/tours/2. Twin Bridges/tour2-2.jpg","img/tours/2. Twin Bridges/tour2-3.jpg","img/tours/2. Twin Bridges/tour2-4.jpg","img/tours/2. Twin Bridges/tour2-cover.jpg","img/tours/3. COAT/tour3-cover.jpeg","img/tours/3. COAT/tour3-cover.jpg","img/tours-2.jpg","js/animations.js","js/preload.js","js/tours.js","OBA_Instagram_Profile.png","webfonts/DIN-Next-LT-Pro-Regular.ttf","webfonts/fa-brands-400.ttf","webfonts/fa-brands-400.woff2","webfonts/fa-regular-400.ttf","webfonts/fa-regular-400.woff2","webfonts/fa-solid-900.ttf","webfonts/fa-solid-900.woff2","webfonts/fa-v4compatibility.ttf","webfonts/fa-v4compatibility.woff2"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".jpg":"image/jpeg",".jpeg":"image/jpeg",".mp4":"video/mp4",".HEIC":"image/heic",".heic":"image/heic",".js":"application/javascript",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fd4b8ff8.js","imports":["_app/immutable/entry/start.fd4b8ff8.js","_app/immutable/chunks/index.3fdd7f9f.js","_app/immutable/chunks/singletons.f5c99c17.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0eb65366.js","imports":["_app/immutable/entry/app.0eb65366.js","_app/immutable/chunks/index.3fdd7f9f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[blogTitle]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"blogTitle","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tours",
				pattern: /^\/tours\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/tours/[tourName]",
				pattern: /^\/tours\/([^/]+?)\/?$/,
				params: [{"name":"tourName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
