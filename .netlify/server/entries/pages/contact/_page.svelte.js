import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const ContactCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "#submissionForm.svelte-w7t81{max-width:600px}#submissionForm.svelte-w7t81{margin-bottom:25px}.fields.svelte-w7t81{width:100%}.field.svelte-w7t81{padding:10px 5px;width:100%}#name.svelte-w7t81{width:100%}#tel.svelte-w7t81,#email.svelte-w7t81{width:100%}#telContainer.svelte-w7t81,#emailContainer.svelte-w7t81{width:50%}#message.svelte-w7t81{width:100%}input.svelte-w7t81{width:100%;flex-grow:2;line-height:1.5rem}",
  map: null
};
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form id="${"submissionForm"}" class="${"d-flex justify-content-center flexWrap col-12 col-md-6 svelte-w7t81"}" name="${"netlify-form-example"}" method="${"POST"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}"><input type="${"hidden"}" name="${"form-name"}" value="${"netlify-form-example"}" class="${"svelte-w7t81"}">
    <div class="${"fields d-flex justify-content-center flexWrap svelte-w7t81"}"><div class="${"field col-12 svelte-w7t81"}"><label for="${"name"}">Name</label>
            <input type="${"text"}" name="${"name"}" id="${"name"}" required class="${"svelte-w7t81"}"></div>
        <div id="${"emailContainer"}" class="${"field col-6 svelte-w7t81"}"><label for="${"email"}" class="${"col-12"}">Email</label><br>
            <input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-w7t81"}"></div>
        <div id="${"telContainer"}" class="${"field col-6 svelte-w7t81"}"><label for="${"tel"}">Phone Number</label><br>
            <input type="${"tel"}" name="${"tel"}" id="${"tel"}" class="${"svelte-w7t81"}"></div>
        <div class="${"field svelte-w7t81"}"><label for="${"message"}">Message</label>
            <textarea name="${"message"}" id="${"message"}" rows="${"5"}" class="${"svelte-w7t81"}"></textarea></div></div>
    <ul class="${"actions col-12 d-flex justify-content-center px-0"}"><li><input type="${"submit"}" value="${"Submit"}" class="${"col-12 svelte-w7t81"}" id="${"submitbtn"}"></li></ul>
</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><img class="${"hero-img img"}" src="${"./img/contact.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Contact</h1></div></div>

<section><div class="${"content-container d-flex justify-content-center flex-wrap center text-start px-3"}" id="${"reserveForm"}"><div class="${"col-12 col-md-6"}"><p class="${"col-12"}">Phone: (503) 949-8766</p>
            <p class="${"col-12"}">Email: info@oregonbicycleadventures.com</p>
            <p class="${"col-12"}">Or you can use the form on this page and we&#39;ll get back to you within 24 hours!</p></div>
        
        <br>
        ${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
