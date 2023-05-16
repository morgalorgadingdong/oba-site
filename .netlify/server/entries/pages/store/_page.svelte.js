import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../../chunks/index.js";
import { i as items } from "../../../chunks/store-items.js";
const StoreItemCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-kesc64.svelte-kesc64{text-decoration:none;color:black}.card.svelte-kesc64.svelte-kesc64{margin:1rem}.card-body.svelte-kesc64.svelte-kesc64{padding:0}.card-img-top.svelte-kesc64.svelte-kesc64{width:100%;height:15rem;padding:0;background-size:cover;background-position:center;border-bottom:solid 4px var(--color-primary)}.card-img-top.svelte-kesc64>img.svelte-kesc64{width:100%;height:100%;object-fit:cover;margin:0}",
  map: null
};
const StoreItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<a${add_attribute("href", "./store/" + item.itemData.name, 0)} class="${"col-12 col-md-5 my-3 svelte-kesc64"}" data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 card mx-0 px-0 svelte-kesc64"}"><div class="${"card-body svelte-kesc64"}"><div class="${"card-img-top svelte-kesc64"}"><img${add_attribute("src", item.itemData.imgURL[0], 0)} class="${"svelte-kesc64"}">
                
                
                </div>
            </div></div>
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img"}" src="${"./img/blog.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Store</h1></div></div>
<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><div class="${"col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(items, (item) => {
    return `${validate_component(StoreItemCard, "StoreItemCard").$$render($$result, { item }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
