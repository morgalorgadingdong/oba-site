export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/all.css","css/animations.css","css/bootstrap/bootstrap.css","css/bootstrap/bootstrap.min.css","css/style.css","favicon.png","fonts/Mohave-Italic-VariableFont_wght.ttf","fonts/Mohave-VariableFont_wght.ttf","fonts/Roboto/LICENSE.txt","fonts/Roboto-Black.ttf","fonts/Roboto-BlackItalic.ttf","fonts/Roboto-Bold.ttf","fonts/Roboto-BoldItalic.ttf","fonts/Roboto-Italic.ttf","fonts/Roboto-Light.ttf","fonts/Roboto-LightItalic.ttf","fonts/Roboto-Medium.ttf","fonts/Roboto-MediumItalic.ttf","fonts/Roboto-Regular.ttf","fonts/Roboto-Thin.ttf","fonts/Roboto-ThinItalic.ttf","fonts/Sanchez-Italic.ttf","fonts/Sanchez-Regular.ttf","img/20210623_090917.jpg","img/20210623_090950.jpg","img/about.jpeg","img/about.jpg","img/about1.jpg","img/blog/1. Post 1/blog1-banner.jpg","img/blog/2. Post 2/blog2-banner.jpg","img/blog/transam/Let's Bike Across America/Let's Bike Across America-1.jpg","img/blog/transam/Let's Bike Across America/Let's Bike Across America-banner.jpg","img/blog/transam/week 1/64114526936__4124CAB9-E05A-4A51-B757-FECBAFC07E8F.jpg","img/blog/transam/week 1/64116967651__7A9758D1-C4B7-453D-A1AE-89B711731F83.jpg","img/blog/transam/week 1/day0-1.jpg","img/blog/transam/week 1/day0-2.jpg","img/blog/transam/week 1/day0-3.jpg","img/blog/transam/week 1/day0-4.jpg","img/blog/transam/week 1/day0-5.jpg","img/blog/transam/week 1/day1- (1).jpg","img/blog/transam/week 1/day1- (2).jpg","img/blog/transam/week 1/day1- (3).jpg","img/blog/transam/week 1/day1- (4).jpg","img/blog/transam/week 1/day1- (5).jpg","img/blog/transam/week 1/day1- (6).jpg","img/blog/transam/week 1/day1- (7).jpg","img/blog/transam/week 1/day1-1.jpg","img/blog/transam/week 1/day1-2.jpg","img/blog/transam/week 1/day2- (1).jpg","img/blog/transam/week 1/day2- (2).jpg","img/blog/transam/week 1/day2- (3).jpg","img/blog/transam/week 1/day2- (4).jpg","img/blog/transam/week 1/day2- (5).jpg","img/blog/transam/week 1/day2- (6).jpg","img/blog/transam/week 1/day2- (7).jpg","img/blog/transam/week 1/day2-.HEIC","img/blog/transam/week 1/day2-1.jpg","img/blog/transam/week 1/day2-2.jpg","img/blog/transam/week 1/day3- (10).jpg","img/blog/transam/week 1/day3- (11).jpg","img/blog/transam/week 1/day3- (12).jpg","img/blog/transam/week 1/day3- (13).jpg","img/blog/transam/week 1/day3- (14).jpg","img/blog/transam/week 1/day3- (15).jpg","img/blog/transam/week 1/day3- (16).jpg","img/blog/transam/week 1/day3- (3).jpg","img/blog/transam/week 1/day3- (4).jpg","img/blog/transam/week 1/day3- (5).jpg","img/blog/transam/week 1/day3- (6).jpg","img/blog/transam/week 1/day3- (7).jpg","img/blog/transam/week 1/day3- (8).jpg","img/blog/transam/week 1/day3- (9).jpg","img/blog/transam/week 1/day3- 1.jpg","img/blog/transam/week 1/day3-1.jpg","img/blog/transam/week 1/day3-2.jpg","img/blog/transam/week 1/day4- (1).HEIC","img/blog/transam/week 1/day4- (1).jpg","img/blog/transam/week 1/day4- (2).jpg","img/blog/transam/week 1/day4- (3).jpg","img/blog/transam/week 1/day4- (4).jpg","img/blog/transam/week 1/day4- (5).jpg","img/blog/transam/week 1/day4- (6).jpg","img/blog/transam/week 1/day4- (7).jpg","img/blog/transam/week 1/day4- (8).jpg","img/blog/transam/week 1/day4-.jpg","img/blog/transam/week 1/day5- (1).jpg","img/blog/transam/week 1/day5- (10).jpg","img/blog/transam/week 1/day5- (11).jpg","img/blog/transam/week 1/day5- (12).jpg","img/blog/transam/week 1/day5- (13).jpg","img/blog/transam/week 1/day5- (14).jpg","img/blog/transam/week 1/day5- (15).jpg","img/blog/transam/week 1/day5- (16).jpg","img/blog/transam/week 1/day5- (17).jpg","img/blog/transam/week 1/day5- (2).jpg","img/blog/transam/week 1/day5- (3).jpg","img/blog/transam/week 1/day5- (4).jpg","img/blog/transam/week 1/day5- (5).jpg","img/blog/transam/week 1/day5- (6).jpg","img/blog/transam/week 1/day5- (7).jpg","img/blog/transam/week 1/day5- (8).jpg","img/blog/transam/week 1/day5- (9).jpg","img/blog/transam/week 1/day5-11.jpg","img/blog/transam/week 1/IMG_3932.jpg","img/blog/transam/week 1/IMG_3936.jpg","img/blog/transam/week 1/IMG_3941.jpg","img/blog/transam/week 1/IMG_3952.jpg","img/blog/transam/week 1/IMG_3975.jpg","img/blog/transam/week 1/IMG_3992.HEIC","img/blog/transam/week 1/IMG_4043.jpg","img/blog/transam/week 1/morgan.jpg","img/blog/transam/week 1/week1-banner.jpg","img/blog.jpg","img/carl.heic","img/carl.jpg","img/contact.jpg","img/hero-10.jpg","img/hero-2.jpg","img/hero-3.jpg","img/hero-4.jpg","img/hero-5.jpg","img/hero-6.jpg","img/hero-7.jpg","img/hero-8.jpg","img/hero-9.jpg","img/hero-c.jpg","img/hero.jpg","img/logo-1.png","img/logo-10.png","img/logo-11.png","img/logo-12.png","img/logo-2.png","img/logo-3.png","img/logo-4.png","img/logo-5.png","img/logo-6.png","img/logo-7.png","img/logo-8.png","img/logo-9.png","img/morgan.jpg","img/test.jpg","img/tour1-cover.jpg","img/tour2-cover-old.jpg","img/tour2-cover.jpg","img/tour2-cover2.jpg","img/tour3-cover.jpeg","img/tour4-cover.jpg","img/tours/1. McKenzie Pass/tour1-cover-old.jpg","img/tours/1. McKenzie Pass/tour1-cover.jpg","img/tours/2. Twin Bridges/tour2-cover.jpg","img/tours/3. COAT/tour3-cover.jpeg","img/tours/3. COAT/tour3-cover.jpg","img/tours-2.jpg","js/animations.js","js/preload.js","js/tours.js","webfonts/DIN-Next-LT-Pro-Regular.ttf","webfonts/fa-brands-400.ttf","webfonts/fa-brands-400.woff2","webfonts/fa-regular-400.ttf","webfonts/fa-regular-400.woff2","webfonts/fa-solid-900.ttf","webfonts/fa-solid-900.woff2","webfonts/fa-v4compatibility.ttf","webfonts/fa-v4compatibility.woff2"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".jpg":"image/jpeg",".jpeg":"image/jpeg",".HEIC":"image/heic",".heic":"image/heic",".js":"application/javascript",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.66f409f6.js","imports":["_app/immutable/entry/start.66f409f6.js","_app/immutable/chunks/index.3fdd7f9f.js","_app/immutable/chunks/singletons.b63747bb.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.aaa46bf3.js","imports":["_app/immutable/entry/app.aaa46bf3.js","_app/immutable/chunks/index.3fdd7f9f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
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
};
