import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{z-index:1;padding-top:2rem;padding-bottom:2rem;background:linear-gradient(rgba(37, 37, 37, 0.8), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{position:relative;height:100%;background-color:var(--color-primary)}.logo-container.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{list-style-type:none}nav.svelte-wj6h2y a.svelte-wj6h2y.svelte-wj6h2y,#menu.svelte-wj6h2y a.svelte-wj6h2y.svelte-wj6h2y{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{height:fit-content}.nav-item.svelte-wj6h2y li.svelte-wj6h2y.svelte-wj6h2y{text-decoration:none}.nav-item.svelte-wj6h2y li.svelte-wj6h2y.svelte-wj6h2y:after{content:'';display:block;width:0;height:2px;background-color:var(--color-highlight);transition:width 0.3s}a[aria-current='page'].svelte-wj6h2y>li.svelte-wj6h2y.svelte-wj6h2y:after{width:100%}a[aria-current='page-mobile'].svelte-wj6h2y>li.svelte-wj6h2y.svelte-wj6h2y:after{background-color:var(--color-highlight);content:'';display:block;width:100%;height:2px}.nav-item.svelte-wj6h2y:hover .svelte-wj6h2y.svelte-wj6h2y:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{max-height:100px;height:100%;position:relative;z-index:20}header.svelte-wj6h2y .btn.svelte-wj6h2y.svelte-wj6h2y{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-wj6h2y>a.svelte-wj6h2y.svelte-wj6h2y{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y,#menuToggle.svelte-wj6h2y input.svelte-wj6h2y.svelte-wj6h2y,#menuToggle.svelte-wj6h2y a.svelte-wj6h2y.svelte-wj6h2y,#menuToggle.svelte-wj6h2y input.svelte-wj6h2y.svelte-wj6h2y{display:none}@media screen and (max-width: 992px){header.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{background:none}header.svelte-wj6h2y>.col-12.svelte-wj6h2y.svelte-wj6h2y{background-color:var(--color-primary)}.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y::-webkit-scrollbar{width:0}#menuToggle.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-wj6h2y a.svelte-wj6h2y.svelte-wj6h2y{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-wj6h2y input.svelte-wj6h2y.svelte-wj6h2y{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-wj6h2y span.svelte-wj6h2y.svelte-wj6h2y{display:block;width:33px;background-color:var(--color-light);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-wj6h2y span.svelte-wj6h2y.svelte-wj6h2y:first-child{transform-origin:0% 0%}#menuToggle.svelte-wj6h2y span.svelte-wj6h2y.svelte-wj6h2y:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-wj6h2y input.svelte-wj6h2y:checked~span.svelte-wj6h2y{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-wj6h2y input.svelte-wj6h2y:checked~span.svelte-wj6h2y:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-wj6h2y input.svelte-wj6h2y:checked~span.svelte-wj6h2y:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-wj6h2y.svelte-wj6h2y.svelte-wj6h2y{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:rgb(74, 73, 73, 0.9);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-wj6h2y a.svelte-wj6h2y.svelte-wj6h2y{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-wj6h2y input.svelte-wj6h2y:checked~ul.svelte-wj6h2y{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerToggle = false;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `

<header class="${"col-12 px-0 mx-0 svelte-wj6h2y"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-wj6h2y"}"><a class="${"pr-5 d-flex justify-content-start px-0 align-items-center logo-container svelte-wj6h2y"}" href="${"/"}"><img src="${"/img/OBA_PrimaryLogo_WhiteType.png"}" alt="${"Oregon Bicycle Adventures Logo"}" class="${"ml-3 mr-0 p-2 p-sm-3 p-lg-2 svelte-wj6h2y"}"></a>
        <nav class="${"d-none d-lg-flex col-lg-6 col-xxl-5 justify-content-between align-items-center svelte-wj6h2y"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-wj6h2y"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/store") ? "page" : void 0,
    0
  )} href="${"/store"}"><li class="${"svelte-wj6h2y"}">Store</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-wj6h2y"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-wj6h2y"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-wj6h2y"}">Contact</li></a></nav>

        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-wj6h2y"}"><a href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}" class="${"svelte-wj6h2y"}"><button class="${"btn btn-primary svelte-wj6h2y"}">Book</button></a></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-wj6h2y"}"><input type="${"checkbox"}" class="${"svelte-wj6h2y"}"${add_attribute("checked", headerToggle, 1)}>
            <span class="${" svelte-wj6h2y"}"></span>
            <span class="${" svelte-wj6h2y"}"></span>
            <span class="${" svelte-wj6h2y"}"></span>
            <ul id="${"menu"}" class="${" svelte-wj6h2y"}"><a class="${"col-12 d-flex justify-content-center svelte-wj6h2y"}" href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}"><button class="${"btn btn-secondary svelte-wj6h2y"}">Book</button></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page-mobile" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-wj6h2y"}">Tours</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/store") ? "page-mobile" : void 0,
    0
  )} href="${"/store"}"><li class="${"svelte-wj6h2y"}">Store</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page-mobile" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-wj6h2y"}">Blog</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page-mobile" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-wj6h2y"}">About</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-wj6h2y"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page-mobile" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-wj6h2y"}">Contact</li></a></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-nhjtpw.svelte-nhjtpw,footer.svelte-nhjtpw>.col-12.svelte-nhjtpw{height:fit-content}footer.svelte-nhjtpw.svelte-nhjtpw{border-bottom:solid 20px var(--color-dark)}i.svelte-nhjtpw.svelte-nhjtpw{font-size:1.5rem;color:var(black)}.img-container.svelte-nhjtpw.svelte-nhjtpw{box-shadow:none;width:100%}footer.svelte-nhjtpw.svelte-nhjtpw{background-color:var(--color-primary)}footer.svelte-nhjtpw p.svelte-nhjtpw,footer.svelte-nhjtpw i.svelte-nhjtpw{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer id="${"footer"}" class="${"col-12 vh-50 d-flex align-content-center pt-5 pb-3 svelte-nhjtpw"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5 svelte-nhjtpw"}"><div class="${"col-12 col-md-3 px-0 order-md-2 d-flex justify-content-center flex-wrap"}"><a href="${"/"}" class="${"img-container col-10 svelte-nhjtpw"}"><img class="${"img"}" src="${"/img/OBA_PrimaryLogo_WhiteType.png"}" alt="${"Oregon Bicycle Adventures Logo"}"></a>
            </div>
        <div class="${"col-12 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap py-3"}"><p class="${"col-12 svelte-nhjtpw"}">Oregon Bicycle Adventures, LLC</p>
            <p class="${"col-12 svelte-nhjtpw"}">morgan@oregonbicycleadventures.com</p>
            <p class="${"col-12 svelte-nhjtpw"}">(503) 949-8766</p>
            <p class="${"col-12 svelte-nhjtpw"}">Bend, Oregon</p></div>
        <div class="${"col-12 col-md-3 px-0 pt-3 order-md-3 d-flex align-content-center flex-wrap justify-content-around"}"><i class="${"fa-brands fa-instagram svelte-nhjtpw"}" onclick="${"location.href='https://www.instagram.com/oregonbicycleadventures/';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-brands fa-facebook svelte-nhjtpw"}" onclick="${"location.href='https://www.facebook.com/profile.php?id=100092429499374';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-solid fa-envelope svelte-nhjtpw"}" onclick="${"location.href='/contact';"}" style="${"cursor: pointer;"}"></i></div></div>
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
