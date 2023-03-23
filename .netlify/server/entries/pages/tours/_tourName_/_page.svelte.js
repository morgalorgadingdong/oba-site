import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { t as tours } from "../../../../chunks/tours.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tourCover.svelte-nk1taq.svelte-nk1taq{background-color:black;height:30vh;max-height:300px;position:relative;margin:auto}.tourCover.svelte-nk1taq>img.svelte-nk1taq{width:100%;height:100%;object-fit:cover;margin:0;position:absolute;left:0;top:0}.tour-header.svelte-nk1taq.svelte-nk1taq{height:23vh}.tour-header-divider.svelte-nk1taq.svelte-nk1taq{margin-bottom:40px}a.svelte-nk1taq.svelte-nk1taq{color:black}.tour-divider.svelte-nk1taq.svelte-nk1taq{border-top:black solid 2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tour;
  tours.forEach((item) => {
    if (item.title == data.tourName) {
      tour = item;
    }
  });
  let imgSrcCover = `../../img/tours/${tour.id}. ${tour.title}/tour${tour.id}-cover.jpg`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"tourCover col-12 px-0 svelte-nk1taq"}"><img${add_attribute("src", imgSrcCover, 0)}${add_attribute("alt", tour.coverAlt, 0)} class="${"coverImg svelte-nk1taq"}"></div>
    <div id="${""}" class="${"d-flex flex-wrap justify-content-center content-container text-start center mb-5"}"><div class="${"col-12 tour-header d-flex align-content-center justify-content-start flex-wrap svelte-nk1taq"}"><h2 class="${"col-12 text-left px-3 pb-1"}">${escape(tour.title)}</h2></div>
        <div class="${"col-12 px-3"}"><div class="${"tour-divider col-12 tour-header-divider svelte-nk1taq"}"></div></div>
        </div>
    <a href="${"/tours"}" class="${" svelte-nk1taq"}"><div class="${"button my-5"}">All tours</div></a>
    
    </section>
 `;
});
export {
  Page as default
};
