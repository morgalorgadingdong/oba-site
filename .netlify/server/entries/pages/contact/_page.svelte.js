import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const ContactCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1f9ydaj{list-style:none}#submissionForm.svelte-1f9ydaj{max-width:600px}#submissionForm.svelte-1f9ydaj{margin-bottom:25px}.fields.svelte-1f9ydaj{width:100%}.field.svelte-1f9ydaj{padding:10px 5px;width:100%}#name.svelte-1f9ydaj{width:100%}#tel.svelte-1f9ydaj,#email.svelte-1f9ydaj{width:100%}#telContainer.svelte-1f9ydaj,#emailContainer.svelte-1f9ydaj{width:50%}#message.svelte-1f9ydaj{width:100%}input.svelte-1f9ydaj{width:100%;flex-grow:2;line-height:1.5rem}",
  map: null
};
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form id="${"submissionForm"}" class="${"d-flex justify-content-center flex-wrap col-12 col-md-6 svelte-1f9ydaj"}" name="${"netlify-form-example"}" method="${"POST"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}"><input type="${"hidden"}" name="${"form-name"}" value="${"netlify-form-example"}" class="${"svelte-1f9ydaj"}">
    <div class="${"fields d-flex justify-content-center flex-wrap svelte-1f9ydaj"}"><div class="${"field col-12 svelte-1f9ydaj"}"><label for="${"name"}">Name</label>
            <input type="${"text"}" name="${"name"}" id="${"name"}" required class="${"svelte-1f9ydaj"}"></div>
        <div id="${"emailContainer"}" class="${"field col-6 svelte-1f9ydaj"}"><label for="${"email"}" class="${"col-12"}">Email</label><br>
            <input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-1f9ydaj"}"></div>
        <div id="${"telContainer"}" class="${"field col-6 svelte-1f9ydaj"}"><label for="${"tel"}">Phone Number</label><br>
            <input type="${"tel"}" name="${"tel"}" id="${"tel"}" class="${"svelte-1f9ydaj"}"></div>
        <div class="${"field svelte-1f9ydaj"}"><label for="${"message"}">Message</label>
            <textarea name="${"message"}" id="${"message"}" rows="${"5"}" class="${"svelte-1f9ydaj"}"></textarea></div></div>
    <ul class="${"actions col-12 d-flex justify-content-center px-0 svelte-1f9ydaj"}"><li><input type="${"submit"}" value="${"Submit"}" class="${"col-12 svelte-1f9ydaj"}" id="${"submitbtn"}"></li></ul>
</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img"}" src="${"./img/contact.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Contact</h1></div></div>

<section><div class="${"content-container d-flex justify-content-center flex-wrap center text-start px-3"}" id="${"reserveForm"}"><div class="${"col-12 col-md-6 pt-5"}"><p class="${"col-12"}">Phone: (503) 949-8766</p>
            <p class="${"col-12"}">Email: info@oregonbicycleadventures.com</p>
            <p class="${"col-12"}">Or you can use the form on this page and we&#39;ll get back to you within 24 hours!</p></div>
        
        <br>
        ${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
