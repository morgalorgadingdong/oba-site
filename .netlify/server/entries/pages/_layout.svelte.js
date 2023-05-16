import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{z-index:1;padding-top:2rem;background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));width:100vw;position:absolute;top:0;left:0}.logo-container.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{position:relative;height:100%;background-color:var(--color-primary)}.logo-container.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l:before{content:'';position:absolute;top:0;left:-200%;height:100%;width:200%;background-color:var(--color-primary);z-index:-1}nav.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{list-style-type:none}nav.svelte-1g6oa6l a.svelte-1g6oa6l.svelte-1g6oa6l,#menu.svelte-1g6oa6l a.svelte-1g6oa6l.svelte-1g6oa6l{color:var(--color-light);font-family:var(--font-header);font-size:1.3rem;z-index:12;text-decoration:none;text-transform:uppercase}.nav-item.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{height:fit-content}.nav-item.svelte-1g6oa6l li.svelte-1g6oa6l.svelte-1g6oa6l{text-decoration:none}.nav-item.svelte-1g6oa6l li.svelte-1g6oa6l.svelte-1g6oa6l:after{content:'';display:block;width:0;height:2px;background-color:var(--color-highlight);transition:width 0.3s}a[aria-current='page'].svelte-1g6oa6l>li.svelte-1g6oa6l.svelte-1g6oa6l:after{width:100%}a[aria-current='page-mobile'].svelte-1g6oa6l>li.svelte-1g6oa6l.svelte-1g6oa6l:after{background-color:var(--color-highlight);content:'';display:block;width:100%;height:2px}.nav-item.svelte-1g6oa6l:hover .svelte-1g6oa6l.svelte-1g6oa6l:not(a[aria-current='page']):after{width:100%;transition:width 0.3s}img.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{max-height:100px;height:100%;position:relative;z-index:20}header.svelte-1g6oa6l .btn.svelte-1g6oa6l.svelte-1g6oa6l{font-size:1.2rem;padding:0.5rem 1.2rem}ul.svelte-1g6oa6l>a.svelte-1g6oa6l.svelte-1g6oa6l{text-decoration:none;color:#3e3f3c;font-size:16px;display:inline-block}#menuToggle.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l,#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l.svelte-1g6oa6l,#menuToggle.svelte-1g6oa6l a.svelte-1g6oa6l.svelte-1g6oa6l,#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l.svelte-1g6oa6l{display:none}@media screen and (max-width: 991px){header.svelte-1g6oa6l>.col-12.svelte-1g6oa6l.svelte-1g6oa6l{background-color:var(--color-primary)}.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l::-webkit-scrollbar{width:0}#menuToggle.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{display:block;-webkit-user-select:none;user-select:none;position:relative;padding-right:1rem}#menuToggle.svelte-1g6oa6l a.svelte-1g6oa6l.svelte-1g6oa6l{text-decoration:none;transition:color 0.3s ease;display:block;color:var(--color-light)}#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l.svelte-1g6oa6l{display:block;width:40px;height:32px;position:absolute;top:-7px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#menuToggle.svelte-1g6oa6l span.svelte-1g6oa6l.svelte-1g6oa6l{display:block;width:33px;background-color:var(--color-light);height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease}#menuToggle.svelte-1g6oa6l span.svelte-1g6oa6l.svelte-1g6oa6l:first-child{transform-origin:0% 0%}#menuToggle.svelte-1g6oa6l span.svelte-1g6oa6l.svelte-1g6oa6l:nth-last-child(2){transform-origin:0% 100%}#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l:checked~span.svelte-1g6oa6l{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background-color:var(--color-light)}#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l:checked~span.svelte-1g6oa6l:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l:checked~span.svelte-1g6oa6l:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#menu.svelte-1g6oa6l.svelte-1g6oa6l.svelte-1g6oa6l{position:absolute;right:0;top:0;width:100vw;padding:25px;padding-top:125px;background:var(--color-dark);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(100%, 0);transition:all 0.6s ease;z-index:-100}#menu.svelte-1g6oa6l a.svelte-1g6oa6l.svelte-1g6oa6l{padding:10px 0;z-index:1;position:relative}#menuToggle.svelte-1g6oa6l input.svelte-1g6oa6l:checked~ul.svelte-1g6oa6l{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let headerToggle = false;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `








