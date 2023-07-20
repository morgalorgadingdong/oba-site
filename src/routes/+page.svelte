<script>
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import { browser } from '$app/environment';
    import '@splidejs/svelte-splide/css';
    import TourCard from "./TourCard.svelte";
    import { tours } from "./tours";
</script>

<div class="parralax-container">
    <div class="hero col-12 d-flex flex-column justify-content-center">
        <div class="img-container">
            <div class="hero-img"></div>
            <!-- <img class="hero-img img" src="./img/hero-7.jpg"/> -->
        </div>
        <div id="hero-tagline-container" class="d-flex justify-content-start justify-content-sm-center flex-wrap p-3 pb-5">
            <h1 class="hero-tagline col-12 mb-4">Discover the best of Oregon on two wheels.</h1>
            <a href="/tours"><button class="btn btn-primary">Tours</button></a>
        </div>
    </div>
</div>
<!-- <div class="hero-spacer"></div> -->

<!-- <div class="col-12 d-flex justify-content-center cta-container">
    <div class="d-flex justify-content-center flex-wrap px-3 py-3 cta">
        <h3 class="hero-tagline col-12">Our first tour is now live!</h3>
        <button class="btn btn-secondary">Learn More</button>
    </div>
</div> -->


<section id="tours" class="col-12 my-0 py-5 d-flex justify-content-center px-0 flex-wrap">
    <!-- <h2 class="col-12">Tours</h2> -->
    <div class="d-flex justify-content-center justify-content-xl-start col-12 px-0 flex-wrap">
        {#each tours as tour}
            {#if tour.featured == true}    
                <TourCard { tour } />
            {/if}
        {/each}
    </div>
    <a href="/tours" class="mt-5"><button class="btn btn-primary">All Tours</button></a>
</section>

<section id="why-choose-us" class="col-12 d-flex justify-content-center py-5 my-0">
    <div class="col-12 col-md-10 d-flex justify-content-between flex-wrap">
        <h2 class="col-12 text-left">Why book with us</h2>
        <div class="col-12 col-md-3">
            <h4>Locally Based</h4>
            <p>Oregon Bicycle Adventures is proudly locally based out of Bend, Oregon. As lifelong Oregonians, We have decades of experience exploring the hidden gems of Oregon. Our insider knowledge of the state allows us to create unique and unforgettable experiences that showcase the best of what Oregon has to offer.</p>
        </div>
        <div class="col-12 col-md-3">
            <h4>Small Groups</h4>
            <p>At Oregon Bicycle Adventures, we believe that smaller is better. We keep our group sizes intentionally small, with a maximum of 4 riders per guide. This allows us to provide a more personalized experience, catered to the needs and interests of each individual rider.</p>
        </div>
        <div class="col-12 col-md-3">
            <h4>Expert Guidance</h4>
            <p>With experience in guiding, outdoor coaching, and multi-month bicycle tours, we are experts in the field of bicycle touring. From route planning to bike maintenance, we provide the guidance and support needed to ensure that every trip is safe, enjoyable, and memorable.</p>
        </div>
    </div>

</section>

<section id="inspirational-section" class="col-12 vh-40 d-flex justify-content-start align-items-end mt-0 mb-0 py-sm-5 py-2">
    <!-- <div class="img-container">
        <img class="img" src="./img/test.jpg" />
    </div> -->
    <div class="col-12 col-md-10">
        <span class="font-hero">"Four wheels move the body, two wheels move the soul"</span>
    </div>
    
</section>

<!-- <section>
    <Splide aria-label="Client Testimonials" class="z-reset" hasTrack={ false } options={ {
        type: 'loop',
        perPage: 2.5,
        breakpoints: {
            768: {
                perPage: 1.5,
            },
            576: {
                perPage: 1,
            }
        },
        focus: 'center',
        drag: 'free',
        snap: true
      } }>
      <SplideTrack>
            <SplideSlide class="my-3 mt-0">
                <div class="flexCenterH flexColumn testimonialContainer card">
                    <i class="fa-solid fa-quote-left"></i>
                    <i class="fa-solid fa-quote-right"></i>
                    <p class="onehundo testimonialTextLong">"Hey, take a look at the earthlings. Goodbye! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Did he just throw my cat out of the window? Jaguar shark! So tell me - does it really exist? You really think you can fly that thing?"</p>
                    
                    <br>
                    <p class="onehundo testimonialText">Heather, Salem</p>
                </div>
            </SplideSlide>
            <SplideSlide class="my-3 mt-0">
                <div class="flexCenterH flexColumn testimonialContainer card">
                    <i class="fa-solid fa-quote-left"></i>
                    <i class="fa-solid fa-quote-right"></i>
                    <p class="onehundo testimonialTextLong">"Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Yes, Yes, without the oops! So you two dig up, dig up dinosaurs? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend."</p>
                    
                    <br>
                    <p class="testimonialText">Devon, Keizer</p>
                </div>
            </SplideSlide>
            <SplideSlide class="my-3 mt-0">
                <div class="flexCenterH flexColumn testimonialContainer card">
                    <i class="fa-solid fa-quote-left"></i>
                    <i class="fa-solid fa-quote-right"></i>
                    <p class="onehundo testimonialTextLong">"Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Remind me to thank John for a lovely weekend. God help us, we're in the hands of engineers. God help us, we're in the hands of engineers. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs."</p>
                    
                    <br>
                    <p class="testimonialText">Devon, Keizer</p>
                </div>
            </SplideSlide>
            
        </SplideTrack>
        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
            <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
        </div>
        </Splide>
</section> -->


<style>
    #hero-tagline-container {
        padding-top: 30rem !important;
    }
    section {
        
        margin: 1rem 0;
    }

    .hero-img {
        position: fixed;
    }
    

    .parralax-container > .hero > .img-container {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

    }

    /* .hero-img {
        background-image: url(../img/hero-7.jpg);
        background-size: cover;
        background-position: center;
        width: 100%;
    } */
    
    #hero-tagline-container > h1 {
        font-family: var(--font-hero);
        /* font-size: 3rem; */
        /* font-weight: 700; */
        color: var(--color-light);
        /* text-shadow: 2px 2px 4px rgba(0,0,0,0.5); */
        opacity: 1;
    }

    #hero-tagline-container a {
        z-index: 1;
    }



    section#tours {
        padding: 0;
        background-color: white;
    }

   

    .hero-tagline {
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        opacity: 1;
    }

    /* .trip-preview-container h4 {
        width: 100%;
        text-align: center;
        transition: all var(--animation-duration) ease-in-out;
        color: var(--color-light);
    } */




    #why-choose-us {
        background-color: var(--color-background);
        color: var(--color-light);
    }

    #why-choose-us h2 {
        font-family: var(--font-header);
        font-size: 2rem;
        color: var(--color-light);
        opacity: 1;
        text-transform: uppercase;
    }

    #inspirational-section {
        background-image: url('$lib/img/hero-3.jpg');
        background-position: center;
        background-size: cover;
    }

    #inspirational-section span {
        color: var(--color-light);
        font-size: 40px;
    }

    /* .trip-preview-img-container:hover h4 {
        width: 100%;
        transition: all var(--animation-duration) ease-in-out;
    } */

    /* .trip-preview-container:hover .trip-preview-text-container, .trip-preview-container:focus .trip-preview-text-container  {
        bottom: 0%;
        transition: all var(--animation-duration) ease-in-out;
        cursor: pointer;
    } */

    @media (max-width: 576px) {
        h1 {
            text-align: left;
        }
    }
</style>