import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{z-index:1;padding-top:2rem;background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{position:relative;height:100%;background-color:var(--color-primary)}.logo-text-container.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{position:relative;height:100%;padding:0.8rem 0;background-color:var(--color-primary)}.logo-text.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{font-size:30px;font-weight:400;color:var(--color-light);font-family:var(--font-logo);padding:0.8rem 1.5rem;background-color:var(--color-primary);margin:0;z-index:12;line-height:30px;text-decoration:none}a.col-9.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{text-decoration:none}.logo-container.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{list-style-type:none}nav.svelte-1h6u1uk a.svelte-1h6u1uk.svelte-1h6u1uk,#menu.svelte-1h6u1uk a.svelte-1h6u1uk.svelte-1h6u1uk{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{height:fit-content}.nav-item.svelte-1h6u1uk li.svelte-1h6u1uk.svelte-1h6u1uk{text-decoration:none}.nav-item.svelte-1h6u1uk li.svelte-1h6u1uk.svelte-1h6u1uk:after{content:'';display:block;width:0;height:2px;background-color:var(--color-dark);transition:width 0.3s}a[aria-current='page'].svelte-1h6u1uk>li.svelte-1h6u1uk.svelte-1h6u1uk:after{width:100%}a[aria-current='page-mobile'].svelte-1h6u1uk>li.svelte-1h6u1uk.svelte-1h6u1uk:after{background-color:var(--color-light);content:'';display:block;width:100%;height:2px}.nav-item.svelte-1h6u1uk:hover .svelte-1h6u1uk.svelte-1h6u1uk:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{aspect-ratio:1/1;max-height:100px;height:100%;position:relative;z-index:20}header.svelte-1h6u1uk .btn.svelte-1h6u1uk.svelte-1h6u1uk{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-1h6u1uk>a.svelte-1h6u1uk.svelte-1h6u1uk{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk,#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk.svelte-1h6u1uk,#menuToggle.svelte-1h6u1uk a.svelte-1h6u1uk.svelte-1h6u1uk,#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk.svelte-1h6u1uk{display:none}@media screen and (max-width: 991px){header.svelte-1h6u1uk>.col-12.svelte-1h6u1uk.svelte-1h6u1uk{background-color:var(--color-primary)}.logo-text.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{font-size:26px}.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk::-webkit-scrollbar{width:0}#menuToggle.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-1h6u1uk a.svelte-1h6u1uk.svelte-1h6u1uk{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk.svelte-1h6u1uk{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-1h6u1uk span.svelte-1h6u1uk.svelte-1h6u1uk{display:block;width:33px;background-color:var(--color-primary-dark);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-1h6u1uk span.svelte-1h6u1uk.svelte-1h6u1uk:first-child{transform-origin:0% 0%}#menuToggle.svelte-1h6u1uk span.svelte-1h6u1uk.svelte-1h6u1uk:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk:checked~span.svelte-1h6u1uk{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk:checked~span.svelte-1h6u1uk:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk:checked~span.svelte-1h6u1uk:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-1h6u1uk.svelte-1h6u1uk.svelte-1h6u1uk{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:var(--color-dark);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-1h6u1uk a.svelte-1h6u1uk.svelte-1h6u1uk{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-1h6u1uk input.svelte-1h6u1uk:checked~ul.svelte-1h6u1uk{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerToggle = false;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `








<header class="${"col-12 px-0 mx-0 svelte-1h6u1uk"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-1h6u1uk"}"><a class="${"col-9 col-sm-8 col-lg-4 col-xl-3 d-flex justify-content-start px-0 align-items-center logo-container svelte-1h6u1uk"}" href="${"/"}"><img src="${"/img/logo-11.png"}" alt="${"oba-logo"}" class="${"ml-3 mr-0 p-2 pr-sm-0 p-sm-3 p-lg-0 svelte-1h6u1uk"}"> 
            
            <div class="${"logo-text-container d-flex align-items-center svelte-1h6u1uk"}"><h1 class="${"logo-text px-2 px-sm-4 py-0 my-2 svelte-1h6u1uk"}">Oregon Bicycle <br class="${"svelte-1h6u1uk"}"> Adventures</h1></div></a>
        <nav class="${"col-5 d-none d-lg-flex justify-content-between align-items-center svelte-1h6u1uk"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-1h6u1uk"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1h6u1uk"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1h6u1uk"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1h6u1uk"}">Contact</li></a></nav>
        
        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-1h6u1uk"}">
            
            <a href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}" class="${"svelte-1h6u1uk"}"><button class="${"btn btn-primary svelte-1h6u1uk"}">Book</button></a></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-1h6u1uk"}"><input type="${"checkbox"}" class="${"svelte-1h6u1uk"}"${add_attribute("checked", headerToggle, 1)}>
            <span class="${" svelte-1h6u1uk"}"></span>
            <span class="${" svelte-1h6u1uk"}"></span>
            <span class="${" svelte-1h6u1uk"}"></span>
            <ul id="${"menu"}" class="${" svelte-1h6u1uk"}"><a class="${"col-12 d-flex justify-content-center svelte-1h6u1uk"}" href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}"><button class="${"btn btn-secondary svelte-1h6u1uk"}">Book</button></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page-mobile" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-1h6u1uk"}">Tours</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page-mobile" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1h6u1uk"}">Blog</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page-mobile" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1h6u1uk"}">About</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1h6u1uk"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page-mobile" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1h6u1uk"}">Contact</li></a></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-e4aatn.svelte-e4aatn,footer.svelte-e4aatn>.col-12.svelte-e4aatn{height:fit-content}footer.svelte-e4aatn.svelte-e4aatn{border-bottom:solid 20px black}i.svelte-e4aatn.svelte-e4aatn{font-size:1.5rem;color:var(black)}.img-container.svelte-e4aatn.svelte-e4aatn{box-shadow:none;width:100%}footer.svelte-e4aatn.svelte-e4aatn{background-color:var(--color-dark)}footer.svelte-e4aatn p.svelte-e4aatn,footer.svelte-e4aatn i.svelte-e4aatn,footer.svelte-e4aatn h4.svelte-e4aatn{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer id="${"footer"}" class="${"col-12 vh-50 d-flex align-content-center pt-5 pb-3 svelte-e4aatn"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5 svelte-e4aatn"}"><div class="${"col-12 col-md-3 px-0 order-md-2 d-flex justify-content-center flex-wrap"}"><div class="${"img-container col-6 svelte-e4aatn"}"><img class="${"img"}" src="${"/img/logo-11.png"}"></div>
            <h4 class="${"font-hero text-center py-3 svelte-e4aatn"}">Oregon Bicycle Adventures LLC</h4></div>
        <div class="${"col-12 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap"}"><p class="${"svelte-e4aatn"}">Oregon Bicycle Adventures, LLC</p>
            
            <p class="${"svelte-e4aatn"}">info@oregonbicycleadventures.com</p>
            <p class="${"svelte-e4aatn"}">(503) 949-8766</p></div>
        <div class="${"col-12 col-md-3 px-0 pt-3 order-md-3 d-flex align-content-center flex-wrap justify-content-around"}"><i class="${"fa-brands fa-instagram svelte-e4aatn"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-brands fa-facebook svelte-e4aatn"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-solid fa-envelope svelte-e4aatn"}" onclick="${"location.href='/contact';"}" style="${"cursor: pointer;"}"></i></div></div>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1iq9rj6{z-index:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app"}"><main class="${"svelte-1iq9rj6"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({}) : ``}
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>
	
</div>`;
});
export {
  Layout as default
};
