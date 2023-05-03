import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
import "../../chunks/splide.min.js";
/* empty css                                                   */import { t as tours } from "../../chunks/tours.js";
const css$1 = {
  code: ".trip-info-container-mobile.svelte-19ercjo.svelte-19ercjo{color:var(--color-primary-dark)}.trip-preview-container.svelte-19ercjo.svelte-19ercjo{overflow:hidden;position:relative;padding:0;z-index:0;text-decoration:none}.trip-preview.svelte-19ercjo.svelte-19ercjo{width:90%;aspect-ratio:1/1;margin-left:5%;margin-right:5%;border-radius:6px;position:relative}.trip-preview-img-container.svelte-19ercjo.svelte-19ercjo{width:100%;height:100%;overflow:hidden;border-radius:6px;position:absolute;top:0;left:0}.trip-preview-img.svelte-19ercjo.svelte-19ercjo{width:100%;height:100%;transition:all var(--animation-duration) ease-in-out;object-fit:cover}.trip-preview.svelte-19ercjo:hover .trip-preview-img.svelte-19ercjo,.trip-preview.svelte-19ercjo:focus .trip-preview-img.svelte-19ercjo{transform:scale(1.10);transition:all var(--animation-duration) ease-in-out;cursor:pointer}.trip-preview-container.svelte-19ercjo h4.svelte-19ercjo{background-color:var(--color-primary);color:var(--color-light);transition:all var(--animation-duration) ease-in-out;z-index:3;position:relative;width:fit-content;font-family:var(--font-hero)}@media(min-width: 768px){.trip-preview-container.svelte-19ercjo h4.svelte-19ercjo{right:1.5vw}.trip-preview.svelte-19ercjo:hover h4.svelte-19ercjo,.trip-preview.svelte-19ercjo:focus h4.svelte-19ercjo{transform:translateX(1.5vw);transition:all var(--animation-duration) ease-in-out}}.trip-info-container.svelte-19ercjo.svelte-19ercjo{transform:translateY(-100%);transition:all var(--animation-duration) ease-in-out;opacity:0;position:relative}.trip-info.svelte-19ercjo.svelte-19ercjo{background-color:var(--color-primary);color:var(--color-light);padding:0.5rem 0.75rem;height:100%}.trip-info.svelte-19ercjo span.svelte-19ercjo{line-height:1rem}.trip-preview.svelte-19ercjo:hover .trip-info-container.svelte-19ercjo,.trip-preview.svelte-19ercjo:focus .trip-info-container.svelte-19ercjo{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}@media(max-width: 768px){.trip-preview.svelte-19ercjo .trip-info-container.svelte-19ercjo{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}}",
  map: null
};
const TourCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tour } = $$props;
  let imgSrc = `./img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
  if ($$props.tour === void 0 && $$bindings.tour && tour !== void 0)
    $$bindings.tour(tour);
  $$result.css.add(css$1);
  return `<div class="${"col-12 col-md-8 col-lg-6 col-xl-4 p-3"}"><a class="${"col-12 trip-preview-container svelte-19ercjo"}"${add_attribute("href", "/tours/" + tour.title, 0)}><div class="${"trip-preview d-flex flex-column justify-content-end py-2 svelte-19ercjo"}"><div class="${"trip-preview-img-container svelte-19ercjo"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", tour.title, 0)} class="${"trip-preview-img svelte-19ercjo"}">
                </div>
            <h4 class="${"px-4 py-2 svelte-19ercjo"}">${escape(tour.title)}</h4>
            <div class="${"trip-info-container d-none d-md-flex justify-content-between justify-content-xxl-around px-3 pb-3 svelte-19ercjo"}"><div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-19ercjo"}">
                    <span class="${"svelte-19ercjo"}">${escape(tour.price)}</span></div>
                <div class="${"trip-info mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-19ercjo"}">
                    <span class="${"svelte-19ercjo"}">${escape(tour.duration)}</span></div>
                <div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-19ercjo"}">
                    ${tour.ebikes ? `<span class="${"svelte-19ercjo"}">E-bikes available</span>` : `<span class="${"svelte-19ercjo"}">E-bikes not available</span>`}</div></div></div>
        <div class="${"trip-info-container-mobile col-12 d-flex d-md-none justify-content-between justify-content-xxl-around px-3 pb-3 svelte-19ercjo"}"><div class="${"p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}">
                <span>${escape(tour.price)}</span></div>
            <div class="${"mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}">
                <span>${escape(tour.duration)}</span></div>
            <div class="${"p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}">
                ${tour.ebikes ? `<span>E-bikes available</span>` : `<span>E-bikes not available</span>`}</div></div></a>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-pqeq2h.svelte-pqeq2h{margin:1rem 0}#hero-tagline-container.svelte-pqeq2h>h1.svelte-pqeq2h{font-family:var(--font-hero);color:var(--color-light);opacity:1}#hero-tagline-container.svelte-pqeq2h a.svelte-pqeq2h{z-index:1}section#tours.svelte-pqeq2h.svelte-pqeq2h{padding:0}.hero-tagline.svelte-pqeq2h.svelte-pqeq2h{text-shadow:2px 2px 4px rgba(0,0,0,0.5);opacity:1}#why-choose-us.svelte-pqeq2h.svelte-pqeq2h{background-color:var(--color-primary);color:var(--color-light)}#why-choose-us.svelte-pqeq2h h2.svelte-pqeq2h{font-family:var(--font-header);font-size:2rem;color:var(--color-light);opacity:1;text-transform:uppercase}#inspirational-section.svelte-pqeq2h.svelte-pqeq2h{background-image:url('$lib/img/hero-3.jpg');background-position:center;background-size:cover}#inspirational-section.svelte-pqeq2h span.svelte-pqeq2h{color:var(--color-light);font-size:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"hero-img"}"></div>
        </div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-5 svelte-pqeq2h"}"><h1 class="${"hero-tagline col-12 mb-4 svelte-pqeq2h"}">Discover the best of Oregon on two wheels.</h1>
        <a href="${"/tours"}" class="${"svelte-pqeq2h"}"><button class="${"btn btn-primary"}">Tours</button></a></div></div>





