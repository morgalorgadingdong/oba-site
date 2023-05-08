import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-741b8d.svelte-741b8d.svelte-741b8d{z-index:1;padding-top:2rem;background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-741b8d.svelte-741b8d.svelte-741b8d{position:relative;height:100%;background-color:var(--color-primary)}.logo-container.svelte-741b8d.svelte-741b8d.svelte-741b8d:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-741b8d.svelte-741b8d.svelte-741b8d{list-style-type:none}nav.svelte-741b8d a.svelte-741b8d.svelte-741b8d,#menu.svelte-741b8d a.svelte-741b8d.svelte-741b8d{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-741b8d.svelte-741b8d.svelte-741b8d{height:fit-content}.nav-item.svelte-741b8d li.svelte-741b8d.svelte-741b8d{text-decoration:none}.nav-item.svelte-741b8d li.svelte-741b8d.svelte-741b8d:after{content:'';display:block;width:0;height:2px;background-color:var(--color-dark);transition:width 0.3s}a[aria-current='page'].svelte-741b8d>li.svelte-741b8d.svelte-741b8d:after{width:100%}a[aria-current='page-mobile'].svelte-741b8d>li.svelte-741b8d.svelte-741b8d:after{background-color:var(--color-light);content:'';display:block;width:100%;height:2px}.nav-item.svelte-741b8d:hover .svelte-741b8d.svelte-741b8d:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-741b8d.svelte-741b8d.svelte-741b8d{max-height:100px;height:100%;position:relative;z-index:20}header.svelte-741b8d .btn.svelte-741b8d.svelte-741b8d{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-741b8d>a.svelte-741b8d.svelte-741b8d{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-741b8d.svelte-741b8d.svelte-741b8d,#menuToggle.svelte-741b8d input.svelte-741b8d.svelte-741b8d,#menuToggle.svelte-741b8d a.svelte-741b8d.svelte-741b8d,#menuToggle.svelte-741b8d input.svelte-741b8d.svelte-741b8d{display:none}@media screen and (max-width: 991px){header.svelte-741b8d>.col-12.svelte-741b8d.svelte-741b8d{background-color:var(--color-primary)}.svelte-741b8d.svelte-741b8d.svelte-741b8d::-webkit-scrollbar{width:0}#menuToggle.svelte-741b8d.svelte-741b8d.svelte-741b8d{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-741b8d a.svelte-741b8d.svelte-741b8d{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-741b8d input.svelte-741b8d.svelte-741b8d{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-741b8d span.svelte-741b8d.svelte-741b8d{display:block;width:33px;background-color:var(--color-light);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-741b8d span.svelte-741b8d.svelte-741b8d:first-child{transform-origin:0% 0%}#menuToggle.svelte-741b8d span.svelte-741b8d.svelte-741b8d:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-741b8d input.svelte-741b8d:checked~span.svelte-741b8d{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-741b8d input.svelte-741b8d:checked~span.svelte-741b8d:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-741b8d input.svelte-741b8d:checked~span.svelte-741b8d:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-741b8d.svelte-741b8d.svelte-741b8d{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:var(--color-dark);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-741b8d a.svelte-741b8d.svelte-741b8d{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-741b8d input.svelte-741b8d:checked~ul.svelte-741b8d{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerToggle = false;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `








<header class="${"col-12 px-0 mx-0 svelte-741b8d"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-741b8d"}"><a class="${"pr-5 d-flex justify-content-start px-0 align-items-center logo-container svelte-741b8d"}" href="${"/"}">
            <img src="${"/img/OBA_PrimaryLogo_WhiteType.png"}" alt="${"oba-logo"}" class="${"ml-3 mr-0 p-2 p-sm-3 p-lg-2 svelte-741b8d"}"></a>
        <nav class="${"col-5 d-none d-lg-flex justify-content-between align-items-center svelte-741b8d"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-741b8d"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-741b8d"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-741b8d"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-741b8d"}">Contact</li></a></nav>
        
        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-741b8d"}">
            
            <a href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}" class="${"svelte-741b8d"}"><button class="${"btn btn-primary svelte-741b8d"}">Book</button></a></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-741b8d"}"><input type="${"checkbox"}" class="${"svelte-741b8d"}"${add_attribute("checked", headerToggle, 1)}>
            <span class="${" svelte-741b8d"}"></span>
            <span class="${" svelte-741b8d"}"></span>
            <span class="${" svelte-741b8d"}"></span>
            <ul id="${"menu"}" class="${" svelte-741b8d"}"><a class="${"col-12 d-flex justify-content-center svelte-741b8d"}" href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}"><button class="${"btn btn-secondary svelte-741b8d"}">Book</button></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page-mobile" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-741b8d"}">Tours</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page-mobile" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-741b8d"}">Blog</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page-mobile" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-741b8d"}">About</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-741b8d"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page-mobile" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-741b8d"}">Contact</li></a></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-nhjtpw.svelte-nhjtpw,footer.svelte-nhjtpw>.col-12.svelte-nhjtpw{height:fit-content}footer.svelte-nhjtpw.svelte-nhjtpw{border-bottom:solid 20px var(--color-dark)}i.svelte-nhjtpw.svelte-nhjtpw{font-size:1.5rem;color:var(black)}.img-container.svelte-nhjtpw.svelte-nhjtpw{box-shadow:none;width:100%}footer.svelte-nhjtpw.svelte-nhjtpw{background-color:var(--color-primary)}footer.svelte-nhjtpw p.svelte-nhjtpw,footer.svelte-nhjtpw i.svelte-nhjtpw{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer id="${"footer"}" class="${"col-12 vh-50 d-flex align-content-center pt-5 pb-3 svelte-nhjtpw"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5 svelte-nhjtpw"}"><div class="${"col-12 col-md-3 px-0 order-md-2 d-flex justify-content-center flex-wrap"}"><div class="${"img-container col-10 svelte-nhjtpw"}"><img class="${"img"}" src="${"/img/OBA_PrimaryLogo_WhiteType.png"}"></div>
            </div>
        <div class="${"col-12 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap py-3"}"><p class="${"svelte-nhjtpw"}">Oregon Bicycle Adventures, LLC</p>
            <p class="${"svelte-nhjtpw"}">info@oregonbicycleadventures.com</p>
            <p class="${"svelte-nhjtpw"}">(503) 949-8766</p></div>
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
