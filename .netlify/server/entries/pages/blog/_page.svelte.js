import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/index3.js";
import { b as blogs } from "../../../chunks/blogs.js";
const BlogCard_svelte_svelte_type_style_lang = "";
const BlogCard2_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-kesc64.svelte-kesc64{text-decoration:none;color:black}.card.svelte-kesc64.svelte-kesc64{margin:1rem}.card-body.svelte-kesc64.svelte-kesc64{padding:0}.card-img-top.svelte-kesc64.svelte-kesc64{width:100%;height:15rem;padding:0;background-size:cover;background-position:center;border-bottom:solid 4px var(--color-primary)}.card-img-top.svelte-kesc64>img.svelte-kesc64,.card-img-left.svelte-kesc64>img.svelte-kesc64{width:100%;height:100%;object-fit:cover;margin:0}.card-img-left.svelte-kesc64.svelte-kesc64{aspect-ratio:3/2;padding:0;background-size:cover;background-position:center}.blogDate.svelte-kesc64.svelte-kesc64{color:#afadac;width:fit-content}.blogDescription.svelte-kesc64.svelte-kesc64{white-space:nowrap;padding:0;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:14px}.card-title-container.svelte-kesc64.svelte-kesc64{border-bottom:solid 2px var(--color-primary)}",
  map: null
};
const BlogCard2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blog } = $$props;
  let imgSrc;
  if (blog.transAmBlog) {
    console.log("transam");
    if (blog.sections[0].type == "intro" || blog.sections[0].type == "day") {
      imgSrc = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`;
    } else {
      imgSrc = `../../img/blog/transam/${blog.title}/${blog.title}-banner.jpg`;
    }
  } else {
    imgSrc = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
  }
  if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0)
    $$bindings.blog(blog);
  $$result.css.add(css);
  return `<a${add_attribute("href", "./blog/" + blog.title, 0)} class="${"col-12 col-md-5 d-lg-none my-3 svelte-kesc64"}" data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 card mx-0 px-0 svelte-kesc64"}"><div class="${"card-body svelte-kesc64"}"><div class="${"card-img-top svelte-kesc64"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", blog.title, 0)} class="${"svelte-kesc64"}">
                
                
                </div>
            
            <div class="${"col-12 px-2"}"><h5 class="${"card-title pt-3 d-inline-block"}">${escape(blog.title)}</h5>
                <p class="${"blogDate col-12 text-left px-0 d-inline-block svelte-kesc64"}">${escape(blog.date)}</p>
                ${blog.sections[0].type == "text" ? `<p class="${"blogDescription col-12 text-left px-0 svelte-kesc64"}">${escape(blog.sections[0].content)}</p>` : `${blog.sections[0].type == "intro" ? `<p class="${"blogDescription col-12 text-left px-0 svelte-kesc64"}">${escape(blog.sections[0].startingPoint)} -&gt; ${escape(blog.sections[0].endingPoint)}</p>` : ``}`}
                <a${add_attribute("href", "./blog/" + blog.title, 0)} class="${"svelte-kesc64"}">Read More</a></div></div></div></a>

<a${add_attribute("href", "./blog/" + blog.title, 0)} class="${"col-12 d-none d-lg-inline my-5 svelte-kesc64"}" data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 d-flex flex-wrap"}"><div class="${"card-img-left col-4 svelte-kesc64"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", blog.title, 0)} class="${"svelte-kesc64"}">
            
            
            </div>
        
        <div class="${"col-8 px-2 d-flex align-content-center justify-content-start flex-wrap px-3"}"><div class="${"col-12 d-flex justify-content-between align-items-center card-title-container px-0 svelte-kesc64"}"><h5 class="${"card-title text-left py-1 pl-0"}">${escape(blog.title)}</h5>
                <p class="${"blogDate text-left px-0 svelte-kesc64"}">${escape(blog.date)}</p></div>
            
            ${blog.sections[0].type == "text" ? `<p class="${"blogDescription col-12 text-left px-0 svelte-kesc64"}">${escape(blog.sections[0].content)}</p>` : `${blog.sections[0].type == "intro" ? `<div class="${"col-12 d-flex justify-content-between px-0 mb-3"}"><span class="${"text-left px-0"}">${escape(blog.sections[0].startingPoint)} -&gt; ${escape(blog.sections[0].endingPoint)}</span>
                        <span class="${"mx-3"}">${escape(blog.sections[0].totalMilage)} miles</span></div>
                    <p>${escape(blog.sections[0].text)}</p>` : ``}`}
            <a class="${"col-12 text-center d-none d-lg-inline svelte-kesc64"}"${add_attribute("href", "./blog/" + blog.title, 0)}>Read More</a></div></div>
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero hero-sub col-12 d-flex flex-column justify-content-end"}"><div class="${"img-container"}"><div class="${"img-overlay"}"></div>
        <img class="${"img"}" src="${"./img/blog.jpg"}"></div>
    <div id="${"hero-tagline-container"}" class="${"d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5"}"><h1 class="${"hero-tagline col-12"}">Blog</h1></div></div>
<section class="${"col-12 d-flex justify-content-center flex-wrap my-5"}"><div class="${"col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4"}">${each(blogs, (blog) => {
    return `${blog.published == true ? `${validate_component(BlogCard2, "BlogCard2").$$render($$result, { blog }, {}, {})}` : ``}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
