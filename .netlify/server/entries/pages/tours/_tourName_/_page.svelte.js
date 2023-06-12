import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../../chunks/index.js";
import { t as tours } from "../../../../chunks/tours.js";
/* empty css                                                         */import { S as Splide_1, a as SplideTrack, b as SplideSlide } from "../../../../chunks/SplideSlide.js";
import "../../../../chunks/splide.min.js";
import { C as ContactCard } from "../../../../chunks/ContactCard.js";
const css$2 = {
  code: "iframe.svelte-13nqlle{width:100%;height:400px;border:none;overflow:hidden;transition:all 0.5s ease-in-out}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let frame;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$2);
  return `


<iframe id="${"idIframe"}" src="${"about:blank"}" class="${"svelte-13nqlle"}"${add_attribute("this", frame, 0)}></iframe>`;
});
const TourImg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tour-pic.svelte-13g29sm img.svelte-13g29sm{width:100%;aspect-ratio:3/2;max-height:80vh;object-fit:cover;object-position:center}",
  map: null
};
const TourImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tour } = $$props;
  let { picIndex } = $$props;
  let imgSrc;
  function renderPicture(listing) {
    imgSrc = `../../img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-${picIndex}.jpg`;
    return imgSrc;
  }
  if ($$props.tour === void 0 && $$bindings.tour && tour !== void 0)
    $$bindings.tour(tour);
  if ($$props.picIndex === void 0 && $$bindings.picIndex && picIndex !== void 0)
    $$bindings.picIndex(picIndex);
  $$result.css.add(css$1);
  return `<div class="${"tour-pic d-flex align-items-center svelte-13g29sm"}"><img${add_attribute("src", renderPicture(), 0)} class="${" svelte-13g29sm"}"${add_attribute("alt", tour.picAlts[picIndex], 0)}>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-xo50dp.svelte-xo50dp{background-color:var(--color-primary);color:var(--color-light);width:fit-content}.back-to.svelte-xo50dp.svelte-xo50dp{text-decoration:none}#quick-details-container.svelte-xo50dp h3.svelte-xo50dp{color:white}#quick-details-container.svelte-xo50dp li.svelte-xo50dp{padding:0.7rem;background-color:var(--color-background-light);margin:0.5rem}#quick-details-container.svelte-xo50dp ul.svelte-xo50dp{list-style:none}#quick-details-container.svelte-xo50dp.svelte-xo50dp{height:fit-content;background-color:var(--color-primary)}#quick-details-container.svelte-xo50dp .svelte-xo50dp{color:white}#calendar-aside.svelte-xo50dp.svelte-xo50dp{height:100%}#calendar-aside.svelte-xo50dp>div.svelte-xo50dp{border-radius:6px;box-shadow:4px 4px 4px 4px rgba(0, 0, 0, 0.2);background-color:white;overflow:hidden}#aside-topsection.svelte-xo50dp>img.svelte-xo50dp{aspect-ratio:3/2}#aside-topsection.svelte-xo50dp>img.svelte-xo50dp{object-fit:cover;overflow:hidden}aside.svelte-xo50dp.svelte-xo50dp{height:500px}aside.svelte-xo50dp.svelte-xo50dp{position:relative;top:-20vh;margin:20px;padding-right:4vw !important;padding-left:0}a.svelte-xo50dp.svelte-xo50dp{color:black}.tour-divider.svelte-xo50dp.svelte-xo50dp{border-top:black solid 2px}@media(max-width: 992px){aside.svelte-xo50dp.svelte-xo50dp{top:0;padding-right:0}#calendar-aside.svelte-xo50dp>div.svelte-xo50dp{box-shadow:none}}",
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
    <div class="${"d-flex align-items-start flex-wrap"}"><div id="${"tour-info-container"}" class="${"col-12 col-md-7 col-lg-8 d-flex flex-wrap justify-content-center content-container text-start center m-0 mb-5 px-lg-5 pt-3 svelte-xo50dp"}">
            ${tour.quickDetails ? `<div id="${"quick-details-container"}" class="${"col-10 d-fex justify-content-start flex-wrap p-3 mb-3 svelte-xo50dp"}"><h3 class="${"font-logo svelte-xo50dp"}">Quick Details</h3>
                <ul class="${"d-flex justify-content-start mb-1 flex-wrap col-12 svelte-xo50dp"}"><li class="${"svelte-xo50dp"}">Price: ${escape(tour.price)}</li>
                    <li class="${"svelte-xo50dp"}">Duration: ${escape(tour.duration)}</li>
                    <li class="${"svelte-xo50dp"}">Distance: ${escape(tour.distance)}</li>
                    
                    <li class="${"svelte-xo50dp"}">Difficulty(1-5): ${escape(tour.difficultyRating)}</li>
                    <li class="${"svelte-xo50dp"}">Ages: ${escape(tour.ages)}</li>
                    <li class="${"svelte-xo50dp"}">Location: ${escape(tour.meetingLocation)}</li>
                    <li class="${"svelte-xo50dp"}">Max Group Size: ${escape(tour.maxGroupSize)}</li>
                    </ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>` : ``}
            
            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">Description</h3>
                ${each(tour.description, (paragraph) => {
    return `<p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(paragraph.content)}</p>`;
  })}</div>

            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>

            ${tour.ridewithgps ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><iframe class="${"my-3"}"${add_attribute("src", tour.ridewithgps, 0)} style="${"width: 1px; min-width: 100%; height: 700px; border: none;"}" scrolling="${"no"}"></iframe></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>` : ``}
            

            
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
            return `${each(Array(tour.pics), (pic, i) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "mb-5 mt-0 mr-3" }, {}, {
                default: () => {
                  return `${validate_component(TourImg, "TourImg").$$render($$result, { tour, picIndex: i }, {}, {})}
                            
                            
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
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>` : ``}
            
            ${tour.whatsProvided ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What&#39;s provided</h3>
                <ul class="${"col-12 mx-3"}">${each(tour.whatsProvided, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>` : ``}
            
            ${tour.whatToBring ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What to bring</h3>
                    <ul class="${"col-12 mx-3"}">${each(tour.whatToBring, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>
                
                <div class="${"tour-divider col-12 mb-5 mt-3 svelte-xo50dp"}"></div>` : ``}
            

            ${tour.conclusion ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(tour.conclusion)}</p></div>` : ``}</div> 
        
        
        <aside id="${"calendar-aside"}" class="${"col-md-5 col-lg-4 m-0 p-3 p-lg-0 svelte-xo50dp"}">${tour.calendarURL ? `<div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-xo50dp"}"><div id="${"aside-topsection"}" class="${"col-12 mx-0 px-0 order-2 order-md-1 svelte-xo50dp"}"><img src="${"../../img/tour1-cover.jpg"}" alt="${"calendar"}" class="${"col-12 px-0 d-none d-md-inline svelte-xo50dp"}">
                    <div class="${"col-12 d-flex justify-content-center my-3"}"><button class="${"btn btn-primary svelte-xo50dp"}">Book now</button></div></div>
                <div id="${"aside-bottomsection"}" class="${"col-12 mx-0 px-0 order-1 order-md-2 svelte-xo50dp"}">${validate_component(Calendar, "Calendar").$$render($$result, { url }, {}, {})}</div></div>` : `<div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-xo50dp"}"><div id="${""}" class="${"col-12 mx-0 p-3 order-2 order-md-1"}"><h3 class="${"font-logo text-left"}">Contact To Book</h3>
                    <div class="${"tour-divider col-12 mb-3 mt-3 svelte-xo50dp"}"></div>
                    <div class="${"col-12 d-flex justify-content-center my-3"}">${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div></div></div>`}</aside>
    
        <div class="${"col-12 d-flex justify-content-center"}"><a href="${"/tours"}" class="${"back-to svelte-xo50dp"}"><div class="${"btn py-3 px-3 mb-5 svelte-xo50dp"}">&lt;- Back to all tours</div></a></div></div>
    
    
    
    </section>
 

 `;
});
export {
  Page as default
};
