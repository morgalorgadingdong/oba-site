import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
/* empty css                                                      *//* empty css                                                      */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-10nsz2t.svelte-10nsz2t{z-index:2}.btn.active.svelte-10nsz2t.svelte-10nsz2t{background-color:var(--color-primary);color:var(--color-light)}.btn.svelte-10nsz2t.svelte-10nsz2t{outline:none;border:none}.hero-img.svelte-10nsz2t.svelte-10nsz2t{object-position:left}section.svelte-10nsz2t.svelte-10nsz2t{transition:all 0.5s ease}section.svelte-10nsz2t>.toggle-container.svelte-10nsz2t{border-bottom:2px solid var(--color-primary)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img svelte-10nsz2t"}" src="${"./img/tours-2.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12 svelte-10nsz2t"}">Tours</h1></div></div>

<section class="${"col-12 d-flex justify-content-center flex-wrap my-5 svelte-10nsz2t"}"><div class="${"toggle-container col-12 col-md-8 px-0 d-flex justify-content-between flex-wrap mb-5 svelte-10nsz2t"}"><div class="${"col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3"}"><button class="${"view-toggle btn " + escape("active", true) + " svelte-10nsz2t"}">By Date</button></div>
        <div class="${"col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3"}"><button class="${"view-toggle btn " + escape("", true) + " svelte-10nsz2t"}">By Tour</button></div>
        </div>
    ${`<div id="${"calendarView"}" class="${"col-12 col-md-8 px-0"}">
            ${``}</div>`}
    
</section>`;
});
export {
  Page as default
};
