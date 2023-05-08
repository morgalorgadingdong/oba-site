import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../../chunks/index.js";
import { t as tours } from "../../../../chunks/tours.js";
/* empty css                                                         */import { S as Splide_1, a as SplideTrack, b as SplideSlide } from "../../../../chunks/SplideSlide.js";
import "../../../../chunks/splide.min.js";
const css$1 = {
  code: "iframe.svelte-13nqlle{width:100%;height:400px;border:none;overflow:hidden;transition:all 0.5s ease-in-out}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let frame;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `


<iframe id="${"idIframe"}" src="${"about:blank"}" class="${"svelte-13nqlle"}"${add_attribute("this", frame, 0)}></iframe>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tour-pic.svelte-1j43822 img.svelte-1j43822{width:100%;aspect-ratio:3/2;max-height:80vh;object-fit:cover;object-position:center}#quick-details-container.svelte-1j43822 h3.svelte-1j43822{color:white}#quick-details-container.svelte-1j43822 li.svelte-1j43822{padding:0.7rem;background-color:var(--color-background-light);margin:0.5rem}#quick-details-container.svelte-1j43822 ul.svelte-1j43822{list-style:none}#quick-details-container.svelte-1j43822.svelte-1j43822{height:fit-content;background-color:var(--color-primary)}#quick-details-container.svelte-1j43822 .svelte-1j43822{color:white}#calendar-aside.svelte-1j43822.svelte-1j43822{height:100%}#calendar-aside.svelte-1j43822>div.svelte-1j43822{border-radius:6px;box-shadow:4px 4px 4px 4px rgba(0, 0, 0, 0.2);background-color:white;overflow:hidden}#aside-topsection.svelte-1j43822>img.svelte-1j43822{aspect-ratio:3/2}#aside-topsection.svelte-1j43822>img.svelte-1j43822{object-fit:cover;overflow:hidden}aside.svelte-1j43822.svelte-1j43822{height:500px}aside.svelte-1j43822.svelte-1j43822{position:relative;top:-20vh;margin:20px;padding-right:4vw !important;padding-left:0}.tour-divider.svelte-1j43822.svelte-1j43822{border-top:black solid 2px}@media(max-width: 992px){aside.svelte-1j43822.svelte-1j43822{top:0;padding-right:0}#calendar-aside.svelte-1j43822>div.svelte-1j43822{box-shadow:none}}",
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
  let i = 1;
  let imgSrc;
  function renderPicture(listing) {
    imgSrc = `../../img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-${i}.jpg`;
    i++;
    return imgSrc;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div id="${""}" class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
            <img${add_attribute("src", imgSrcCover, 0)}${add_attribute("alt", tour.coverAlt, 0)} class="${"hero-img img"}"></div>
        


        <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-start flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline font-logo col-12 col-lg-8 text-left text-md-center"}">${escape(tour.title)}</h1></div></div>
    <div class="${"d-flex align-items-start flex-wrap"}"><div id="${"tour-info-container"}" class="${"col-12 col-md-7 col-lg-8 d-flex flex-wrap justify-content-center content-container text-start center m-0 mb-5 px-lg-5 svelte-1j43822"}">
            <div id="${"quick-details-container"}" class="${"col-10 d-fex justify-content-start flex-wrap p-3 my-3 svelte-1j43822"}"><h3 class="${"font-logo svelte-1j43822"}">Quick Details</h3>
                <ul class="${"d-flex justify-content-start mb-1 flex-wrap col-12 svelte-1j43822"}"><li class="${"svelte-1j43822"}">Price: ${escape(tour.price)}</li>
                    <li class="${"svelte-1j43822"}">Duration: ${escape(tour.duration)}</li>
                    <li class="${"svelte-1j43822"}">Distance: ${escape(tour.distance)}</li>
                    
                    <li class="${"svelte-1j43822"}">Difficulty(1-5): ${escape(tour.difficultyRating)}</li>
                    <li class="${"svelte-1j43822"}">Ages: ${escape(tour.ages)}</li>
                    </ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1j43822"}"></div>
            
            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">Description</h3>
                ${each(tour.description, (paragraph) => {
    return `<p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(paragraph.content)}</p>`;
  })}</div>

            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1j43822"}"></div>


            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><iframe class="${"my-3"}"${add_attribute("src", tour.ridewithgps, 0)} style="${"width: 1px; min-width: 100%; height: 700px; border: none;"}" scrolling="${"no"}"></iframe></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1j43822"}"></div>
            

            
            ${tour.pics > 0 ? `<div class="${"col-12 px-3"}"><h3 class="${"font-logo text-left"}">Pictures</h3>
                ${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      "aria-label": "",
      class: "z-reset",
      hasTrack: false,
      options: {
        type: "loop",
        perPage: 2,
        breakpoints: {
          768: { perPage: 1.5 },
          576: { perPage: 1 }
        },
        focus: "center",
        drag: "free",
        snap: true
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
          default: () => {
            return `${each(Array(tour.pics), (pic) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "mb-5 mt-0 mr-3" }, {}, {
                default: () => {
                  return `<div class="${"tour-pic svelte-1j43822"}"><img${add_attribute("src", renderPicture(), 0)} alt="${"tour"}" class="${" svelte-1j43822"}"></div>
                        `;
                }
              })}`;
            })}`;
          }
        })}
                    <div class="${"splide__arrows"}"><button class="${"splide__arrow splide__arrow--prev"}"><i class="${"fa-solid fa-caret-left"}"></i></button>
                        <button class="${"splide__arrow splide__arrow--next"}"><i class="${"fa-solid fa-caret-right"}"></i></button></div>`;
      }
    }
  )}</div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1j43822"}"></div>` : ``}
            
            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What&#39;s provided</h3>
                <ul class="${"col-12 mx-3"}">${each(tour.whatsProvided, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-1j43822"}"></div>
                
                <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What to bring</h3>
                    <ul class="${"col-12 mx-3"}">${each(tour.whatToBring, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>
            </div>
        <aside id="${"calendar-aside"}" class="${"col-md-5 col-lg-4 m-0 p-3 p-lg-0 svelte-1j43822"}"><div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-1j43822"}"><div id="${"aside-topsection"}" class="${"col-12 mx-0 px-0 order-2 order-md-1 svelte-1j43822"}"><img src="${"../../img/tour1-cover.jpg"}" alt="${"calendar"}" class="${"col-12 px-0 d-none d-md-inline svelte-1j43822"}">
                    <div class="${"col-12 d-flex justify-content-center my-3"}"><button class="${"btn btn-primary"}">Book now</button></div></div>
                <div id="${"aside-bottomsection"}" class="${"col-12 mx-0 px-0 order-1 order-md-2 svelte-1j43822"}">${validate_component(Calendar, "Calendar").$$render($$result, { url }, {}, {})}</div></div></aside></div>
    
    
    
    
    </section>
 

 `;
});
export {
  Page as default
};
