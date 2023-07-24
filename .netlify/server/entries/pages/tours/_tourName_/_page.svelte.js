import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../../chunks/index3.js";
import { t as tours } from "../../../../chunks/tours.js";
/* empty css                                                         */import { S as Splide_1, a as SplideTrack, b as SplideSlide } from "../../../../chunks/SplideSlide.js";
import "../../../../chunks/splide.min.js";
import { C as ContactCard } from "../../../../chunks/ContactCard.js";
const css$3 = {
  code: "iframe.svelte-13nqlle{width:100%;height:400px;border:none;overflow:hidden;transition:all 0.5s ease-in-out}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let frame;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$3);
  return `


<iframe id="${"idIframe"}" src="${"about:blank"}" class="${"svelte-13nqlle"}"${add_attribute("this", frame, 0)}></iframe>`;
});
const TourImg_svelte_svelte_type_style_lang = "";
const css$2 = {
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
  $$result.css.add(css$2);
  return `<div class="${"tour-pic d-flex align-items-center svelte-13g29sm"}"><img${add_attribute("src", renderPicture(), 0)} class="${" svelte-13g29sm"}"${add_attribute("alt", tour.picAlts[picIndex], 0)}>
</div>`;
});
const DetailItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-5k588o.svelte-5k588o{padding-left:0}p.svelte-5k588o.svelte-5k588o{margin:0;padding:0;width:fit-content}button.svelte-5k588o.svelte-5k588o{background-color:var(--color-primary)}button.svelte-5k588o.svelte-5k588o{border:none;line-height:100%;margin:auto;color:white;cursor:pointer;margin:0;padding-bottom:0.5em;padding-top:0.5em\r\n	}svg.svelte-5k588o.svelte-5k588o{transition:transform 0.25s ease-in}@media(min-width: 768px){button.svelte-5k588o.svelte-5k588o,ul.svelte-5k588o.svelte-5k588o,p.svelte-5k588o.svelte-5k588o,svg.svelte-5k588o.svelte-5k588o{display:none}}[aria-expanded=true].svelte-5k588o svg.svelte-5k588o{transform:rotate(0.25turn)}",
  map: null
};
const DetailItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { itinerary } = $$props;
  let isOpen = false;
  if ($$props.itinerary === void 0 && $$bindings.itinerary && itinerary !== void 0)
    $$bindings.itinerary(itinerary);
  $$result.css.add(css$1);
  return `<button${add_attribute("aria-expanded", isOpen, 0)} class="${"d-flex justify-content-center align-items-center d-md-none svelte-5k588o"}"><svg style="${"tran"}" width="${"20"}" height="${"20"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"svelte-5k588o"}"><path d="${"M9 5l7 7-7 7"}"></path></svg> <p class="${"svelte-5k588o"}">Details</p></button>
${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 1400px){#tour-content-container.svelte-1wnyjt7.svelte-1wnyjt7{max-width:83vw !important}}.ls-none.svelte-1wnyjt7.svelte-1wnyjt7{list-style:none}.back-to.svelte-1wnyjt7.svelte-1wnyjt7{text-decoration:none}#quick-details-container.svelte-1wnyjt7 h3.svelte-1wnyjt7{color:white}#quick-details-container.svelte-1wnyjt7 li.svelte-1wnyjt7{padding:0.7rem;background-color:var(--color-background-light);margin:0.5rem}#quick-details-container.svelte-1wnyjt7 ul.svelte-1wnyjt7{list-style:none}#quick-details-container.svelte-1wnyjt7.svelte-1wnyjt7{height:fit-content;background-color:var(--color-primary);border-radius:0.25rem}#quick-details-container.svelte-1wnyjt7 .svelte-1wnyjt7{color:white}#calendar-aside.svelte-1wnyjt7>div.svelte-1wnyjt7{border-radius:6px;box-shadow:4px 4px 4px 4px rgba(0, 0, 0, 0.2);background-color:white;overflow:hidden}#aside-topsection.svelte-1wnyjt7>img.svelte-1wnyjt7{aspect-ratio:3/2}#aside-topsection.svelte-1wnyjt7>img.svelte-1wnyjt7{object-fit:cover;overflow:hidden}aside.svelte-1wnyjt7.svelte-1wnyjt7{height:500px}aside.svelte-1wnyjt7.svelte-1wnyjt7{position:relative;top:-20vh;margin:20px;padding-right:4vw !important;padding-left:0}a.svelte-1wnyjt7.svelte-1wnyjt7{color:black}@media(max-width: 992px){aside.svelte-1wnyjt7.svelte-1wnyjt7{top:0;padding-right:0}#calendar-aside.svelte-1wnyjt7>div.svelte-1wnyjt7{box-shadow:none}}",
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
  return `<section class="${"d-flex justify-content-center flex-wrap"}"><div id="${""}" class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
            <img${add_attribute("src", imgSrcCover, 0)}${add_attribute("alt", tour.coverAlt, 0)} class="${"hero-img img"}"></div>
        


        <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-start flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline font-logo col-12 col-lg-8 text-left text-md-center"}">${escape(tour.title)}</h1></div></div>
    <div id="${"tour-content-container"}" class="${"d-flex align-items-start flex-wrap col-12 px-0 col-xxl-10 svelte-1wnyjt7"}"><div id="${"tour-info-container"}" class="${"col-12 col-md-7 col-lg-8 d-flex flex-wrap justify-content-center content-container text-start center m-0 mb-5 px-lg-5 pt-3 svelte-1wnyjt7"}">
            ${tour.quickDetails ? `<div id="${"quick-details-container"}" class="${"col-10 d-fex justify-content-start flex-wrap p-3 mb-3 svelte-1wnyjt7"}"><h3 class="${"font-logo svelte-1wnyjt7"}">Quick Details</h3>
                <ul class="${"d-flex justify-content-start mb-1 flex-wrap col-12 svelte-1wnyjt7"}"><li class="${"svelte-1wnyjt7"}">Price: ${escape(tour.price)}</li>
                    <li class="${"svelte-1wnyjt7"}">Duration: ${escape(tour.duration)}</li>
                    <li class="${"svelte-1wnyjt7"}">Distance: ${escape(tour.distance)}</li>
                    
                    <li class="${"svelte-1wnyjt7"}">Level: ${escape(tour.difficulty)}</li>
                    <li class="${"svelte-1wnyjt7"}">Ages: ${escape(tour.ages)}</li>
                    <li class="${"svelte-1wnyjt7"}">Location: ${escape(tour.meetingLocation)}</li>
                    <li class="${"svelte-1wnyjt7"}">Max Group Size: ${escape(tour.maxGroupSize)}</li>
                    </ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>` : ``}
            
            <div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">Description</h3>
                ${each(tour.description, (paragraph) => {
    return `<p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(paragraph.content)}</p>`;
  })}</div>

            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>

            ${tour.ridewithgps ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><iframe class="${"my-3"}"${add_attribute("src", tour.ridewithgps, 0)} style="${"width: 1px; min-width: 100%; height: 700px; border: none;"}" scrolling="${"no"}"></iframe></div>
            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>` : ``}


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
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "mb-3 mt-0 mr-3" }, {}, {
                default: () => {
                  return `${validate_component(TourImg, "TourImg").$$render($$result, { tour, picIndex: i }, {}, {})}
                            
                            
                        `;
                }
              })}`;
            })}`;
          }
        })}
                    <div class="${"splide__arrows col-12 d-flex justify-content-between"}"><button class="${"splide__arrow splide__arrow--prev"}"><i class="${"fa-solid fa-caret-left"}"></i></button>
                        <button class="${"splide__arrow splide__arrow--next"}"><i class="${"fa-solid fa-caret-right"}"></i></button></div>`;
      }
    }
  )}</div>
            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>` : ``}

            ${tour.itinerary ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">Itinerary</h3>
                ${each(tour.itinerary, (itinerary) => {
    return `<div class="${"col-12 d-flex flex-wrap"}"><h3 class="${"text-left px-0 my-3 col-12"}">Day ${escape(itinerary.day)} - ${escape(itinerary.title)}</h3>
                    <div class="${"tour-divider mb-3 col-12 d-none d-md-inline"}"></div>
                    <div class="${"col-12 col-xl-3 d-flex flex-xl-column justify-content-start flex-wrap bg-light mb-3 mb-xl-3 pt-3"}">
                            <div class="${"px-1 px-sm-3 col-6 col-xl-auto bg-light"}"><p class="${"text-left px-0 fw-bold"}">Meals Provided</p>
                                <ul class="${"pl-3"}">${each(itinerary.meals, (meal) => {
      return `<li class="${"ls-none svelte-1wnyjt7"}">${escape(meal)}</li>`;
    })}
                                </ul></div>
                            <div class="${"px-1 px-sm-3 col-6 col-xl-auto bg-light"}"><p class="${"text-left px-0 fw-bold"}">Lodging</p>
                                <p class="${"text-left px-3"}">${escape(itinerary.lodging)}</p></div>
                            <div class="${"px-1 px-sm-3 col-6 col-xl-auto bg-light"}"><p class="${"text-left px-0 fw-bold"}">Distance</p>
                                <p class="${"text-left px-3"}">${escape(itinerary.miles)} miles</p></div>
                            <div class="${"px-1 px-sm-3 col-6 col-xl-auto bg-light"}"><p class="${"text-left px-0 fw-bold"}">Elevation Gain/Loss</p>
                                <p class="${"text-left px-3"}">+${escape(itinerary.elevationGain)}/-${escape(itinerary.elevationLoss)}</p>
                            </div></div>
                        <div class="${"col-12 col-xl-9 d-flex flex-column justify-content-start mb-3 px-0 px-xl-4"}">
                            ${each(itinerary.description, (paragraph) => {
      return `<p class="${"text-left px-0 d-none d-md-inline"}">${escape(paragraph)}</p>`;
    })}
                            ${validate_component(DetailItem, "DetailItem").$$render($$result, { itinerary }, {}, {})} 
                        </div></div>
                    ${itinerary.day != tour.itinerary.length ? `<div class="${"tour-divider mb-3 col-12 d-inline d-md-none"}"></div>` : ``}`;
  })}</div>
            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>` : ``}
            

            
           
            
            ${tour.whatsProvided ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What&#39;s included</h3>
                <ul class="${"col-12 mx-3"}">${each(tour.whatsProvided, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>
            <div class="${"tour-divider col-12 mb-5 mt-3"}"></div>` : ``}
            
            ${tour.whatToBring ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><h3 class="${"font-logo text-left"}">What to bring</h3>
                    <ul class="${"col-12 mx-3"}">${each(tour.whatToBring, (item) => {
    return `<li class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(item)}</li>`;
  })}</ul></div>` : ``}
            

            ${tour.conclusion ? `<div class="${"col-12 d-flex justify-content-start flex-wrap px-3"}"><p class="${"col-12 text-left px-0 my-3 blog-text"}">${escape(tour.conclusion)}</p></div>` : ``}</div> 
        
        
        <aside id="${"calendar-aside"}" class="${"col-md-5 col-lg-4 m-0 p-3 p-lg-0 svelte-1wnyjt7"}">${tour.calendarURL ? `<div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-1wnyjt7"}"><div id="${"aside-topsection"}" class="${"col-12 mx-0 px-0 order-2 order-md-1 svelte-1wnyjt7"}"><img src="${"../../img/tour1-cover.jpg"}" alt="${"calendar"}" class="${"col-12 px-0 d-none d-md-inline svelte-1wnyjt7"}"></div>
                <div id="${"aside-bottomsection"}" class="${"col-12 mx-0 px-0 order-1 order-md-2 svelte-1wnyjt7"}">${validate_component(Calendar, "Calendar").$$render($$result, { url }, {}, {})}</div></div>` : `<div class="${"px-0 mx-0 col-12 d-flex flex-wrap svelte-1wnyjt7"}"><div id="${""}" class="${"col-12 mx-0 p-3 order-2 order-md-1"}"><h3 class="${"font-logo text-left"}">Contact To Book</h3>
                    <div class="${"tour-divider col-12 mb-3 mt-3"}"></div>
                    <div class="${"col-12 d-flex justify-content-center my-3"}">${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div></div></div>`}</aside></div>
    
    <div class="${"col-12 d-flex justify-content-center mb-5"}"><a${add_attribute("href", tour.bookBtnURL, 0)} class="${"svelte-1wnyjt7"}"><button class="${"btn btn-primary"}">Book now</button></a></div>  


    <div class="${"col-12 px-1 px-sm-3 px-lg-5 d-flex justify-content-start"}"><a href="${"/tours"}" class="${"back-to svelte-1wnyjt7"}"><button class="${"btn btn-secondary mb-5"}">Back to all tours</button></a></div>
    
    </section>
 

 `;
});
export {
  Page as default
};
