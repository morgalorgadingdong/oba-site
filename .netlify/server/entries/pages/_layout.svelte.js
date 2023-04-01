import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{z-index:1;padding-top:2rem;background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{position:relative;height:100%;background-color:var(--color-primary)}.logo-text-container.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{position:relative;height:100%;padding:0.8rem 0;background-color:var(--color-primary)}.logo-text.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{font-size:30px;font-weight:400;color:var(--color-light);font-family:var(--font-logo);border-left:solid 3px var(--color-primary-dark);padding:0.8rem 1.5rem;background-color:var(--color-primary);margin:0;z-index:12;line-height:30px;text-decoration:none}a.col-9.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{text-decoration:none}.logo-container.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{list-style-type:none}nav.svelte-tjrppy a.svelte-tjrppy.svelte-tjrppy,#menu.svelte-tjrppy a.svelte-tjrppy.svelte-tjrppy{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{height:fit-content}.nav-item.svelte-tjrppy li.svelte-tjrppy.svelte-tjrppy{text-decoration:none}.nav-item.svelte-tjrppy li.svelte-tjrppy.svelte-tjrppy:after{content:'';display:block;width:0;height:2px;background-color:var(--color-dark);transition:width 0.3s}a[aria-current='page'].svelte-tjrppy>li.svelte-tjrppy.svelte-tjrppy:after{width:100%}a[aria-current='page-mobile'].svelte-tjrppy>li.svelte-tjrppy.svelte-tjrppy:after{background-color:var(--color-light);content:'';display:block;width:100%;height:2px}.nav-item.svelte-tjrppy:hover .svelte-tjrppy.svelte-tjrppy:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{aspect-ratio:1/1;max-height:100px;height:100%;position:relative;z-index:20}header.svelte-tjrppy .btn.svelte-tjrppy.svelte-tjrppy{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-tjrppy>a.svelte-tjrppy.svelte-tjrppy{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy,#menuToggle.svelte-tjrppy input.svelte-tjrppy.svelte-tjrppy,#menuToggle.svelte-tjrppy a.svelte-tjrppy.svelte-tjrppy,#menuToggle.svelte-tjrppy input.svelte-tjrppy.svelte-tjrppy{display:none}@media screen and (max-width: 991px){header.svelte-tjrppy>.col-12.svelte-tjrppy.svelte-tjrppy{background-color:var(--color-primary)}.logo-text.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{font-size:20px}.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy::-webkit-scrollbar{width:0}#menuToggle.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-tjrppy a.svelte-tjrppy.svelte-tjrppy{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-tjrppy input.svelte-tjrppy.svelte-tjrppy{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-tjrppy span.svelte-tjrppy.svelte-tjrppy{display:block;width:33px;background-color:var(--color-primary-dark);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-tjrppy span.svelte-tjrppy.svelte-tjrppy:first-child{transform-origin:0% 0%}#menuToggle.svelte-tjrppy span.svelte-tjrppy.svelte-tjrppy:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-tjrppy input.svelte-tjrppy:checked~span.svelte-tjrppy{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-tjrppy input.svelte-tjrppy:checked~span.svelte-tjrppy:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-tjrppy input.svelte-tjrppy:checked~span.svelte-tjrppy:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-tjrppy.svelte-tjrppy.svelte-tjrppy{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:var(--color-dark);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-tjrppy a.svelte-tjrppy.svelte-tjrppy{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-tjrppy input.svelte-tjrppy:checked~ul.svelte-tjrppy{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerToggle = false;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `








<header class="${"col-12 px-0 mx-0 svelte-tjrppy"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-tjrppy"}"><a class="${"col-9 col-sm-8 col-lg-4 col-xl-3 d-flex justify-content-start px-0 align-items-center logo-container svelte-tjrppy"}" href="${"/"}"><img src="${"/img/logo-5.png"}" alt="${"oba-logo"}" class="${"ml-3 mr-0 mr-sm-4 p-2 p-lg-0 svelte-tjrppy"}">
            <div class="${"logo-text-container d-flex align-items-center svelte-tjrppy"}"><h1 class="${"logo-text px-2 px-sm-4 py-0 my-2 svelte-tjrppy"}">Oregon Bicycle <br class="${"svelte-tjrppy"}"> Adventures</h1></div></a>
        <nav class="${"col-5 d-none d-lg-flex justify-content-between align-items-center svelte-tjrppy"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-tjrppy"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-tjrppy"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-tjrppy"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-tjrppy"}">Contact</li></a></nav>
        
        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-tjrppy"}">
            
            <a href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}" class="${"svelte-tjrppy"}"><button class="${"btn btn-primary svelte-tjrppy"}">Book</button></a></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-tjrppy"}"><input type="${"checkbox"}" class="${"svelte-tjrppy"}"${add_attribute("checked", headerToggle, 1)}>
            <span class="${" svelte-tjrppy"}"></span>
            <span class="${" svelte-tjrppy"}"></span>
            <span class="${" svelte-tjrppy"}"></span>
            <ul id="${"menu"}" class="${" svelte-tjrppy"}"><a class="${"col-12 d-flex justify-content-center svelte-tjrppy"}" href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}"><button class="${"btn btn-secondary svelte-tjrppy"}">Book</button></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page-mobile" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-tjrppy"}">Tours</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page-mobile" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-tjrppy"}">Blog</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page-mobile" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-tjrppy"}">About</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-tjrppy"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page-mobile" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-tjrppy"}">Contact</li></a></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1dvjsas.svelte-1dvjsas,footer.svelte-1dvjsas>.col-12.svelte-1dvjsas{height:fit-content}footer.svelte-1dvjsas.svelte-1dvjsas{border-bottom:solid 20px black}i.svelte-1dvjsas.svelte-1dvjsas{font-size:1.5rem;color:var(black)}.img-container.svelte-1dvjsas.svelte-1dvjsas{box-shadow:none;width:100%}footer.svelte-1dvjsas.svelte-1dvjsas{background-color:var(--color-dark)}footer.svelte-1dvjsas p.svelte-1dvjsas,footer.svelte-1dvjsas i.svelte-1dvjsas{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer id="${"footer"}" class="${"col-12 vh-50 d-flex align-content-center pt-5 pb-3 svelte-1dvjsas"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5 svelte-1dvjsas"}"><div class="${"col-12 col-md-3 px-0 order-md-2"}"><div class="${"img-container svelte-1dvjsas"}"><img class="${"img"}" src="${"/img/logo-6.png"}"></div></div>
        <div class="${"col-12 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap"}"><p class="${"svelte-1dvjsas"}">Oregon Bicycle Adventures</p>
            
            <p class="${"svelte-1dvjsas"}">info@oregonbicycleadventures.com</p>
            <p class="${"svelte-1dvjsas"}">(503) 949-8766</p></div>
        <div class="${"col-12 col-md-3 px-0 pt-3 order-md-3 d-flex align-content-center flex-wrap justify-content-around"}"><i class="${"fa-brands fa-instagram svelte-1dvjsas"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-brands fa-facebook svelte-1dvjsas"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-solid fa-envelope svelte-1dvjsas"}" onclick="${"location.href='/contact';"}" style="${"cursor: pointer;"}"></i></div></div>
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
