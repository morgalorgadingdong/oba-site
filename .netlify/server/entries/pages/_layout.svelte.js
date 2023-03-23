import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{z-index:1;padding-top:2rem;background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{position:relative;height:100%;background-color:var(--color-primary)}.logo-text-container.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{position:relative;height:100%;padding:0.8rem 0;background-color:var(--color-primary)}.logo-text.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{font-size:30px;font-weight:400;color:var(--color-light);font-family:var(--font-logo);border-left:solid 3px var(--color-primary-dark);padding:0.8rem 1.5rem;background-color:var(--color-primary);margin:0;z-index:12;line-height:30px;text-decoration:none}a.col-9.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{text-decoration:none}.logo-container.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{list-style-type:none}nav.svelte-1aip3ya a.svelte-1aip3ya.svelte-1aip3ya,#menu.svelte-1aip3ya a.svelte-1aip3ya.svelte-1aip3ya{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{height:fit-content}.nav-item.svelte-1aip3ya li.svelte-1aip3ya.svelte-1aip3ya{text-decoration:none}.nav-item.svelte-1aip3ya li.svelte-1aip3ya.svelte-1aip3ya:after{content:'';display:block;width:0;height:2px;background-color:var(--color-dark);transition:width 0.3s}a[aria-current='page'].svelte-1aip3ya>li.svelte-1aip3ya.svelte-1aip3ya:after{width:100%}.nav-item.svelte-1aip3ya:hover .svelte-1aip3ya.svelte-1aip3ya:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{aspect-ratio:1/1;max-height:100px;height:100%;position:relative;z-index:20}header.svelte-1aip3ya .btn.svelte-1aip3ya.svelte-1aip3ya{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-1aip3ya>a.svelte-1aip3ya.svelte-1aip3ya{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya,#menuToggle.svelte-1aip3ya input.svelte-1aip3ya.svelte-1aip3ya,#menuToggle.svelte-1aip3ya a.svelte-1aip3ya.svelte-1aip3ya,#menuToggle.svelte-1aip3ya input.svelte-1aip3ya.svelte-1aip3ya{display:none}@media screen and (max-width: 991px){header.svelte-1aip3ya>.col-12.svelte-1aip3ya.svelte-1aip3ya{background-color:var(--color-primary)}.logo-text.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{font-size:20px}.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya::-webkit-scrollbar{width:0}#menuToggle.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-1aip3ya a.svelte-1aip3ya.svelte-1aip3ya{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-1aip3ya input.svelte-1aip3ya.svelte-1aip3ya{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-1aip3ya span.svelte-1aip3ya.svelte-1aip3ya{display:block;width:33px;background-color:var(--color-primary-dark);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-1aip3ya span.svelte-1aip3ya.svelte-1aip3ya:first-child{transform-origin:0% 0%}#menuToggle.svelte-1aip3ya span.svelte-1aip3ya.svelte-1aip3ya:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-1aip3ya input.svelte-1aip3ya:checked~span.svelte-1aip3ya{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-1aip3ya input.svelte-1aip3ya:checked~span.svelte-1aip3ya:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-1aip3ya input.svelte-1aip3ya:checked~span.svelte-1aip3ya:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-1aip3ya.svelte-1aip3ya.svelte-1aip3ya{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:var(--color-dark);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-1aip3ya a.svelte-1aip3ya.svelte-1aip3ya{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-1aip3ya input.svelte-1aip3ya:checked~ul.svelte-1aip3ya{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `







<header class="${"col-12 px-0 mx-0 svelte-1aip3ya"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-1aip3ya"}"><a class="${"col-9 col-sm-8 col-lg-4 col-xl-3 d-flex justify-content-start px-0 align-items-center logo-container svelte-1aip3ya"}" href="${"/"}"><a href="${"/"}" class="${"ml-3 mr-2 mr-sm-4 py-2 svelte-1aip3ya"}"><img src="${"/img/logo-5.png"}" alt="${"oba-logo"}" class="${"svelte-1aip3ya"}"></a>
            <div class="${"logo-text-container d-flex align-items-center svelte-1aip3ya"}"><h1 class="${"logo-text px-2 px-sm-4 py-2 svelte-1aip3ya"}">Oregon Bicycle <br class="${"svelte-1aip3ya"}"> Adventures, llc</h1></div></a>
        <nav class="${"col-5 d-none d-lg-flex justify-content-between align-items-center svelte-1aip3ya"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-1aip3ya"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1aip3ya"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1aip3ya"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1aip3ya"}">Contact</li></a></nav>
        
        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-1aip3ya"}">
            <button class="${"btn btn-primary svelte-1aip3ya"}">Book</button></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-1aip3ya"}"><input type="${"checkbox"}" class="${"svelte-1aip3ya"}">
            <span class="${" svelte-1aip3ya"}"></span>
            <span class="${" svelte-1aip3ya"}"></span>
            <span class="${" svelte-1aip3ya"}"></span>
            <ul id="${"menu"}" class="${" svelte-1aip3ya"}"><a class="${"d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}">Tours</a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}">Blog</a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}">About</a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1aip3ya"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}">Contact</a></ul></div></div>
    

</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-34dbx6.svelte-34dbx6,footer.svelte-34dbx6>.col-12.svelte-34dbx6{height:fit-content}i.svelte-34dbx6.svelte-34dbx6{font-size:1.5rem;color:var(black)}.img-container.svelte-34dbx6.svelte-34dbx6{box-shadow:none;width:100%}footer.svelte-34dbx6.svelte-34dbx6{background-color:var(--color-dark)}footer.svelte-34dbx6 p.svelte-34dbx6,footer.svelte-34dbx6 i.svelte-34dbx6{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"col-12 vh-50 d-flex align-content-center py-5 svelte-34dbx6"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center py-5 svelte-34dbx6"}"><div class="${"col-2 col-md-3 px-0 order-md-2"}"><div class="${"img-container svelte-34dbx6"}"><img class="${"img"}" src="${"/img/logo-6.png"}"></div></div>
        <div class="${"col-7 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap"}"><p class="${"svelte-34dbx6"}">Oregon Bicycle Adventures</p>
            
            <p class="${"svelte-34dbx6"}">info@oregonbicycleadventures.com</p>
            <p class="${"svelte-34dbx6"}">(503) 949-8766</p></div>
        <div class="${"col-2 col-md-3 px-0 order-md-3 d-flex align-content-center flex-wrap justify-content-around"}"><i class="${"fa-brands fa-instagram svelte-34dbx6"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-brands fa-facebook svelte-34dbx6"}" onclick="${"location.href='';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-solid fa-envelope svelte-34dbx6"}" onclick="${"location.href='/contact';"}" style="${"cursor: pointer;"}"></i></div></div>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-c5n8j1{z-index:0}.test.svelte-c5n8j1{z-index:1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app"}"><main class="${"svelte-c5n8j1"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({ class: "test svelte-c5n8j1" }) : ``}
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>
	
</div>`;
});
export {
  Layout as default
};
