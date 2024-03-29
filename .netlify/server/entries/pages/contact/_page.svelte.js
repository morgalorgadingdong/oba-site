import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { C as ContactCard } from "../../../chunks/ContactCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero hero-sub col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"img"}" src="${"./img/contact.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Contact</h1></div></div>

<section><div class="${"content-container d-flex justify-content-center flex-wrap center text-start px-3 mb-5"}" id="${"reserveForm"}"><div class="${"col-12 col-md-6 pt-5 px-0"}"><p class="${"col-12 px-0"}">Phone: (360) 483-7042</p>
            <p class="${"col-12 px-0"}">Email: morgan@oregonbicycleadventures.com</p>
            <p class="${"col-12 px-0"}">Or you can use the form on this page and we&#39;ll get back to you within 24 hours!</p></div>
        
        <br>
        ${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
