import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import { b as blogs } from "../../../chunks/blogs.js";
const BlogPreview_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-6nkbku.svelte-6nkbku{text-decoration:none;color:black}#blog-category-container.svelte-6nkbku.svelte-6nkbku{opacity:0;transform:translateY(-100%);transition:all 0.5s ease-in-out}#blog-category-container.svelte-6nkbku .category.svelte-6nkbku{padding:0.5rem 1rem 0.5rem 1rem;margin:0 0.5rem 0 0.5rem;transition:all 0.5s ease-in-out;box-shadow:-2px 2px 4px 0px rgba(0,0,0,0.5)}.blog-preview.svelte-6nkbku:hover>#blog-category-container.svelte-6nkbku{opacity:1;transform:translateY(0%);transition:all 0.5s ease-in-out}.img-container.svelte-6nkbku.svelte-6nkbku{position:relative;width:100%;aspect-ratio:3/2;overflow:hidden;object-position:center;box-shadow:-2px 2px 4px 0px rgba(0,0,0,0.5)}.img.svelte-6nkbku.svelte-6nkbku{width:100%;height:100%;object-fit:cover;object-position:center;transition:all 0.5s ease-in-out}",
  map: null
};
const BlogPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blog } = $$props;
  let imgSrc = `./img/blog/${blog.id}. ${blog.Title}/blog${blog.id}-banner.jpg`;
  if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0)
    $$bindings.blog(blog);
  $$result.css.add(css);
  return `<div class="${"blog-preview col-12 mb-5 svelte-6nkbku"}"><div class="${"img-container svelte-6nkbku"}"><a${add_attribute("href", "./blog/" + blog.Title, 0)} class="${"svelte-6nkbku"}"><img${add_attribute("src", imgSrc, 0)} class="${"img svelte-6nkbku"}" alt="${""}"></a></div>
    <div class="${"blog-info col-12 d-flex justify-content-between align-items-center"}"><h3 class="${"blog-title my-2"}">${escape(blog.Title)}</h3>
        <p class="${"blog-date m-0"}">${escape(blog.Date)}</p></div>
    <div id="${"blog-category-container"}" class="${"category-container col-12 d-flex justify-content-center svelte-6nkbku"}">${each(blog.Categories, (category) => {
    return `<span class="${"category svelte-6nkbku"}">${escape(category)}</span>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"vh-60 hero col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><img class="${"hero-img img"}" src="${"./img/blog.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Blog</h1></div></div>
<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><div class="${"col-12 col-md-8 col-lg-6 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(blogs, (blog) => {
    return `${blog.Published == true ? `${validate_component(BlogPreview, "BlogPreview").$$render($$result, { blog }, {}, {})}` : ``}`;
  })}</div></section>`;
});
export {
  Page as default
};
