import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../../chunks/index.js";
import { t as tours } from "../../../../chunks/tours.js";
/* empty css                                                         */const css$1 = {
  code: "iframe.svelte-1epokvy{width:100%;height:400px;border:none;overflow:hidden}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let frame;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `


<iframe id="${"idIframe"}" src="${"about:blank"}" class="${"svelte-1epokvy"}"${add_attribute("this", frame, 0)}></iframe>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#quick-details-container.svelte-1e49bda li.svelte-1e49bda{padding:0.7rem;background-color:var(--color-primary-dark);margin:0.5rem}#quick-details-container.svelte-1e49bda ul.svelte-1e49bda{list-style:none}#quick-details-container.svelte-1e49bda.svelte-1e49bda{height:fit-content;background-color:var(--color-primary)}#quick-details-container.svelte-1e49bda .svelte-1e49bda{color:white}#calendar-aside.svelte-1e49bda.svelte-1e49bda{height:100%}#calendar-aside.svelte-1e49bda>div.svelte-1e49bda{border-radius:6px;box-shadow:4px 4px 4px 4px rgba(0, 0, 0, 0.2);background-color:white;overflow:hidden}#aside-topsection.svelte-1e49bda>img.svelte-1e49bda{aspect-ratio:3/2}#aside-topsection.svelte-1e49bda>img.svelte-1e49bda{object-fit:cover;overflow:hidden}aside.svelte-1e49bda.svelte-1e49bda{height:500px}aside.svelte-1e49bda.svelte-1e49bda{position:relative;top:-20vh;margin:20px;padding-right:4vw !important;padding-left:0}.tour-divider.svelte-1e49bda.svelte-1e49bda{border-top:black solid 2px}@media(max-width: 992px){aside.svelte-1e49bda.svelte-1e49bda{top:0;padding-right:0}#calendar-aside.svelte-1e49bda>div.svelte-1e49bda{box-shadow:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tour;
  tours.forEach((item) => {
    if (item.title == data.tourName) {
      tour = item;
      console.log(tour);
    }
  });
  let url = tour.calendarURL;
  let imgSrcCover = `../../img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div id="${""}" class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
            <img${add_attribute("src", imgSrcCover, 0)}${add_attribute("alt", tour.coverAlt, 0)} class="${"hero-img img"}"></div>
        


        <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-start flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline font-logo col-12 col-lg-8 text-left text-md-center"}">${escape(tour.title)}</h1></div></div>
    <div class="${"d-flex align-items-start flex-wrap"}"><div id="${"tour-info-container"}" class="${"col-12 col-md-7 col-lg-8 d-flex flex-wrap justify-content-center content-container text-start center m-0 mb-5 px-lg-5 svelte-1e49bda"}">
            <div id="${"quick-details-container"}" class="${"col-10 d-fex justify-content-start flex-wrap p-3 my-3 svelte-1e49bda"}"><h3 class="${"font-logo svelte-1e49bda"}">Quick Details</h3>
                <ul class="${"d-flex justify-content-start mb-1 flex-wrap col-12 svelte-1e49bda"}"><li class="${"svelte-1e49bda"}">Price: ${escape(tour.price)}</li>
                    <li class="${"svelte-1e49bda"}">Duration: ${escape(tour.duration)}</li>
                    <li class="${"svelte-1e49bda"}">Distance: ${escape(tour.distance)}</li>
                    
                    <li class="${"svelte-1e49bda"}">Difficulty(1-5): ${escape(tour.difficultyRating)}</li>
                    <li class="${"svelte-1e49bda"}">Ages: ${escape(tour.ages)}</li>
                    ${tour.ebikes ? `<li class="${"svelte-1e49bda"}">E-bikes available</li>` : `<li class="${"svelte-1e49bda"}">E-bikes not available</li>`}</ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1e49bda"}"></div>
            
            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">Description</h3>
                ${each(tour.description, (paragraph) => {
    return `<p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(paragraph.content)}</p>`;
  })}</div>

                <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1e49bda"}"></div>
                
                <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What to bring</h3>
                    <p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(tour.whatToBring)}</p></div>
            </div>
        <aside id="${"calendar-aside"}" class="${"col-md-5 col-lg-4 m-0 p-3 p-lg-0 svelte-1e49bda"}"><div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-1e49bda"}"><div id="${"aside-topsection"}" class="${"col-12 mx-0 px-0 order-2 order-md-1 svelte-1e49bda"}"><img src="${"../../img/tour1-cover.jpg"}" alt="${"calendar"}" class="${"col-12 px-0 d-none d-md-inline svelte-1e49bda"}">
                    <div class="${"col-12 d-flex justify-content-center my-3"}"><button class="${"btn btn-primary"}">Book now</button></div></div>
                <div id="${"aside-bottomsection"}" class="${"col-12 mx-0 px-0 order-1 order-md-2 svelte-1e49bda"}">${validate_component(Calendar, "Calendar").$$render($$result, { url }, {}, {})}</div></div></aside></div>
    
    
    
    
    </section>
 

 `;
});
export {
  Page as default
};
