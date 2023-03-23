import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
/* empty css                                                   */import { t as tours } from "../../chunks/tours.js";
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const splide_min = "";
const css$1 = {
  code: ".trip-preview-container.svelte-1c5fjor.svelte-1c5fjor{overflow:hidden;position:relative;padding:0;z-index:0;text-decoration:none}.trip-preview.svelte-1c5fjor.svelte-1c5fjor{width:90%;aspect-ratio:1/1;margin-left:5%;margin-right:5%;border-radius:6px;position:relative}.trip-preview-img-container.svelte-1c5fjor.svelte-1c5fjor{width:100%;height:100%;overflow:hidden;border-radius:6px;position:absolute;top:0;left:0}.trip-preview-img.svelte-1c5fjor.svelte-1c5fjor{width:100%;height:100%;transition:all var(--animation-duration) ease-in-out;object-fit:cover}.trip-preview.svelte-1c5fjor:hover .trip-preview-img.svelte-1c5fjor,.trip-preview.svelte-1c5fjor:focus .trip-preview-img.svelte-1c5fjor{transform:scale(1.10);transition:all var(--animation-duration) ease-in-out;cursor:pointer}.trip-preview-container.svelte-1c5fjor h4.svelte-1c5fjor{background-color:var(--color-primary);color:var(--color-light);transition:all var(--animation-duration) ease-in-out;z-index:3;position:relative;right:1.5vw;width:fit-content;font-family:var(--font-hero)}.trip-info-container.svelte-1c5fjor.svelte-1c5fjor{transform:translateY(-100%);transition:all var(--animation-duration) ease-in-out;opacity:0;position:relative}.trip-info.svelte-1c5fjor.svelte-1c5fjor{background-color:var(--color-primary);color:var(--color-light);padding:0.5rem 0.75rem;height:100%}.trip-info.svelte-1c5fjor span.svelte-1c5fjor{line-height:1rem}.trip-preview.svelte-1c5fjor:hover .trip-info-container.svelte-1c5fjor,.trip-preview.svelte-1c5fjor:focus .trip-info-container.svelte-1c5fjor{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}.trip-preview.svelte-1c5fjor:hover h4.svelte-1c5fjor,.trip-preview.svelte-1c5fjor:focus h4.svelte-1c5fjor{transform:translateX(1.5vw);transition:all var(--animation-duration) ease-in-out}",
  map: null
};
const TourCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tour } = $$props;
  let imgSrc = `./img/tours/${tour.id}. ${tour.title}/tour${tour.id}-cover.jpg`;
  if ($$props.tour === void 0 && $$bindings.tour && tour !== void 0)
    $$bindings.tour(tour);
  $$result.css.add(css$1);
  return `<div class="${"col-12 col-lg-4 p-3"}"><a class="${"col-12 trip-preview-container svelte-1c5fjor"}"${add_attribute("href", "/tours/" + tour.title, 0)}><div class="${"trip-preview d-flex flex-column justify-content-end py-2 svelte-1c5fjor"}"><div class="${"trip-preview-img-container svelte-1c5fjor"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", tour.title, 0)} class="${"trip-preview-img svelte-1c5fjor"}">
                </div>
            <h4 class="${"px-4 py-2 svelte-1c5fjor"}">${escape(tour.title)}</h4>
            <div class="${"trip-info-container d-flex justify-content-between justify-content-xxl-around px-3 pb-3 svelte-1c5fjor"}"><div class="${"trip-info p-1 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1c5fjor"}">
                    <span class="${"svelte-1c5fjor"}">${escape(tour.duration)}</span></div>
                <div class="${"trip-info mx-1 p-1 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1c5fjor"}">
                    <span class="${"svelte-1c5fjor"}">${escape(tour.difficulty)}</span></div>
                <div class="${"trip-info p-1 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1c5fjor"}">
                    ${tour.ebikes ? `<span class="${"svelte-1c5fjor"}">E-bikes available</span>` : `<span class="${"svelte-1c5fjor"}">E-bikes not available</span>`}</div></div></div></a>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1afbk0a.svelte-1afbk0a{margin:1rem 0}#hero-tagline-container.svelte-1afbk0a>h1.svelte-1afbk0a{font-family:var(--font-hero);color:var(--color-light);opacity:1}#hero-tagline-container.svelte-1afbk0a>.btn.svelte-1afbk0a{z-index:1}section#tours.svelte-1afbk0a.svelte-1afbk0a{padding:0}.hero-tagline.svelte-1afbk0a.svelte-1afbk0a{text-shadow:2px 2px 4px rgba(0,0,0,0.5);opacity:1}#why-choose-us.svelte-1afbk0a.svelte-1afbk0a{background-color:var(--color-primary);color:var(--color-light)}#why-choose-us.svelte-1afbk0a h2.svelte-1afbk0a{font-family:var(--font-header);font-size:2rem;color:var(--color-light);opacity:1;text-transform:uppercase}#inspirational-section.svelte-1afbk0a.svelte-1afbk0a{background-image:url('$lib/img/hero-3.jpg');background-position:center;background-size:cover}#inspirational-section.svelte-1afbk0a span.svelte-1afbk0a{color:var(--color-light);font-size:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><img class="${"hero-img img"}" src="${"./img/hero-2.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-5 svelte-1afbk0a"}"><h1 class="${"hero-tagline col-12 mb-4 svelte-1afbk0a"}">Discover the best of Oregon on two wheels.</h1>
        <button class="${"btn btn-primary svelte-1afbk0a"}">Tours</button></div></div>








<section id="${"tours"}" class="${"col-12 my-0 svelte-1afbk0a"}"><div class="${"px-0"}">
        <div class="${"d-flex justify-content-center col-12 px-0 flex-wrap"}">${each(tours, (tour) => {
    return `${tour.featured == true ? `${validate_component(TourCard, "TourCard").$$render($$result, { tour }, {}, {})}` : ``}`;
  })}</div></div></section>

<section id="${"why-choose-us"}" class="${"col-12 d-flex justify-content-center py-5 mb-0 svelte-1afbk0a"}"><div class="${"col-12 col-md-10 d-flex justify-content-between flex-wrap"}"><h2 class="${"col-12 text-left svelte-1afbk0a"}">Why book with us</h2>
        <div class="${"col-12 col-md-3"}"><h4>Locally Based</h4>
            <p>Oregon Bicycle Adventures is proudly locally based out of Bend Oregon. As lifelong Oregonians, We have decades of experience exploring the hidden gems of Oregon. Our insider knowledge of the state allows us to create unique and unforgettable experiences that showcase the best of what Oregon has to offer.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Small Groups</h4>
            <p>At Oregon Bicycle Adventures, we believe that smaller is better. We keep our group sizes intentionally small, with a maximum of 5 riders per guide. This allows us to provide a more personalized experience, catered to the needs and interests of each individual rider.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Expert Guidance</h4>
            <p>With experience in guiding, outdoor coaching, and even bicycling across the USA, we are experts in the field of bicycle touring. From route planning to bike maintenance, we provide the guidance and support needed to ensure that every trip is safe, enjoyable, and memorable.</p></div></div></section>

<section id="${"inspirational-section"}" class="${"col-12 vh-40 d-flex justify-content-start align-items-end mt-0 mb-0 py-sm-5 py-2 svelte-1afbk0a"}">
    <div class="${"col-12 col-md-10"}"><span class="${"font-hero svelte-1afbk0a"}">&quot;Four wheels moves the body, two wheels moves the soul&quot;</span></div></section>

`;
});
export {
  Page as default
};
