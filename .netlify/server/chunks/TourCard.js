import { c as create_ssr_component, b as add_attribute, e as escape } from "./index3.js";
const TourCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".divider.svelte-vvbph2.svelte-vvbph2{width:100%;height:1px;background-color:lightgray}.trip-info-container-mobile.svelte-vvbph2.svelte-vvbph2{color:var(--color-primary-dark);border-radius:0 0 6px 6px;border:solid 2px lightgray;border-top:none;border-radius:0.25rem}.blank.svelte-vvbph2.svelte-vvbph2{opacity:0}.trip-preview-container.svelte-vvbph2.svelte-vvbph2{overflow:hidden;position:relative;padding:0;z-index:0;text-decoration:none}.trip-preview.svelte-vvbph2.svelte-vvbph2{aspect-ratio:1/1;border-radius:6px;position:relative}.trip-preview-img-container.svelte-vvbph2.svelte-vvbph2{width:100%;height:100%;overflow:hidden;border-radius:6px;position:absolute;top:0;left:0}.trip-preview-img.svelte-vvbph2.svelte-vvbph2{width:100%;height:100%;transition:all var(--animation-duration) ease-in-out;object-fit:cover}.trip-preview.svelte-vvbph2:hover .trip-preview-img.svelte-vvbph2,.trip-preview.svelte-vvbph2:focus .trip-preview-img.svelte-vvbph2{transform:scale(1.10);transition:all var(--animation-duration) ease-in-out;cursor:pointer}.trip-preview-container.svelte-vvbph2 h4.svelte-vvbph2{transition:all var(--animation-duration) ease-in-out;z-index:3;position:relative;width:fit-content;font-family:var(--font-header)}#tour-title-desktop.svelte-vvbph2.svelte-vvbph2{background-color:var(--color-primary);color:var(--color-light);border-radius:0.25rem}@media(min-width: 768px){.trip-preview-container.svelte-vvbph2 h4.svelte-vvbph2{right:1.5vw}.trip-preview.svelte-vvbph2:hover h4.svelte-vvbph2,.trip-preview.svelte-vvbph2:focus h4.svelte-vvbph2{transform:translateX(1.5vw);transition:all var(--animation-duration) ease-in-out}#tour-title-mobile.svelte-vvbph2.svelte-vvbph2{display:none}}.trip-info-container.svelte-vvbph2.svelte-vvbph2{transform:translateY(-100%);transition:all var(--animation-duration) ease-in-out;opacity:0;position:relative}.trip-info.svelte-vvbph2.svelte-vvbph2{background-color:var(--color-primary);color:var(--color-light);padding:0.5rem 0.75rem;height:100%;border-radius:0.25rem}.trip-info.svelte-vvbph2 span.svelte-vvbph2{line-height:1rem}.trip-preview.svelte-vvbph2:hover .trip-info-container.svelte-vvbph2,.trip-preview.svelte-vvbph2:focus .trip-info-container.svelte-vvbph2{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}@media(max-width: 768px){.trip-preview.svelte-vvbph2 .trip-info-container.svelte-vvbph2{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}#tour-title-desktop.svelte-vvbph2.svelte-vvbph2{display:none}.trip-preview-img-container.svelte-vvbph2.svelte-vvbph2{border-radius:6px 6px 0 0;border-bottom:solid 5px var(--color-primary)}}",
  map: null
};
const TourCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tour } = $$props;
  let imgSrc = `./img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
  if ($$props.tour === void 0 && $$bindings.tour && tour !== void 0)
    $$bindings.tour(tour);
  $$result.css.add(css);
  return `<div class="${"col-12 col-md-8 col-lg-4 p-3"}"><a class="${"col-12 trip-preview-container svelte-vvbph2"}"${add_attribute("href", "/tours/" + tour.title, 0)}><div class="${"trip-preview d-flex flex-column justify-content-end py-0 mx-3 svelte-vvbph2"}"><div class="${"trip-preview-img-container svelte-vvbph2"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", tour.bannerAlt, 0)} class="${"trip-preview-img svelte-vvbph2"}">
                </div>
            <h4 id="${"tour-title-desktop"}" class="${"px-4 py-2 svelte-vvbph2"}">${escape(tour.title)}</h4>
            
            <div class="${"trip-info-container d-none d-md-flex justify-content-start justify-content-xxl-around px-3 pb-3 svelte-vvbph2"}">${tour.price ? `<div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-vvbph2"}">
                    <span class="${"svelte-vvbph2"}">${escape(tour.price)}</span></div>` : `<div class="${"trip-info blank p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-vvbph2"}">
                    <span class="${"svelte-vvbph2"}">filler</span></div>`}
                ${tour.duration ? `<div class="${"trip-info mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-vvbph2"}">
                    <span class="${"svelte-vvbph2"}">${escape(tour.duration)}</span></div>` : ``}
                ${tour.difficultyRating ? `<div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-vvbph2"}">
                    <span class="${"svelte-vvbph2"}">Level: ${escape(tour.difficulty)}</span>
                    </div>` : ``}</div></div>
        <div class="${"trip-info-container-mobile d-flex d-md-none justify-content-between flex-wrap justify-content-xxl-around mx-3 px-0 svelte-vvbph2"}"><h4 id="${"tour-title-mobile"}" class="${"py-2 col-12 mb-0 svelte-vvbph2"}">${escape(tour.title)}</h4>
            
            
            ${tour.price ? `<div class="${"divider mx-3 svelte-vvbph2"}"></div>
            <div class="${"p-1 px-3 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>${escape(tour.price)}</span></div>
            <div class="${"mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>${escape(tour.duration)}</span></div>
            <div class="${"p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>Difficulty (1-5): ${escape(tour.difficultyRating)}</span></div>` : ``}</div></a>
</div>`;
});
export {
  TourCard as T
};
