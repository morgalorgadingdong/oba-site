import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/index3.js";
const StoreItemCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-22fhd3.svelte-22fhd3{text-decoration:none;color:black}.card.svelte-22fhd3.svelte-22fhd3{margin:1rem}.card-body.svelte-22fhd3.svelte-22fhd3{padding:0}.card-img-top.svelte-22fhd3.svelte-22fhd3{width:100%;height:15rem;padding:0;background-size:cover;background-position:center}.card-img-top.svelte-22fhd3>img.svelte-22fhd3{width:100%;height:100%;object-fit:cover;margin:0}.card-body.svelte-22fhd3.svelte-22fhd3:hover{cursor:pointer}",
  map: null
};
const StoreItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  console.log(item);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<a${add_attribute("href", "./store/" + item.name, 0)} data-sveltekit-preload-data="${"hover"}" class="${"svelte-22fhd3"}"><div class="${"col-12 card mx-0 px-0 svelte-22fhd3"}"><div class="${"card-body svelte-22fhd3"}"><div class="${"card-img-top svelte-22fhd3"}"><img${add_attribute("src", item.imgURL[0], 0)} class="${"svelte-22fhd3"}">
                
                
                </div>
            <div class="${"col-12 d-flex justify-content-between"}"><p>${escape(item.name)}</p>
                <p>$ ${escape(item.price)}</p></div>
            </div></div>
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><div class="${"col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(data.storeItems, (item) => {
    return `${validate_component(StoreItemCard, "StoreItemCard").$$render($$result, { item }, {}, {})}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
