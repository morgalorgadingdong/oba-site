import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
import "../../chunks/splide.min.js";
/* empty css                                                   */import { t as tours } from "../../chunks/tours.js";
const css$1 = {
  code: ".divider.svelte-1kgkozj.svelte-1kgkozj{width:100%;height:1px;background-color:lightgray}.trip-info-container-mobile.svelte-1kgkozj.svelte-1kgkozj{color:var(--color-primary-dark);border-radius:0 0 6px 6px;border:solid 2px lightgray;border-top:none}.trip-preview-container.svelte-1kgkozj.svelte-1kgkozj{overflow:hidden;position:relative;padding:0;z-index:0;text-decoration:none}.trip-preview.svelte-1kgkozj.svelte-1kgkozj{aspect-ratio:1/1;border-radius:6px;position:relative}.trip-preview-img-container.svelte-1kgkozj.svelte-1kgkozj{width:100%;height:100%;overflow:hidden;border-radius:6px;position:absolute;top:0;left:0}.trip-preview-img.svelte-1kgkozj.svelte-1kgkozj{width:100%;height:100%;transition:all var(--animation-duration) ease-in-out;object-fit:cover}.trip-preview.svelte-1kgkozj:hover .trip-preview-img.svelte-1kgkozj,.trip-preview.svelte-1kgkozj:focus .trip-preview-img.svelte-1kgkozj{transform:scale(1.10);transition:all var(--animation-duration) ease-in-out;cursor:pointer}.trip-preview-container.svelte-1kgkozj h4.svelte-1kgkozj{transition:all var(--animation-duration) ease-in-out;z-index:3;position:relative;width:fit-content;font-family:var(--font-header)}#tour-title-desktop.svelte-1kgkozj.svelte-1kgkozj{background-color:var(--color-primary);color:var(--color-light)}@media(min-width: 768px){.trip-preview-container.svelte-1kgkozj h4.svelte-1kgkozj{right:1.5vw}.trip-preview.svelte-1kgkozj:hover h4.svelte-1kgkozj,.trip-preview.svelte-1kgkozj:focus h4.svelte-1kgkozj{transform:translateX(1.5vw);transition:all var(--animation-duration) ease-in-out}#tour-title-mobile.svelte-1kgkozj.svelte-1kgkozj{display:none}}.trip-info-container.svelte-1kgkozj.svelte-1kgkozj{transform:translateY(-100%);transition:all var(--animation-duration) ease-in-out;opacity:0;position:relative}.trip-info.svelte-1kgkozj.svelte-1kgkozj{background-color:var(--color-primary);color:var(--color-light);padding:0.5rem 0.75rem;height:100%}.trip-info.svelte-1kgkozj span.svelte-1kgkozj{line-height:1rem}.trip-preview.svelte-1kgkozj:hover .trip-info-container.svelte-1kgkozj,.trip-preview.svelte-1kgkozj:focus .trip-info-container.svelte-1kgkozj{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}@media(max-width: 768px){.trip-preview.svelte-1kgkozj .trip-info-container.svelte-1kgkozj{transform:translateY(0%);transition:all var(--animation-duration) ease-in-out;opacity:1}#tour-title-desktop.svelte-1kgkozj.svelte-1kgkozj{display:none}.trip-preview-img-container.svelte-1kgkozj.svelte-1kgkozj{border-radius:6px 6px 0 0;border-bottom:solid 5px var(--color-primary)}}",
  map: null
};
const TourCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tour } = $$props;
  let imgSrc = `./img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
  if ($$props.tour === void 0 && $$bindings.tour && tour !== void 0)
    $$bindings.tour(tour);
  $$result.css.add(css$1);
  return `<div class="${"col-12 col-md-8 col-lg-6 col-xl-4 p-3"}"><a class="${"col-12 trip-preview-container svelte-1kgkozj"}"${add_attribute("href", "/tours/" + tour.title, 0)}><div class="${"trip-preview d-flex flex-column justify-content-end py-0 mx-3 svelte-1kgkozj"}"><div class="${"trip-preview-img-container svelte-1kgkozj"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", tour.title, 0)} class="${"trip-preview-img svelte-1kgkozj"}">
                </div>
            <h4 id="${"tour-title-desktop"}" class="${"px-4 py-2 svelte-1kgkozj"}">${escape(tour.title)}</h4>
            <div class="${"trip-info-container d-none d-md-flex justify-content-start justify-content-xxl-around px-3 pb-3 svelte-1kgkozj"}"><div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1kgkozj"}">
                    <span class="${"svelte-1kgkozj"}">${escape(tour.price)}</span></div>
                <div class="${"trip-info mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1kgkozj"}">
                    <span class="${"svelte-1kgkozj"}">${escape(tour.duration)}</span></div>
                <div class="${"trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center svelte-1kgkozj"}">
                    <span class="${"svelte-1kgkozj"}">Difficulty (1-5): ${escape(tour.difficultyRating)}</span>
                    </div></div></div>
        <div class="${"trip-info-container-mobile d-flex d-md-none justify-content-between flex-wrap justify-content-xxl-around mx-3 px-0 svelte-1kgkozj"}"><h4 id="${"tour-title-mobile"}" class="${"py-2 col-12 mb-0 svelte-1kgkozj"}">${escape(tour.title)}</h4>
            
            <div class="${"divider mx-3 svelte-1kgkozj"}"></div>
            <div class="${"p-1 px-3 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>${escape(tour.price)}</span></div>
            <div class="${"mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>${escape(tour.duration)}</span></div>
            <div class="${"p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center"}"><span>Difficulty (1-5): ${escape(tour.difficultyRating)}</span></div></div></a>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1ucf1of.svelte-1ucf1of{margin:1rem 0}#hero-tagline-container.svelte-1ucf1of>h1.svelte-1ucf1of{font-family:var(--font-hero);color:var(--color-light);opacity:1}#hero-tagline-container.svelte-1ucf1of a.svelte-1ucf1of{z-index:1}section#tours.svelte-1ucf1of.svelte-1ucf1of{padding:0}.hero-tagline.svelte-1ucf1of.svelte-1ucf1of{text-shadow:2px 2px 4px rgba(0,0,0,0.5);opacity:1}#why-choose-us.svelte-1ucf1of.svelte-1ucf1of{background-color:var(--color-background);color:var(--color-light)}#why-choose-us.svelte-1ucf1of h2.svelte-1ucf1of{font-family:var(--font-header);font-size:2rem;color:var(--color-light);opacity:1;text-transform:uppercase}#inspirational-section.svelte-1ucf1of.svelte-1ucf1of{background-image:url('$lib/img/hero-3.jpg');background-position:center;background-size:cover}#inspirational-section.svelte-1ucf1of span.svelte-1ucf1of{color:var(--color-light);font-size:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"hero-img"}"></div>
        </div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-5 svelte-1ucf1of"}"><h1 class="${"hero-tagline col-12 mb-4 svelte-1ucf1of"}">Discover the best of Oregon on two wheels.</h1>
        <a href="${"/tours"}" class="${"svelte-1ucf1of"}"><button class="${"btn btn-primary"}">Tours</button></a></div></div>