<header class="${"col-12 px-0 mx-0 svelte-1g6oa6l"}"><div class="${"col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center svelte-1g6oa6l"}"><a class="${"pr-5 d-flex justify-content-start px-0 align-items-center logo-container svelte-1g6oa6l"}" href="${"/"}">
            <img src="${"/img/OBA_PrimaryLogo_WhiteType.png"}" alt="${"oba-logo"}" class="${"ml-3 mr-0 p-2 p-sm-3 p-lg-2 svelte-1g6oa6l"}"></a>
        <nav class="${"col-5 d-none d-lg-flex justify-content-between align-items-center svelte-1g6oa6l"}"><a class="${"nav-item d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-1g6oa6l"}">Tours</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1g6oa6l"}">Blog</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1g6oa6l"}">About</li></a>
            <a class="${"nav-item d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1g6oa6l"}">Contact</li></a></nav>
        
        <div class="${"col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center svelte-1g6oa6l"}">
            
            <a href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}" class="${"svelte-1g6oa6l"}"><button class="${"btn btn-primary svelte-1g6oa6l"}">Book</button></a></div>
        <div id="${"menuToggle"}" class="${"px-3 d-lg-none svelte-1g6oa6l"}"><input type="${"checkbox"}" class="${"svelte-1g6oa6l"}"${add_attribute("checked", headerToggle, 1)}>
            <span class="${" svelte-1g6oa6l"}"></span>
            <span class="${" svelte-1g6oa6l"}"></span>
            <span class="${" svelte-1g6oa6l"}"></span>
            <ul id="${"menu"}" class="${" svelte-1g6oa6l"}"><a class="${"col-12 d-flex justify-content-center svelte-1g6oa6l"}" href="${"https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"}"><button class="${"btn btn-secondary svelte-1g6oa6l"}">Book</button></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/tours") ? "page-mobile" : void 0,
    0
  )} href="${"/tours"}"><li class="${"svelte-1g6oa6l"}">Tours</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page-mobile" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1g6oa6l"}">Blog</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page-mobile" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1g6oa6l"}">About</li></a>
                <a class="${"d-flex justify-content-center align-items-center svelte-1g6oa6l"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page-mobile" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1g6oa6l"}">Contact</li></a></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-nhjtpw.svelte-nhjtpw,footer.svelte-nhjtpw>.col-12.svelte-nhjtpw{height:fit-content}footer.svelte-nhjtpw.svelte-nhjtpw{border-bottom:solid 20px var(--color-dark)}i.svelte-nhjtpw.svelte-nhjtpw{font-size:1.5rem;color:var(black)}.img-container.svelte-nhjtpw.svelte-nhjtpw{box-shadow:none;width:100%}footer.svelte-nhjtpw.svelte-nhjtpw{background-color:var(--color-primary)}footer.svelte-nhjtpw p.svelte-nhjtpw,footer.svelte-nhjtpw i.svelte-nhjtpw{color:var(--color-light)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer id="${"footer"}" class="${"col-12 vh-50 d-flex align-content-center pt-5 pb-3 svelte-nhjtpw"}"><div class="${"col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5 svelte-nhjtpw"}"><div class="${"col-12 col-md-3 px-0 order-md-2 d-flex justify-content-center flex-wrap"}"><a href="${"/"}" class="${"img-container col-10 svelte-nhjtpw"}"><img class="${"img"}" src="${"/img/OBA_PrimaryLogo_WhiteType.png"}"></a>
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
