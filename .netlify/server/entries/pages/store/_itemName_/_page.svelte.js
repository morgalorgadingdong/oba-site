import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { i as items } from "../../../../chunks/store-items.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let item;
  items.forEach((article) => {
    if (article.itemData.name == data.itemName) {
      item = article;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"hero-img img"}"${add_attribute("src", item.itemData.imgURL[0], 0)}></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">${escape(item.itemData.name)}</h1></div></div>`;
});
export {
  Page as default
};
