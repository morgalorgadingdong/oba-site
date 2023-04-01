import { c as create_ssr_component, h as compute_rest_props, i as createEventDispatcher, j as spread, k as escape_attribute_value, l as escape_object, d as add_attribute, v as validate_component, e as escape, f as each } from "../../../../chunks/index.js";
import { b as blogs } from "../../../../chunks/blogs.js";
import "../../../../chunks/splide.min.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".transam-day-pics.svelte-1xzkcsz img.svelte-1xzkcsz{width:100%;aspect-ratio:2/3;max-height:80vh;object-fit:cover;object-position:center}.blog-text.svelte-1xzkcsz.svelte-1xzkcsz{font-size:1.2rem;line-height:1.5rem;font-family:var(--bs-body-font-family)}.blog-img.svelte-1xzkcsz.svelte-1xzkcsz{object-fit:cover;margin:0;position:relative;left:0;top:0;aspect-ratio:1/1}.blogBanner.svelte-1xzkcsz.svelte-1xzkcsz{background-color:black;height:50vh;max-height:300px;position:relative;margin:auto}.blogBanner.svelte-1xzkcsz>img.svelte-1xzkcsz{width:100%;height:100%;object-fit:cover;margin:0;position:absolute;left:0;top:0}.blog-header.svelte-1xzkcsz.svelte-1xzkcsz{height:23vh}.blogDate.svelte-1xzkcsz.svelte-1xzkcsz{color:#afadac}.blog-header-divider.svelte-1xzkcsz.svelte-1xzkcsz{margin-bottom:40px}a.svelte-1xzkcsz.svelte-1xzkcsz{color:black}.blog-highlight.svelte-1xzkcsz.svelte-1xzkcsz{font-size:1.5rem;font-weight:600;color:black;font-style:italic;background-color:rgb(175, 173, 172, 0.1)}.blog-divider.svelte-1xzkcsz.svelte-1xzkcsz{border-top:black solid 2px}",
  map: null
};
let currentImg = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let blog;
  blogs.forEach((article) => {
    if (article.title == data.blogTitle) {
      blog = article;
    }
  });
  let imgSrcBanner;
  if (blog.transAmBlog) {
    console.log("transam");
    imgSrcBanner = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`;
  } else {
    imgSrcBanner = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
  }
  blogs[1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"vh-60 blogBanner col-12 px-0 svelte-1xzkcsz"}"><img${add_attribute("src", imgSrcBanner, 0)}${add_attribute("alt", blog.bannerAlt, 0)} class="${"bannerImg svelte-1xzkcsz"}"></div>
    <div id="${""}" class="${"d-flex flex-wrap justify-content-center content-container text-start center mb-5"}"><div class="${"col-12 blog-header d-flex align-content-center justify-content-start flex-wrap svelte-1xzkcsz"}"><h2 class="${"col-12 text-left px-3 pb-1"}">${escape(blog.title)}</h2>
            <p class="${"blogDate col-12 text-left px-3 svelte-1xzkcsz"}">Published by ${escape(blog.author)} on ${escape(blog.date)}</p></div>
        <div class="${"col-12 px-3"}"><div class="${"blog-divider col-12 blog-header-divider svelte-1xzkcsz"}"></div></div>
        <div class="${"col-12 col-lg-8 d-flex justify-content-center flex-wrap mt-3 px-3"}">${blog.transAmBlog ? `${each(blog.sections, (section) => {
    return `${section.type == "intro" ? `<div class="${"col-12 d-flex justify-content-start flex-wrap"}"><h3 class="${"col-12"}">${escape(section.startingPoint)} -&gt; ${escape(section.endingPoint)}</h3>
                        <p class="${"mx-3"}">${escape(section.dateRange)} miles down</p>
                        <p class="${"mx-3"}">${escape(section.totalMilage)} miles down</p>
                        <p class="${"mx-3"}">${escape(section.milageLeft)} miles to go</p></div>    
                    
                        <div class="${"mt-5 pb-5 blog-divider col-12 svelte-1xzkcsz"}"></div>` : `${section.type == "day" ? `<div class="${"transam-day-upper col-12 col-md-6"}"><h3>Day ${escape(section.day)}: ${escape(section.startingPoint)} -&gt; ${escape(section.endingPoint)}</h3>
                            <p>${escape(section.distance)} miles, ${escape(section.elevation)} ft of climb</p>
                            <p>Difficulty: ${escape(section.difficulty)}</p>
                            <p>Safety: ${escape(section.safety)}</p>
                        
                            <p>Notes</p>
                            <ul>${each(section.notes, (note) => {
      return `<li>${escape(note)}</li>`;
    })}
                            </ul></div>
                            <div class="${"transam-day-pics col-12 col-md-6 svelte-1xzkcsz"}">${validate_component(Splide_1, "Splide").$$render(
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
          return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
            default: () => {
              return `${each(section.images, (image) => {
                return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0 transam-day-pic" }, {}, {
                  default: () => {
                    return `<img src="${"../../img/blog/transam/week " + escape(blog.week, true) + "/day" + escape(section.day, true) + "-" + escape(image.number, true) + ".jpg"}"${add_attribute("alt", image.alt, 0)} class="${" svelte-1xzkcsz"}">
                                                <p>${escape(image.caption)}</p>
                                            `;
                  }
                })}`;
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
                                <div class="${"mt-5 pb-5 blog-divider col-12 svelte-1xzkcsz"}"></div>` : `${section.type == "reflections" ? `<h3 class="${"col-12 text-center"}">Reflections</h3>
                                    ${each(section.content, (reflection) => {
      return `<h5 class="${"text-left col-12"}">${escape(reflection.heading)}</h5>
                                        <p>${escape(reflection.content)}</p>`;
    })}` : ``}`}`}`;
  })}` : `

            ${each(blog.sections, (section) => {
    return `${section.type == "text" ? `<p class="${"col-12 text-left px-0 my-3 blog-text svelte-1xzkcsz"}">${escape(section.Content)}</p>` : `${section.type == "img" ? `<img src="${"./img/blogs/" + escape(blog.number, true) + ". " + escape(blog.title, true) + "/blog" + escape(blog.id, true) + "-" + escape(currentImg, true) + ".jpg"}"${add_attribute("alt", section.alt, 0)} class="${"col-10 col-md-8 mt-5 blog-img svelte-1xzkcsz"}">
                    <span class="${"col-12 text-center mb-5"}">${escape(section.caption)} <a${add_attribute("href", section.src, 0)} class="${"svelte-1xzkcsz"}">source</a></span>
                    ${escape(currentImg = currentImg + 1)}` : `${section.type == "divider" ? `<div class="${"mt-5 pb-5 blog-divider col-8 svelte-1xzkcsz"}"></div>` : `${section.type == "highlight" ? `<p class="${"text-center blog-highlight p-5 col-12 col-lg-8 my-5 svelte-1xzkcsz"}">${escape(section.content)}</p>` : `${section.type == "heading" ? `<h4 class="${"text-start col-12 mt-3 mb-0"}">${escape(section.content)}</h4>` : ``}`}`}`}`}`;
  })}`}</div></div>
    <div class="${"col-12 d-flex justify-content-center"}"><a href="${"/blog"}" class="${" svelte-1xzkcsz"}"><div class="${"button my-5"}">Back to Blogs</div></a></div>
    
    
    </section>
 `;
});
export {
  Page as default
};
