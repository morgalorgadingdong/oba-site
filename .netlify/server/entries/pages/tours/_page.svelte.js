import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
/* empty css                                                      */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-s1hvzt.svelte-s1hvzt{font-family:var(--font-hero);z-index:2}.btn.active.svelte-s1hvzt.svelte-s1hvzt{background-color:var(--color-primary);color:var(--color-light)}.btn.svelte-s1hvzt.svelte-s1hvzt{outline:none;border:none}.hero.svelte-s1hvzt .img-container.svelte-s1hvzt{background-image:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));z-index:1}section.svelte-s1hvzt.svelte-s1hvzt{transition:all 0.5s ease}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end svelte-s1hvzt"}"><div class="${"img-container svelte-s1hvzt"}"><img class="${"hero-img img"}" src="${"./img/tours-2.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12 svelte-s1hvzt"}">Tours</h1></div></div>

<section class="${"col-12 d-flex justify-content-center flex-wrap my-5 svelte-s1hvzt"}"><div class="${"col-12 col-md-8 px-0 d-flex justify-content-between"}"><button class="${"view-toggle btn " + escape("active", true) + " svelte-s1hvzt"}">Calendar view</button>
        <button class="${"view-toggle btn " + escape("", true) + " svelte-s1hvzt"}">Single Day Tours</button>
        <button class="${"view-toggle btn " + escape("", true) + " svelte-s1hvzt"}">MultiDay Tours</button></div>
    ${`<div id="${"calendarView"}" class="${"col-12 col-md-8 px-0"}"><h3>This is where the Calender will go</h3></div>`}
    
</section>`;
});
export {
  Page as default
};
