<script>
	import { tours } from "../../tours"; 
    export let data;
    import Calendar from "../../Calendar.svelte";
    import { onMount } from "svelte";
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    //  export let blog;
    //  export const slug = blog;
    
    /**
   * @type {{ id: number; title: string; nickname: string; type: string; duration: string; difficulty: string; difficultyRating: number; price: string; ages: string; 
  //  export let blog;
  //  export const slug = blog;
  distance: string; //  export const slug = blog;
   //  export const slug = blog;
  elevationGain: string; ebikes: boolean; featured: boolean; featuredIndex: number; description: { content: string; // if (blog.Number <= blogs.length+1) {
   }[]; whatToBring: string; mettingLocation: string; importantInfo: string; whatsIncluded: string; highlights: string[]; reviews: { name: string; rating: number; review: string; }[]; pics: number; meals: boolean; lodging: boolean; bannerAlt: string; calendarURL: string; } | { id: number; title: string; nickname: string; type: string; duration: string; difficulty: string; price: string; ages: string; ebikes: boolean; featured: boolean; featuredIndex: number; description: { content: string; }[]; pics: number; meals: boolean; lodging: boolean; bannerAlt: string; calendarURL: string; difficultyRating?: undefined; 
  //  export let blog;
  //  export const slug = blog;
  distance?: undefined; //  export const slug = blog;
   //  export const slug = blog;
  elevationGain?: undefined; whatToBring?: undefined; mettingLocation?: undefined; importantInfo?: undefined; whatsIncluded?: undefined; highlights?: undefined; reviews?: undefined; } | { id: number; title: string; nickname: string; type: string; duration: string; difficulty: string; price: string; ebikes: boolean; featured: boolean; featuredIndex: number; description: { content: string; }[]; pics: number; meals: boolean; lodging: boolean; bannerAlt: string; calendarURL: string; difficultyRating?: undefined; ages?: undefined; 
  //  export let blog;
  //  export const slug = blog;
  distance?: undefined; //  export const slug = blog;
   //  export const slug = blog;
  elevationGain?: undefined; whatToBring?: undefined; mettingLocation?: undefined; importantInfo?: undefined; whatsIncluded?: undefined; highlights?: undefined; reviews?: undefined; }}
   */
    let tour
    tours.forEach(item => {
        if (item.title == data.tourName) {
            tour = item;
            console.log(tour)
        }
    })

    /**
   * @type {string}
   */
    let url = tour.calendarURL;
    // onMount(async () => {
    //     url = tour.calendarURL;
    // })


    // let imgSrccover = `../img/blogs/${blog.Number}. ${blog.Title}/blog${blog.id}-cover.jpg`;
    let imgSrcCover = `../../img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
    let currentImg = 1;

    
    // let testBlog = blogs[1]
    // let prevBlog
    // let nextBlog
    // if (blog.Number != 1) {
    //     prevBlog = blogs[blog.Number - 1]
    // }
    // if (blog.Number <= blogs.length+1) {
    //     nextBlog = blogs[blog.Number + 1]
    // }

</script>



<section>
    <div id="" class="vh-60 hero col-12 d-flex flex-column justify-content-end">
        <div class="img-container">
            <div class="img-overlay"></div>
            <img src = {imgSrcCover} alt="{tour.coverAlt}" class="hero-img img" />
        </div>
        


        <div id="hero-tagline-container" class="d-flex justify-content-start flex-wrap p-3 pb-3 pb-md-5">
            <h1 class="hero-tagline font-logo col-12 col-lg-8 text-left text-md-center">{tour.title}</h1>
        </div>
    </div>
    <div class="d-flex align-items-start flex-wrap">
        
        <div id="tour-info-container" class="col-12 col-md-7 col-lg-8 d-flex flex-wrap justify-content-center content-container text-start center m-0 mb-5 px-lg-5" >            
               <!-- Tour Quick Details -->
            <div id="quick-details-container" class="col-10 d-fex justify-content-start flex-wrap p-3 my-3">
                <h3 class="font-logo">Quick Details</h3>
                <ul class="d-flex justify-content-start mb-1 flex-wrap col-12">
                    <li>Price: {tour.price}</li>
                    <li>Duration: {tour.duration}</li>
                    <li>Distance: {tour.distance}</li>
                    <!-- <li>Elevation Gain: {tour.elevationGain}</li> -->
                    <li>Difficulty(1-5): {tour.difficultyRating}</li>
                    <li>Ages: {tour.ages}</li>
                    <!-- {#if tour.ebikes}
                        <li>E-bikes available</li>
                    {:else}
                        <li>E-bikes not available</li>
                    {/if} -->
                </ul>
            </div>
            <div class="tour-divider col-12 mb-5 mt-3"></div>
            <!-- Tour Description -->
            <div class="col-12 d-flex justify-content-start flex-wrap px-3">
                <h3 class="font-logo text-left">Description</h3>
                {#each tour.description as paragraph}
                    <p class="col-12 text-left px-0 my-3 blog-text">{paragraph.content}</p>
                {/each}
            </div>

            <div class="tour-divider col-12 mb-5 mt-3"></div>


            <div class="col-12 d-flex justify-content-start flex-wrap px-3">
                <iframe class="my-3" src="{tour.ridewithgps}" style="width: 1px; min-width: 100%; height: 700px; border: none;" scrolling="no"></iframe>
            </div>
            <div class="tour-divider col-12 mb-5 mt-3"></div>
            <!-- {#if tour.highlights.length > 0}
            <div id="highlights-container" class="col-10 d-fex justify-content-start flex-wrap p-3 my-3">
                <h3 class="font-logo text-left">Highlights</h3>
                <Splide aria-label="Client Testimonials" class="z-reset" hasTrack={ false } options={ {
                    type: 'loop',
                    perPage: 3,
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
                    {#each tour.highlights as highlight}
                        <SplideSlide class="my-3 mt-0">
                            <div class="card">
                                <p class="onehundo testimonialTextLong">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly. We had offers our first day on the market and ended up accepting well over our asking price... We definitely would not trust anyone else with our future real estate needs!"</p>
                                <p class="onehundo testimonialTextAbbr">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly… We definitely would not trust anyone else with our future real estate needs!"</p>
                                <br>
                                <p class="onehundo testimonialText">Heather, Salem</p>
                            </div>
                        </SplideSlide>
                    {/each}
                        
                    </SplideTrack>
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
                        <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
                    </div>
                    </Splide>
            </div>

            <div class="tour-divider col-12 mb-5 mt-3"></div>

            {/if} -->

            <div class="col-12 d-flex justify-content-start flex-wrap px-3">
                <h3 class="font-logo text-left">What's provided</h3>
                <ul class="col-12 mx-3">
                    {#each tour.whatsProvided as item}
                    <li class="col-12 text-left px-0 my-3 blog-text">{item}</li>
                {/each}
                </ul>
                
            </div>
            <div class="tour-divider col-12 mb-5 mt-3"></div>
                
                <div class="col-12 d-flex justify-content-start flex-wrap px-3">
                    <h3 class="font-logo text-left">What to bring</h3>
                    <p class="col-12 text-left px-0 my-3 blog-text">{tour.whatToBring}</p>
                </div>
            <!-- <div class="col-12 d-flex justify-content-center flex-wrap mt-3 px-3">
                {#each blog.Sections as Section}
                    {#if Section.Type == 'text'}
                        <p class="col-12 text-left px-0 my-3 blog-text">{Section.Content}</p>
                    {:else if Section.Type == 'img'}
                        <img src="./img/tour/{tour.id}. {tour.title}/blog{tour.id}-{currentImg}.jpg" alt="{Section.Alt}" class="col-10 col-md-8 mt-5 blog-img" />
                        <span class="col-12 text-center mb-5">{Section.Caption} <a href="{Section.Src}">source</a></span>
                        { currentImg = currentImg + 1}  
                    {:else if Section.Type == 'divider'}
                        <div class="mt-5 pb-5 blog-divider col-8"></div>
                    {:else if Section.Type == 'highlight'}
                    <p class="text-center blog-highlight p-5 col-12 col-lg-8 my-5">{Section.Content}</p>
                    {:else if Section.Type == 'heading'}
                    <h4 class="text-start col-12 mt-3 mb-0">{Section.Content}</h4>
                    {/if}
                {/each}
            </div> -->
        </div>
        <aside id="calendar-aside" class="col-md-5 col-lg-4 m-0 p-3 p-lg-0">
            <div class="px-0 mx-0 col-12 d-flex flex-wrap">
                <div id="aside-topsection" class="col-12 mx-0 px-0 order-2 order-md-1">
                    <img src="../../img/tour1-cover.jpg" alt="calendar" class="col-12 px-0 d-none d-md-inline" />
                    <div class="col-12 d-flex justify-content-center my-3">
                        <button class="btn btn-primary">Book now</button>
                    </div>    
                </div>
                <div id="aside-bottomsection" class="col-12 mx-0 px-0 order-1 order-md-2">
                    <Calendar {url} />
                </div>
                
            </div>
            
        </aside>
    </div>
    
    
    <!-- <a href="/tours" class=""><div class="button my-5">All tours</div></a> -->
    <!-- <a href={'./'+testBlog.Title}>{testBlog.Title}</a>  -->
    <!-- <p on:click={blog = testBlog}>{testBlog.Title}</p> -->
</section>
 <!-- <p on:click={reloadPage(nextBlog.Title)}>{nextBlog.Title}</p> -->

 <!-- <svelte:head>
    <script src="../js/tours.js" crossorigin="anonymous"></script>
</svelte:head> -->

<style>
    #highlights-container li {
        padding: 0.7rem;
        background-color: var(--color-primary-dark);
        /* border-radius: 6px; */
        /* border: solid 1px white; */
        margin: 0.5rem;
    }
    


    #highlights-container ul {
        list-style: none;
    }


    #quick-details-container li {
        padding: 0.7rem;
        background-color: var(--color-primary);
        /* border-radius: 6px; */
        /* border: solid 1px white; */
        margin: 0.5rem;
    }
    
    #quick-details-container ul {
        list-style: none;
    }
    #quick-details-container {
        /* border: solid black 2px; */
        height: fit-content;
        background-color: var(--color-background);
        /* border-radius: 6px; */
    }

    #quick-details-container * {
        color: white;
    }
    
    #tour-info-container {
        /* border: solid black 2px; */
    }

    #calendar-aside {
        height: 100%;
    }

    #calendar-aside > div {
        border-radius: 6px;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
        background-color: white;
        overflow: hidden;
    }

    #aside-topsection > img {
        aspect-ratio: 3/2;
        /* border: solid black 2px; */
    }

    #aside-bottomsection {
        /* border: solid black 2px; */
    }

    #aside-topsection > img {
        object-fit: cover;
        
        overflow: hidden;
    }
    
    .tour-text {
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: var(--bs-body-font-family);
    }

    .tour-img {
        object-fit: cover;
        margin: 0;
        position: relative;
        left: 0;
        top: 0;
        aspect-ratio: 1/1;
    }

    /* #tourCover {
        background-color: black;
        height: 60vh;
        position: relative;
        margin: auto;
    } */

    #tourCover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)); */
    }

    #tourCover > h2 {
        position: absolute;
        bottom: 0;
        left: 30%;
        color: white;
    }
/* #toursContainer {
    display: flex;
    gap: 15px;
} */

.tour-header {
    height: 23vh;
}

aside {
    /* border: solid 2px black; */
    height: 500px;
}

aside {
  position: relative;
  top: -20vh;
  margin: 20px;
  padding-right: 4vw !important;
  padding-left: 0;
}

.fixed {
  position: fixed;
  top: 0;
  background-color: red;
}

.tourDate {
    color: #afadac;
}

.tour-header-divider {
    margin-bottom: 40px;
}

a {
    color: black;
}

.tour-highlight {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    font-style: italic;
    background-color: rgb(175, 173, 172, 0.1);
}

.tour-divider {
    border-top: black solid 2px;
}


/* @media (max-width: 767px) {
    aside {
        top: 0;
    }

    #calendar-aside > div {
        box-shadow: none;
    }
} */

@media (max-width: 992px) {
    aside {
        top: 0;
        padding-right: 0;
    }

    #calendar-aside > div {
        box-shadow: none;
    }
}
</style>