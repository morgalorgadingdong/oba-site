<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import cartImg from '$lib/img/cart.png';
    
    /**
     * @type {any}
     */
    let headerToggle = false

    function closeMenu() {
        headerToggle = false
    }



</script>

<svelte:body on:click={closeMenu} />

<header class="col-12 px-0 mx-0">
    <div class="col-12 d-flex justify-content-between px-0 px-lg-5 align-items-center">
        <a class="pr-5 d-flex justify-content-start px-0 align-items-center logo-container" href="/">
            <img src="/img/OBA_PrimaryLogo_WhiteType.png" alt="Oregon Bicycle Adventures Logo" class="ml-3 mr-0 p-2 p-sm-3 p-lg-2" />
        </a>
        <nav class="d-none d-lg-flex col-lg-6 col-xxl-5 justify-content-between align-items-center">
            <a class="nav-item d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/tours') ? 'page' : undefined} href="/tours"><li>Tours</li></a>
            <a class="nav-item d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/store') ? 'page' : undefined} href="/store"><li>Store</li></a>
            <!-- <a class="nav-item d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined} href="/blog"><li>Blog</li></a> -->
            <a class="nav-item d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined} href="/about"><li>About</li></a>
            <a class="nav-item d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined} href="/contact"><li>Contact</li></a>
        </nav>

        <div class="col-1 col-xxl-3 d-none d-lg-flex justify-content-end align-items-center align-content-center">
            <a class="" href="https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"><button class="btn">Book</button></a>
        </div>
        <div id="menuToggle" class="px-3 d-lg-none">
            <input type="checkbox" bind:checked={headerToggle}/>
            <span class=""></span>
            <span class=""></span>
            <span class=""></span>
            <ul id="menu" class="">
                <a class="col-12 d-flex justify-content-center" href="https://fareharbor.com/embeds/book/oregonbicycleadventures/?full-items=yes"><button class="btn btn-secondary">Book</button></a>
                <a class="d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/tours') ? 'page-mobile' : undefined} href="/tours"><li>Tours</li></a>
                <a class="d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/store') ? 'page-mobile' : undefined} href="/store"><li>Store</li></a>
                <!-- <a class="d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/blog') ? 'page-mobile' : undefined} href="/blog"><li>Blog</li></a> -->
                <a class="d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/about') ? 'page-mobile' : undefined} href="/about"><li>About</li></a>
                <a class="d-flex justify-content-center align-items-center" aria-current={$page.url.pathname.startsWith('/contact') ? 'page-mobile' : undefined} href="/contact"><li>Contact</li></a>
            </ul>
        </div>
    </div>
</header>

<style>
    .icon {
        max-width: 23px;
    }
    
    header {

        z-index: 1;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background:  linear-gradient(rgba(37, 37, 37, 0.8), rgba(255, 255, 255, 0));
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;

    }

    .logo-container {
        position: relative;
        height: 100%;
        background-color: var(--color-primary);
        border-radius: 0 0.25rem 0.25rem 0;
    }

    .logo-text-container {
        position: relative;
        height: 100%;
        padding: 0.8rem 0;
        background-color: var(--color-primary);
    }

    .logo-text {
        font-size: 30px;
        font-weight: 400;
        color: var(--color-light);
        font-family: var(--font-logo);
        padding: 0.8rem 1.5rem;
        background-color: var(--color-primary);
        margin: 0;
        z-index: 12;
        line-height: 30px;
        text-decoration: none;
    }

    a.col-9 {
        text-decoration: none;
    }

    .logo-container:before {
        content: '';
        position: absolute;
        top: 0;
        left: -200%;
        height: 100%;
        width: 200%;
        background-color: var(--color-primary);
        z-index: -1;
    }



    nav {
        list-style-type: none;
    }

    nav a, #menu a {
        color: var(--color-light);
        font-family: var(--font-header);
        font-size: 1.3rem;
        z-index: 12;
        text-decoration: none;
        text-transform: uppercase;
    }


    .nav-item {
        height: fit-content;
    }

    .nav-item li {
        text-decoration: none;
    }

    

    .nav-item li:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: var(--color-highlight);
        transition: width 0.3s;
    }

    a[aria-current='page'] > li:after {
        width: 100%;
    }
    
    a[aria-current='page-mobile'] > li:after {
        background-color: var(--color-highlight);
        content: '';
        display: block;
        width: 100%;
        height: 2px;
    }

    .nav-item:hover :not(a[aria-current='page']):after {
        width: 100%;
        transition: width 0.3s;
    }

    .img-container {
        box-shadow: none;
    }

    img {
        max-height: 100px;
        height: 100%;
        position: relative;
        z-index: 20;
    }

    header .btn {
        font-size: 1.2rem;
        padding: 0.5rem 1.2rem;
    }

    a.mobile-menu-item[aria-current='page'] > li {
        color: rgb(5, 195, 249, 1);
    }

    a.mobile-menu-item {
        border-bottom: none;
    }

    ul > a {
        text-decoration: none;
        color: #3e3f3c;
        font-size: 16px;
        display: inline-block;
    }

    nav > ul > a:hover {
        border-bottom: solid 5px rgba(0, 0, 0, 1);
        transition: width 0.5s ease;
        transition: background-color 1s ease;
    }

    #menuToggle, #menuToggle input, #menuToggle a, #menuToggle input {
        display: none;
        }


@media screen and (max-width: 992px) {
  header {
    background: none;
  }
    header > .col-12 {
    background-color: var(--color-primary);
  }
  
  .logo-text {
    font-size: 26px;
  }

    ::-webkit-scrollbar {
    width: 0;
  }
  
  #menuToggle
  {
  /* right: 0; */
  display: block;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  padding-right: 1rem;
  /* transform: translate(0px, 70px); */
  }

  #menuToggle a
  {
  text-decoration: none;
  /* color: #232323; */
  transition: color 0.3s ease;
  display: block;
  color: var(--color-light);
  }

  #menuToggle input
  {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 3; /* and place it over the hamburger */
  -webkit-touch-callout: none;
  }

  /*
  * Just a quick hamburger
  */
  #menuToggle span
  {
  display: block;
  width: 33px;
  background-color: var(--color-light);
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  border-radius: 3px;
  z-index: 2;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  }

  #menuToggle span:first-child
  {
  transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2)
  {
  transform-origin: 0% 100%;
  }

  /* 
  * Transform all the slices of hamburger
  * into a crossmark.
  */
  #menuToggle input:checked ~ span
  {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background-color: var(--color-light);
  }

  /*
  * But let's hide the middle one.
  */
  #menuToggle input:checked ~ span:nth-last-child(3)
  {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
  * Ohyeah and the last one should go the other direction
  */
  #menuToggle input:checked ~ span:nth-last-child(2)
  {
  transform: rotate(-45deg) translate(0, -1px);
  }

  /*
  * Make this absolute positioned
  * at the top left of the screen
  */
  #menu
  {
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  /* width: 250px;
  margin: -100px 0 0 -50px; */
  padding: 25px;
  padding-top: 125px;
  background: rgb(74, 73, 73, 0.9);
  /* opacity: 0; */
  /* visibility: hidden; */
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: all 0.6s ease;
  z-index: -100;
  }

  #menu a
  {
  padding: 10px 0;
  /* font-size: 22px; */
  z-index: 1;
  position: relative; 
  }

  /*
  * And let's slide it in from the left
  */
  #menuToggle input:checked ~ ul
  {
    /* -webkit-animation: slide-in-right 0.5s both;
    animation: slide-in-right 0.5s both;
    opacity: 1;
    visibility: visible; */
    transform: none;
  }
}

</style>