<section id="${"tours"}" class="${"col-12 my-0 py-5 d-flex justify-content-center px-0 svelte-1ucf1of"}">
    <div class="${"d-flex justify-content-center col-12 px-0 flex-wrap"}">${each(tours, (tour) => {
    return `${tour.featured == true ? `${validate_component(TourCard, "TourCard").$$render($$result, { tour }, {}, {})}` : ``}`;
  })}</div></section>

<section id="${"why-choose-us"}" class="${"col-12 d-flex justify-content-center py-5 mb-0 svelte-1ucf1of"}"><div class="${"col-12 col-md-10 d-flex justify-content-between flex-wrap"}"><h2 class="${"col-12 text-left svelte-1ucf1of"}">Why book with us</h2>
        <div class="${"col-12 col-md-3"}"><h4>Locally Based</h4>
            <p>Oregon Bicycle Adventures is proudly locally based out of Bend, Oregon. As lifelong Oregonians, We have decades of experience exploring the hidden gems of Oregon. Our insider knowledge of the state allows us to create unique and unforgettable experiences that showcase the best of what Oregon has to offer.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Small Groups</h4>
            <p>At Oregon Bicycle Adventures, we believe that smaller is better. We keep our group sizes intentionally small, with a maximum of 5 riders per guide. This allows us to provide a more personalized experience, catered to the needs and interests of each individual rider.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Expert Guidance</h4>
            <p>With experience in guiding, outdoor coaching, and multi-month bicycle tours, we are experts in the field of bicycle touring. From route planning to bike maintenance, we provide the guidance and support needed to ensure that every trip is safe, enjoyable, and memorable.</p></div></div></section>

<section id="${"inspirational-section"}" class="${"col-12 vh-40 d-flex justify-content-start align-items-end mt-0 mb-0 py-sm-5 py-2 svelte-1ucf1of"}">
    <div class="${"col-12 col-md-10"}"><span class="${"font-hero svelte-1ucf1of"}">&quot;Four wheels move the body, two wheels move the soul&quot;</span></div></section>

`;
});
export {
  Page as default
};
