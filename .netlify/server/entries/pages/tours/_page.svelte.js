import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/index2.js";
import { T as TourCard } from "../../../chunks/TourCard.js";
import { t as tours } from "../../../chunks/tours.js";
/* empty css                                                      */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1cgzfco.svelte-1cgzfco{z-index:2}.btn.active.svelte-1cgzfco.svelte-1cgzfco{background-color:var(--color-primary);color:var(--color-light)}.btn.inactive.svelte-1cgzfco.svelte-1cgzfco{background-color:var(--color-light);color:var(--color-primary)}.btn.inactive.svelte-1cgzfco.svelte-1cgzfco:hover{background-color:var(--color-primary);color:var(--color-light);box-shadow:none}.btn.svelte-1cgzfco.svelte-1cgzfco{outline:none;border:none}.hero-img.svelte-1cgzfco.svelte-1cgzfco{object-position:left}section.svelte-1cgzfco.svelte-1cgzfco{transition:all 0.5s ease}section.svelte-1cgzfco>.toggle-container.svelte-1cgzfco{border-bottom:2px solid var(--color-primary)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero hero-sub col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img svelte-1cgzfco"}" src="${"./img/tours-2.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12 svelte-1cgzfco"}">Tours</h1></div></div>

<section class="${"col-12 d-flex justify-content-center flex-wrap my-5 svelte-1cgzfco"}"><div class="${"toggle-container col-12 col-md-8 px-0 d-flex justify-content-between flex-wrap mb-5 svelte-1cgzfco"}"><div class="${"col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3"}"><button class="${"view-toggle btn " + escape("active", true) + " svelte-1cgzfco"}">By Tour</button></div>
        <div class="${"col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3"}"><button class="${"view-toggle btn " + escape("inactive", true) + " svelte-1cgzfco"}">By Date</button></div>
        
        </div>
    ${`${`<div id="${"singleDayView"}" class="${"col-12 col-xxl-8 px-0 d-flex justify-content-center justify-content-xl-start flex-wrap"}"><div class="${"filter-container"}"></div>
            ${each(tours, (tour) => {
    return `${tour.published ? `${validate_component(TourCard, "TourCard").$$render($$result, { tour }, {}, {})}` : ``}`;
  })}</div>
    `}`}
    
</section>`;
});
export {
  Page as default
};
