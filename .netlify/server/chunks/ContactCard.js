import { c as create_ssr_component } from "./index.js";
const ContactCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1f9ydaj{list-style:none}#submissionForm.svelte-1f9ydaj{max-width:600px}#submissionForm.svelte-1f9ydaj{margin-bottom:25px}.fields.svelte-1f9ydaj{width:100%}.field.svelte-1f9ydaj{padding:10px 5px;width:100%}#name.svelte-1f9ydaj{width:100%}#tel.svelte-1f9ydaj,#email.svelte-1f9ydaj{width:100%}#telContainer.svelte-1f9ydaj,#emailContainer.svelte-1f9ydaj{width:50%}#message.svelte-1f9ydaj{width:100%}input.svelte-1f9ydaj{width:100%;flex-grow:2;line-height:1.5rem}",
  map: null
};
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form id="${"submissionForm"}" class="${"d-flex justify-content-center flex-wrap col-12 mb-0 svelte-1f9ydaj"}" name="${"netlify-form-example"}" method="${"POST"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}"><input type="${"hidden"}" name="${"form-name"}" value="${"netlify-form-example"}" class="${"svelte-1f9ydaj"}">
    <div class="${"fields d-flex justify-content-center flex-wrap svelte-1f9ydaj"}"><div class="${"field col-12 svelte-1f9ydaj"}"><label for="${"name"}">Name</label>
            <input type="${"text"}" name="${"name"}" id="${"name"}" required class="${"svelte-1f9ydaj"}"></div>
        <div id="${"emailContainer"}" class="${"field col-6 svelte-1f9ydaj"}"><label for="${"email"}">Email</label><br>
            <input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-1f9ydaj"}"></div>
        <div id="${"telContainer"}" class="${"field col-6 svelte-1f9ydaj"}"><label for="${"tel"}">Phone Number</label><br>
            <input type="${"tel"}" name="${"tel"}" id="${"tel"}" class="${"svelte-1f9ydaj"}"></div>
        <div class="${"field svelte-1f9ydaj"}"><label for="${"message"}">Message</label>
            <textarea name="${"message"}" id="${"message"}" rows="${"5"}" class="${"svelte-1f9ydaj"}"></textarea></div></div>
    <ul class="${"actions col-12 d-flex justify-content-center px-0 svelte-1f9ydaj"}"><li><input type="${"submit"}" value="${"Submit"}" class="${"col-12 svelte-1f9ydaj"}" id="${"submitbtn"}"></li></ul>
</form>`;
});
export {
  ContactCard as C
};
