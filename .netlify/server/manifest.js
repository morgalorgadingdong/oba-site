export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/all.css","css/animations.css","css/bootstrap/bootstrap.css","css/bootstrap/bootstrap.min.css","css/style.css","favicon.png","fonts/Mohave-Italic-VariableFont_wght.ttf","fonts/Mohave-VariableFont_wght.ttf","fonts/Sanchez-Italic.ttf","fonts/Sanchez-Regular.ttf","img/20210623_090917.jpg","img/20210623_090950.jpg","img/about.jpeg","img/about.jpg","img/about1.jpg","img/blog/1. Post 1/blog1-banner.jpg","img/blog/2. Post 2/blog2-banner.jpg","img/blog/transam/week 1/day1-1.jpg","img/blog/transam/week 1/day1-2.jpg","img/blog/transam/week 1/day2-1.jpg","img/blog/transam/week 1/day2-2.jpg","img/blog/transam/week 1/day3-1.jpg","img/blog/transam/week 1/week1-banner.jpg","img/blog.jpg","img/contact.jpg","img/hero-2.jpg","img/hero-3.jpg","img/hero-4.jpg","img/hero-5.jpg","img/hero-6.jpg","img/hero-c.jpg","img/hero.jpg","img/logo-1.png","img/logo-2.png","img/logo-3.png","img/logo-4.png","img/logo-5.png","img/logo-6.png","img/test.jpg","img/tour1-cover.jpg","img/tour2-cover-old.jpg","img/tour2-cover.jpg","img/tour2-cover2.jpg","img/tour3-cover.jpeg","img/tour4-cover.jpg","img/tours/1. McKenzie Pass/tour1-cover-old.jpg","img/tours/1. McKenzie Pass/tour1-cover.jpg","img/tours/2. Twin Bridges/tour2-cover.jpg","img/tours/3. COAT/tour3-cover.jpeg","img/tours/3. COAT/tour3-cover.jpg","img/tours-2.jpg","js/animations.js","js/preload.js","js/tours.js","webfonts/DIN-Next-LT-Pro-Regular.ttf","webfonts/fa-brands-400.ttf","webfonts/fa-brands-400.woff2","webfonts/fa-regular-400.ttf","webfonts/fa-regular-400.woff2","webfonts/fa-solid-900.ttf","webfonts/fa-solid-900.woff2","webfonts/fa-v4compatibility.ttf","webfonts/fa-v4compatibility.woff2"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".jpeg":"image/jpeg",".js":"application/javascript",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e55f2a0f.js","imports":["_app/immutable/entry/start.e55f2a0f.js","_app/immutable/chunks/index.9c05492d.js","_app/immutable/chunks/singletons.72ed1316.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e4dfd5cc.js","imports":["_app/immutable/entry/app.e4dfd5cc.js","_app/immutable/chunks/index.9c05492d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/tours/[tourName]",
				pattern: /^\/tours\/([^/]+?)\/?$/,
				params: [{"name":"tourName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
