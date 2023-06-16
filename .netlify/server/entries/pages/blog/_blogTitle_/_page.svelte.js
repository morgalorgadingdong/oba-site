import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../../chunks/index2.js";
import { b as blogs } from "../../../../chunks/blogs.js";
import { S as Splide_1, a as SplideTrack, b as SplideSlide } from "../../../../chunks/SplideSlide.js";
import "../../../../chunks/splide.min.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".video-container.svelte-11eo4eh video.svelte-11eo4eh{position:absolute;top:0;height:95%;margin:0 auto}.video-container.svelte-11eo4eh.svelte-11eo4eh{position:relative;padding:0;margin:0;height:100%;overflow:hidden}.transam-day-pics.svelte-11eo4eh img.svelte-11eo4eh{width:100%;aspect-ratio:2/3;max-height:80vh;object-fit:cover;object-position:center}.blog-text.svelte-11eo4eh.svelte-11eo4eh{font-size:1.2rem;line-height:1.5rem;font-family:var(--bs-body-font-family)}.blog-img.svelte-11eo4eh.svelte-11eo4eh{object-fit:cover;margin:0;position:relative;left:0;top:0;aspect-ratio:1/1}.blogBanner.svelte-11eo4eh.svelte-11eo4eh{background-color:black;height:50vh;max-height:300px;position:relative;margin:auto}.blogBanner.svelte-11eo4eh>img.svelte-11eo4eh{width:100%;height:100%;object-fit:cover;margin:0;position:absolute;left:0;top:0}.blog-header.svelte-11eo4eh.svelte-11eo4eh{min-height:23vh}.blogDate.svelte-11eo4eh.svelte-11eo4eh{color:#afadac}.blog-header-divider.svelte-11eo4eh.svelte-11eo4eh{margin-bottom:40px}a.svelte-11eo4eh.svelte-11eo4eh{color:black}.blog-highlight.svelte-11eo4eh.svelte-11eo4eh{font-size:1.5rem;font-weight:600;color:black;font-style:italic;background-color:rgb(175, 173, 172, 0.1)}.blog-divider.svelte-11eo4eh.svelte-11eo4eh{border-top:black solid 2px}",
  map: null
};
let currentImg = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let blog;
  blogs.forEach((article) => {
    if (article.title == data.blogTitle) {
      blog = article;
    }
  });
  console.log(blog);
  let imgSrcBanner;
  if (blog.transAmBlog) {
    console.log("transam");
    if (blog.sections[0].type == "intro" || blog.sections[0].type == "day") {
      imgSrcBanner = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`;
    } else {
      imgSrcBanner = `../../img/blog/transam/${blog.title}/${blog.title}-banner.jpg`;
    }
  } else {
    imgSrcBanner = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
  }
  blogs[1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"vh-60 blogBanner col-12 px-0 svelte-11eo4eh"}"><img${add_attribute("src", imgSrcBanner, 0)}${add_attribute("alt", blog.bannerAlt, 0)} class="${"bannerImg svelte-11eo4eh"}"></div>
    <div id="${""}" class="${"d-flex flex-wrap justify-content-center content-container text-start center mb-5"}"><div class="${"col-12 blog-header d-flex align-content-center justify-content-start flex-wrap my-3 svelte-11eo4eh"}"><h2 class="${"col-12 text-left px-3 pb-1"}">${escape(blog.title)}</h2>
            <p class="${"blogDate col-12 text-left px-3 svelte-11eo4eh"}">Published by ${escape(blog.author)} on ${escape(blog.date)}</p>
            ${blog.transAmBlog && blog.sections[0].type == "intro" ? `<span class="${"mx-3"}">${escape(blog.sections[0].dateRange)}</span>    
                <span class="${"mx-3"}">${escape(blog.sections[0].startingPoint)} -&gt; ${escape(blog.sections[0].endingPoint)}</span>
                <span class="${"mx-3"}">${escape(blog.sections[0].totalMilage)} miles down</span>
                <span class="${"mx-3"}">${escape(blog.sections[0].milageLeft)} miles to go</span>` : ``}</div>
        <div class="${"col-12 px-3"}"><div class="${"blog-divider col-12 blog-header-divider svelte-11eo4eh"}"></div></div>
        <div class="${"col-12 d-flex justify-content-center flex-wrap mt-3 px-0 px-sm-3"}">${blog.transAmBlog ? `${each(blog.sections, (section) => {
    return `${section.type == "intro" ? `${section.text ? `<div class="${"col-12 d-flex justify-content-start flex-wrap"}"><p class="${"col-12"}">${escape(section.text)}</p></div>    
                    
                        <div class="${"mt-5 pb-5 blog-divider col-12 svelte-11eo4eh"}"></div>` : ``}` : `${section.type == "day" ? `<div class="${"transam-day-upper col-12 col-md-6"}"><h3>Day ${escape(section.day)}: ${escape(section.startingPoint)} ${section.endingPoint ? `-&gt; ${escape(section.endingPoint)} ` : ``}</h3>                            
                            <p>${escape(section.distance)} miles, ${escape(section.elevation)} ft of climb</p>    
                        
                            ${section.distance ? `<p>Difficulty: ${escape(section.difficulty)}</p>` : ``}
                            ${section.safety ? `<p>Safety: ${escape(section.safety)}</p>` : ``}
                            ${section.lodging ? `${section.lodgingLink ? `<p>Lodging: <a${add_attribute("href", section.lodgingLink, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-11eo4eh"}">${escape(section.lodging)}</a></p>` : `<p>Lodging: ${escape(section.lodging)}</p>`}` : ``}
                            ${section.text ? `<p>${escape(section.text)}</p>` : ``}
                            ${section.notes ? `<p>Notes</p>
                            <ul>${each(section.notes, (note) => {
      return `<li>${escape(note)}</li>`;
    })}
                            </ul>` : ``}</div>
                            <div class="${"transam-day-pics col-12 col-md-6 svelte-11eo4eh"}">${validate_component(Splide_1, "Splide").$$render(
      $$result,
      {
        "aria-label": "",
        class: "z-reset",
        hasTrack: false,
        options: {
          type: "loop",
          perPage: 1,
          breakpoints: { 768: { perPage: 1 }, 576: { perPage: 1 } },
          focus: "center",
          drag: "free",
          snap: true
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, { class: "carousel" }, {}, {
            default: () => {
              return `${each(section.images, (image) => {
                return `${image.video ? `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0 transam-day-pic" }, {}, {
                  default: () => {
                    return `<div class="${"video-container d-flex justify-content-center svelte-11eo4eh"}"><video src="${"../../img/blog/transam/week " + escape(blog.week, true) + "/day" + escape(section.day, true) + "/day" + escape(section.day, true) + "-" + escape(image.number, true) + ".mp4"}"${add_attribute("alt", image.alt, 0)} class="${"transam-day-vid svelte-11eo4eh"}" controls></video>
                                                    <p class="${"col-12 text-center"}">${escape(image.caption)}</p></div>
                                            `;
                  }
                })}` : `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0 transam-day-pic" }, {}, {
                  default: () => {
                    return `<img src="${"../../img/blog/transam/week " + escape(blog.week, true) + "/day" + escape(section.day, true) + "/day" + escape(section.day, true) + "-" + escape(image.number, true) + ".jpg"}"${add_attribute("alt", image.alt, 0)} class="${" svelte-11eo4eh"}">
                                                <p class="${"col-12 text-center"}">${escape(image.caption)}</p>
                                            `;
                  }
                })}`}`;
              })}
                                            
                                    `;
            }
          })}
                                        <div class="${"splide__arrows"}"><button class="${"splide__arrow splide__arrow--prev"}"><i class="${"fa-solid fa-caret-left"}"></i></button>
                                            <button class="${"splide__arrow splide__arrow--next"}"><i class="${"fa-solid fa-caret-right"}"></i></button></div>
                                    `;
        }
      }
    )}</div>
                                <div class="${"col-12 my-3"}">${section.strava ? `<a class="${"col-12 p-0 m-0 svelte-11eo4eh"}"${add_attribute("href", section.strava, 0)} target="${"_blank"}" rel="${"noreferrer"}"><img src="${"../../img/blog/transam/week " + escape(blog.week, true) + "/day" + escape(section.day, true) + "/day" + escape(section.day, true) + "-map.jpg"}" alt="${"Map of route"}" class="${"col-12"}"></a>
                                        <a class="${"col-12 p-0 m-0 svelte-11eo4eh"}"${add_attribute("href", section.strava, 0)} target="${"_blank"}" rel="${"noreferrer"}"><img src="${"../../img/blog/transam/week " + escape(blog.week, true) + "/day" + escape(section.day, true) + "/day" + escape(section.day, true) + "-elevation.jpg"}" alt="${"Elevation view of route"}" class="${"col-12"}"></a>` : ``}</div>  
                                <div class="${"mt-5 pb-5 blog-divider col-12 svelte-11eo4eh"}"></div>` : `${section.type == "reflections" ? `<h3 class="${"col-12 text-center"}">Thoughts</h3>
                                ${each(section.content, (reflection) => {
      return `<h5 class="${"text-left col-12 px-0"}">${escape(reflection.heading)}</h5>
                                    <p>${escape(reflection.content)}</p>`;
    })}` : `${section.type == "text" ? `<p class="${"col-12 text-left px-0 my-3 blog-text svelte-11eo4eh"}">${escape(section.content)}</p>` : `${section.type == "img" ? `<img src="${"../../img/blog/transam/" + escape(blog.title, true) + "/" + escape(blog.title, true) + "-" + escape(section.number, true) + ".jpg"}"${add_attribute("alt", section.alt, 0)} class="${"col-10 col-md-8 mt-5 blog-img " + escape(section.class, true) + " svelte-11eo4eh"}">
                                <span class="${"col-12 text-center mb-5"}">${escape(section.caption)}</span>` : `${section.type == "divider" ? `<div class="${"mt-5 pb-5 blog-divider col-8 svelte-11eo4eh"}"></div>` : `${section.type == "highlight" ? `<p class="${"text-center blog-highlight p-5 col-12 col-lg-8 my-5 svelte-11eo4eh"}">${escape(section.content)}</p>` : `${section.type == "heading" ? `<h4 class="${"text-start col-12 mt-3 mb-0"}">${escape(section.content)}</h4>` : `${section.type == "list" ? `<ul class="${"text-start col-12 col-lg-8 my-3 mb-0 d-flex flex-wrap"}">${each(section.listItems, (item) => {
      return `<li class="${"my-2 col-12 blog-text svelte-11eo4eh"}">${escape(item)}</li>`;
    })}
                                </ul>` : ``}`}`}`}`}`}`}`}`}`;
  })}` : `

            ${each(blog.sections, (section) => {
    return `${section.type == "text" ? `<p class="${"col-12 text-left px-0 my-3 blog-text svelte-11eo4eh"}">${escape(section.Content)}</p>` : `${section.type == "img" ? `<img src="${"./img/blogs/" + escape(blog.number, true) + ". " + escape(blog.title, true) + "/blog" + escape(blog.id, true) + "-" + escape(currentImg, true) + ".jpg"}"${add_attribute("alt", section.alt, 0)} class="${"col-10 col-md-8 mt-5 blog-img svelte-11eo4eh"}">
                    <span class="${"col-12 text-center mb-5"}">${escape(section.caption)} <a${add_attribute("href", section.src, 0)} class="${"svelte-11eo4eh"}">source</a></span>
                    ${escape(currentImg = currentImg + 1)}` : `${section.type == "divider" ? `<div class="${"mt-5 pb-5 blog-divider col-8 svelte-11eo4eh"}"></div>` : `${section.type == "highlight" ? `<p class="${"text-center blog-highlight p-5 col-12 col-lg-8 my-5 svelte-11eo4eh"}">${escape(section.content)}</p>` : `${section.type == "heading" ? `<h4 class="${"text-start col-12 mt-3 mb-0"}">${escape(section.content)}</h4>` : `${section.Type == "list" ? `<ul class="${"text-start col-12 col-lg-8 my-3 mb-0 d-flex flex-wrap"}">${each(section.listItems, (item) => {
      return `<li class="${"blog-text my-2 col-12 svelte-11eo4eh"}">${escape(item)}</li>`;
    })}
                                </ul>` : ``}`}`}`}`}`}`;
  })}`}</div></div>
    <div class="${"col-12 d-flex justify-content-center"}"><a href="${"/blog"}" class="${" svelte-11eo4eh"}"><div class="${"button my-5"}">Back to Blogs</div></a></div>
    
    
    </section>
 `;
});
export {
  Page as default
};
