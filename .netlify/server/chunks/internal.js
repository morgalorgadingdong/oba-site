import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index3.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8">\n		<title>Oregon Bicycle Adventures</title>\n		<meta name="viewport" content="width=device-width, initial-scale=1">\n		<meta name="description" content="Oregon Bicycle Adventures offers guided bike tours that unveil the breathtaking beauty of Oregon, while fostering personal growth and inspiration through unique cycling experiences.">\n		<meta name="keywords" content="Oregon Bicycle Adventures, guided bike tours, bicycle tours, Oregon bike tours, Oregon, cycling, cycling experiences, adventure, travel, scenic rides, Bend activites, Bend tours">\n		<meta name="author" content="Your Name or Company Name">\n		<link rel="canonical" href="https://www.oregonbicycleadventures.com">\n		\n		<!-- Open Graph / Facebook -->\n		<meta property="og:type" content="website">\n		<meta property="og:url" content="https://www.oregonbicycleadventures.com">\n		<meta property="og:title" content="Oregon Bicycle Adventures">\n		<meta property="og:description" content="Oregon Bicycle Adventures offers guided bike tours that unveil the breathtaking beauty of Oregon, while fostering personal growth and inspiration through unique cycling experiences.">\n		<meta property="og:image" content="' + assets2 + '/OBA_Instagram_Profile.png">\n\n		<!-- Twitter -->\n		<meta property="twitter:card" content="summary_large_image">\n		<meta property="twitter:url" content="https://www.oregonbicycleadventures.com">\n		<meta property="twitter:title" content="Oregon Bicycle Adventures">\n		<meta property="twitter:description" content="Oregon Bicycle Adventures offers guided bike tours that unveil the breathtaking beauty of Oregon, while fostering personal growth and inspiration through unique cycling experiences.">\n		<meta property="twitter:image" content="' + assets2 + '/OBA_Instagram_Profile.png">\n\n		<link rel="icon" href="' + assets2 + '/OBA_Instagram_Profile.png" />\n		<link rel="stylesheet" href="' + assets2 + '/css/bootstrap/bootstrap.css">\n		<link rel="stylesheet" href="' + assets2 + '/css/style.css">\n		<link rel="stylesheet" href="' + assets2 + '/css/all.css">\n		<link rel="stylesheet" href="' + assets2 + '/css/animations.css">\n		<link rel="stylesheet" href="https://use.typekit.net/bve4csc.css">\n		' + head + `
	</head>
	<!-- Start cookieyes banner --> 
	<!-- <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/c3115bc4a5f9197edced380b/script.js"><\/script>  -->
	<!-- End cookieyes banner -->
	<!-- Google tag (gtag.js) -->
	<script type="module" src="https://cookieconsent.popupsmart.com/js/CookieConsent.js" ><\/script>
<script type="text/javascript" src="https://cookieconsent.popupsmart.com/js/App.js"><\/script>
<script>
    popupsmartCookieConsentPopup({
        "siteName" : "Oregon Bicycle Adventures" ,
        "notice_banner_type": "simple-dialog",
        "consent_type": "gdpr",
        "palette": "light",
        "language": "English",
        "privacy_policy_url" : "#" ,
        "preferencesId" : "#" ,
        "companyLogoURL" : "https://d2r80wdbkwti6l.cloudfront.net/Xf5V2NhFdvaeI61iTGq2b7kCi62QjhtF.jpg"
    });
<\/script>
<!-- Google Analytics start -->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-SVWKMZV73D" type="text/plain" cookie-consent="tracking"><\/script>
	<script type="text/plain" cookie-consent="tracking">
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-SVWKMZV73D');
	<\/script>

    <!-- Google Analytics end -->
    
<noscript>Cookie Consent by <a href="https://popupsmart.com/" rel="nofollow noopener">Popupsmart Website</a></noscript> 
	<body data-sveltekit-preload-data="hover" id="the-body">
		<div style="display: contents">` + body + '</div>\n	</body>\n	<!-- <script src="' + assets2 + '/js/preload.js"><\/script>\n    <script src="' + assets2 + '/js/animations.js"><\/script> -->\n	<!-- FareHarbor Lightframe API - do not remove - see: https://fareharbor.com/help/website/resources/lightframe-api/ -->\n	<script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"><\/script>\n	<!-- <script src="../js/tours.js" crossorigin="anonymous"><\/script> -->\n</html>\n',
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "cvzpvj"
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_public_env as s
};
