import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/index2.js";
import { i as items } from "../../../chunks/store-items.js";
import { r as readable } from "../../../chunks/index.js";
readable(items);
const ItemModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-vjzasf{object-fit:contain}span.svelte-vjzasf{z-index:10;position:absolute;top:0;left:0}.modal.svelte-vjzasf{display:flex;position:fixed;z-index:1;left:0;top:0;width:100vw;height:100vh;overflow:auto;background-color:rgba(0,0,0,0.4);padding:2% 0}.modal-content.svelte-vjzasf{background-color:#fefefe;padding:20px;border:1px solid #888;height:fit-content}.close.svelte-vjzasf{color:black;font-size:28px;font-weight:bold}.close.svelte-vjzasf:hover,.close.svelte-vjzasf:focus{color:#000;text-decoration:none;cursor:pointer}@media(max-width: 768px){.modal.svelte-vjzasf{padding:0%;border-radius:0;border:none}.modal-content.svelte-vjzasf{width:100%;min-height:100%;overflow-y:scroll}span.svelte-vjzasf{position:fixed;top:0;left:2%}}",
  map: null
};
const ItemModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { isOpen = false } = $$props;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  return `${isOpen ? `<div class="${"modal justify-content-center svelte-vjzasf"}"><div class="${"modal-content col-12 col-md-10 col-lg-8 svelte-vjzasf"}"><div class="${"col-12 d-flex justify-content-start flex-wrap px-0"}"><span class="${"close svelte-vjzasf"}">×</span>
          <div class="${"d-flex align-items-center px-0 col-12 col-xl-3"}"><img${add_attribute("src", content.itemData.imgURL[0], 0)} class="${"img svelte-vjzasf"}"></div>
          
          <div class="${"col-12 col-xl-9 px-0"}"><h2>${escape(title)}</h2>
            <div class="${"tour-divider col-12 mt-1 mb-3"}"></div>
            <!-- HTML_TAG_START -->${content.itemData.descriptionHtml}<!-- HTML_TAG_END -->
            
            <div class="${"col-12 d-flex justify-content-center mt-4"}"><a href="${"https://square.link/u/FM5ymk6E"}" target="${"_blank"}" rel="${"noreferrer"}"><button class="${"btn"}">Purchase</button></a></div></div></div></div></div>` : ``}`;
});
const StoreItemCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-22fhd3.svelte-22fhd3{margin:1rem}.card-body.svelte-22fhd3.svelte-22fhd3{padding:0}.card-img-top.svelte-22fhd3.svelte-22fhd3{width:100%;height:15rem;padding:0;background-size:cover;background-position:center}.card-img-top.svelte-22fhd3>img.svelte-22fhd3{width:100%;height:100%;object-fit:cover;margin:0}.card-body.svelte-22fhd3.svelte-22fhd3:hover{cursor:pointer}",
  map: null
};
const StoreItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let price = item.itemData.variations[0].itemVariationData.priceMoney.amount;
  price = Number(price.slice(0, -1)) / 100;
  let isModalOpen = false;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(ItemModal, "Modal").$$render(
      $$result,
      {
        title: item.itemData.name,
        content: item,
        isOpen: isModalOpen
      },
      {
        isOpen: ($$value) => {
          isModalOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}


<div data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 card mx-0 px-0 svelte-22fhd3"}"><div class="${"card-body svelte-22fhd3"}"><div class="${"card-img-top svelte-22fhd3"}"><img${add_attribute("src", item.itemData.imgURL[0], 0)} class="${"svelte-22fhd3"}">
                
                
                </div>
            <div class="${"col-12 d-flex justify-content-between"}"><p>${escape(item.itemData.name)}</p>
                <p>$ ${escape(price)}</p></div>
            </div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero hero-sub col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img"}" src="${"./img/hero-2.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Store</h1></div></div>
<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><div class="${"col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(items, (item) => {
    return `${validate_component(StoreItemCard, "StoreItemCard").$$render($$result, { item }, {}, {})}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
