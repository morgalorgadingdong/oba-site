import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/splide.min.js";
import { T as TourCard } from "../../chunks/TourCard.js";
import { t as tours } from "../../chunks/tours.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#hero-tagline-container.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{padding-top:15rem !important}section.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{margin:1rem 0}.hero-img.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{position:fixed}.parralax-container.svelte-17akdxt>.hero.svelte-17akdxt>.img-container.svelte-17akdxt{background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))}#hero-tagline-container.svelte-17akdxt>h1.svelte-17akdxt.svelte-17akdxt{font-family:var(--font-hero);color:var(--color-light);opacity:1}#hero-tagline-container.svelte-17akdxt a.svelte-17akdxt.svelte-17akdxt{z-index:1}section#tours.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{padding:0;background-color:white}.hero-tagline.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{text-shadow:2px 2px 4px rgba(0,0,0,0.5);opacity:1}#why-choose-us.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{background-color:var(--color-background);color:var(--color-light)}#why-choose-us.svelte-17akdxt h2.svelte-17akdxt.svelte-17akdxt{font-family:var(--font-header);font-size:2rem;color:var(--color-light);opacity:1;text-transform:uppercase}#inspirational-section.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{background-image:url('$lib/img/hero-3.jpg');background-position:center;background-size:cover}#inspirational-section.svelte-17akdxt span.svelte-17akdxt.svelte-17akdxt{color:var(--color-light);font-size:40px}@media(max-width: 576px){h1.svelte-17akdxt.svelte-17akdxt.svelte-17akdxt{text-align:left}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"parralax-container svelte-17akdxt"}"><div class="${"hero col-12 d-flex flex-column justify-content-center svelte-17akdxt"}"><div class="${"img-container svelte-17akdxt"}"><div class="${"hero-img svelte-17akdxt"}"></div>
            </div>
        <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-start justify-content-sm-center flex-wrap p-3 pb-5 svelte-17akdxt"}"><h1 class="${"hero-tagline col-12 mb-4 svelte-17akdxt"}">Discover the best of Oregon on two wheels.</h1>
            <a href="${"/tours"}" class="${"svelte-17akdxt"}"><button class="${"btn btn-primary"}">Tours</button></a></div></div></div>





<section id="${"tours"}" class="${"col-12 my-0 py-5 d-flex justify-content-center px-0 flex-wrap svelte-17akdxt"}">
    <div class="${"d-flex justify-content-center justify-content-xl-start col-12 px-0 flex-wrap"}">${each(tours, (tour) => {
    return `${tour.featured == true ? `${validate_component(TourCard, "TourCard").$$render($$result, { tour }, {}, {})}` : ``}`;
  })}</div>
    <a href="${"/tours"}" class="${"mt-5"}"><button class="${"btn btn-primary"}">All Tours</button></a></section>

<section id="${"why-choose-us"}" class="${"col-12 d-flex justify-content-center py-5 my-0 svelte-17akdxt"}"><div class="${"col-12 col-md-10 d-flex justify-content-between flex-wrap"}"><h2 class="${"col-12 text-left svelte-17akdxt"}">Why book with us</h2>
        <div class="${"col-12 col-md-3"}"><h4>Locally Based</h4>
            <p>Oregon Bicycle Adventures is proudly locally based out of Bend, Oregon. As lifelong Oregonians, We have decades of experience exploring the hidden gems of Oregon. Our insider knowledge of the state allows us to create unique and unforgettable experiences that showcase the best of what Oregon has to offer.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Small Groups</h4>
            <p>At Oregon Bicycle Adventures, we believe that smaller is better. We keep our group sizes intentionally small, with a maximum of 4 riders per guide. This allows us to provide a more personalized experience, catered to the needs and interests of each individual rider.</p></div>
        <div class="${"col-12 col-md-3"}"><h4>Expert Guidance</h4>
            <p>With experience in guiding, outdoor coaching, and multi-month bicycle tours, we are experts in the field of bicycle touring. From route planning to bike maintenance, we provide the guidance and support needed to ensure that every trip is safe, enjoyable, and memorable.</p></div></div></section>

<section id="${"inspirational-section"}" class="${"col-12 vh-40 d-flex justify-content-start align-items-end mt-0 mb-0 py-sm-5 py-2 svelte-17akdxt"}">
    <div class="${"col-12 col-md-10"}"><span class="${"font-hero svelte-17akdxt"}">&quot;Four wheels move the body, two wheels move the soul&quot;</span></div></section>

`;
});
export {
  Page as default
};