<section id="${"tours"}" class="${"col-12 my-0 py-5 d-flex justify-content-center px-0 svelte-pqeq2h"}">
    <div class="${"d-flex justify-content-center col-12 px-0 flex-wrap"}">${each(tours, (tour) => {
    return `${tour.featured == true ? `${validate_component(TourCard, "TourCard").$$render($$result, { tour }, {}, {})}` : ``}`;
  })}</div></section>

<section id="${"why-choose-us"}" class="${"col-12 d-flex justify-content-center py-5 mb-0 svelte-pqeq2h"}"><div class="${"col-12 col-md-10 d-flex justify-content-between flex-wrap"}"><h2 class="${"col-12 text-left svelte-pqeq2h"}">Why book with us</h2>
        <div class="${"col-12 col-md-3"}"><h4>Locally Based</h4>
            <p>Oregon Bicycle Adventures is proudly locally based out of Bend Oregon. As lifelong Oregonians, We have decades of experience exploring the hidden gems of Oregon. Our insider knowledge of the state allows us to create unique and unforgettable experiences that showcase the best of what Oregon has to offer.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Small Groups</h4>
            <p>At Oregon Bicycle Adventures, we believe that smaller is better. We keep our group sizes intentionally small, with a maximum of 5 riders per guide. This allows us to provide a more personalized experience, catered to the needs and interests of each individual rider.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Expert Guidance</h4>
            <p>With experience in guiding, outdoor coaching, and multi-month bicycle tours, we are experts in the field of bicycle touring. From route planning to bike maintenance, we provide the guidance and support needed to ensure that every trip is safe, enjoyable, and memorable.</p></div></div></section>

<section id="${"inspirational-section"}" class="${"col-12 vh-40 d-flex justify-content-start align-items-end mt-0 mb-0 py-sm-5 py-2 svelte-pqeq2h"}">
    <div class="${"col-12 col-md-10"}"><span class="${"font-hero svelte-pqeq2h"}">&quot;Four wheels move the body, two wheels move the soul&quot;</span></div></section>

`;
});
export {
  Page as default
};
