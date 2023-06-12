import { c as create_ssr_component, h as createEventDispatcher, e as escape, v as validate_component, d as add_attribute, f as each } from "../../../chunks/index.js";
import { i as items } from "../../../chunks/store-items.js";
const ItemModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal.svelte-442pxe{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.modal-content.svelte-442pxe{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close.svelte-442pxe{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close.svelte-442pxe:hover,.close.svelte-442pxe:focus{color:#000;text-decoration:none;cursor:pointer}",
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
  return `${isOpen ? `<div class="${"modal svelte-442pxe"}"><div class="${"modal-content svelte-442pxe"}"><span class="${"close svelte-442pxe"}">×</span>
        <h2>${escape(title)}</h2>
        <p>${escape(content)}</p></div></div>` : ``}`;
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
        content: item.itemData.description,
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
<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><h2 class="${"col-12 text-center"}">Coming Soon!</h2>
    <div class="${"col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(items, (item) => {
    return `${validate_component(StoreItemCard, "StoreItemCard").$$render($$result, { item }, {}, {})}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
