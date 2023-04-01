<script>
	import { blogs } from "../../blogs"; 
    export let data;
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    //  export let blog;
    //  export const slug = blog;
    
    let blog
    blogs.forEach(article => {
        if (article.title == data.blogTitle) {
            blog = article;
        }
    })

    let transAmTotalDistance = 4323

    // let imgSrcBanner = `../img/blogs/${blog.Number}. ${blog.Title}/blog${blog.id}-banner.jpg`;
    let imgSrcBanner
    if (blog.transAmBlog) {
        console.log('transam')
        imgSrcBanner = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`
    } else {
        imgSrcBanner = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
    }
    let currentImg = 1;
    let testBlog = blogs[1]
    let prevBlog
    let nextBlog
    // if (blog.Number != 1) {
    //     prevBlog = blogs[blog.Number - 1]
    // }
    // if (blog.Number <= blogs.length+1) {
    //     nextBlog = blogs[blog.Number + 1]
    // }

</script>

<section>
    <div class="vh-60 blogBanner col-12 px-0">
        <img src = {imgSrcBanner} alt="{blog.bannerAlt}" class="bannerImg" />
    </div>
    <div id="" class="d-flex flex-wrap justify-content-center content-container text-start center mb-5" >            
        <div class="col-12 blog-header d-flex align-content-center justify-content-start flex-wrap">
            <h2 class="col-12 text-left px-3 pb-1">{blog.title}</h2>
            <p class="blogDate col-12 text-left px-3">Published by {blog.author} on {blog.date}</p>
        </div>
        <div class="col-12 px-3">
            <div class="blog-divider col-12 blog-header-divider"></div>
        </div>
        <div class="col-12 col-lg-8 d-flex justify-content-center flex-wrap mt-3 px-3">
            {#if blog.transAmBlog}
                {#each blog.sections as section}
                    {#if section.type == 'intro'}
                    <div class="col-12 d-flex justify-content-start flex-wrap">
                        <h3 class="col-12">{section.startingPoint} -&#62; {section.endingPoint}</h3>
                        <p class="mx-3">{section.dateRange} miles down</p>
                        <p class="mx-3">{section.totalMilage} miles down</p>
                        <p class="mx-3">{section.milageLeft} miles to go</p>
                    </div>    
                    
                        <div class="mt-5 pb-5 blog-divider col-12"></div>
                    {:else if section.type == 'day'}
                        <div class="transam-day-upper col-12 col-md-6">
                            <h3>Day {section.day}: {section.startingPoint} -&#62; {section.endingPoint}</h3>
                            <p>{section.distance} miles, {section.elevation} ft of climb</p>
                            <p>Difficulty: {section.difficulty}</p>
                            <p>Safety: {section.safety}</p>
                        
                            <p>Notes</p>
                            <ul>
                                {#each section.notes as note}
                                    <li>{note}</li>
                                {/each}
                            </ul>
                        </div>
                            <div class="transam-day-pics col-12 col-md-6">
                                <Splide aria-label="" class="z-reset" hasTrack={ false } options={ {
                                        type: 'loop',
                                        perPage: 1,
                                        breakpoints: {
                                            768: {
                                                perPage: 1,
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
                                        {#each section.images as image}
                                            <SplideSlide class="my-3 mt-0 transam-day-pic">
                                                <img src='../../img/blog/transam/week {blog.week}/day{section.day}-{image.number}.jpg' alt={image.alt} class="" />
                                                <p>{image.caption}</p>
                                            </SplideSlide>
                                        {/each}
                                            
                                        </SplideTrack>
                                        <div class="splide__arrows">
                                            <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
                                            <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </Splide>
                                </div>
                                <div class="mt-5 pb-5 blog-divider col-12"></div>
                                {:else if section.type == 'reflections'}
                                    <h3 class="col-12 text-center">Reflections</h3>
                                    {#each section.content as reflection}
                                        <h5 class="text-left col-12">{reflection.heading}</h5>
                                        <p>{reflection.content}</p>
                                    {/each}
                                {/if}
                            {/each}
                {:else}
                                <!-- <p class="col-12 text-left px-0 my-3 blog-text">{section.content}</p>
                                {:else if section.type == 'img'}
                                    <img src="../../img/blog/{blog.id}. {blog.title}/blog{blog.id}-{currentImg}.jpg" alt="{section.alt}" class="col-10 col-md-8 mt-5 blog-img" />
                                    <span class="col-12 text-center mb-5">{section.caption} <a href="{section.src}">source</a></span>
                                    { currentImg = currentImg + 1}  
                                {:else if section.type == 'divider'}
                                    <div class="mt-5 pb-5 blog-divider col-8"></div>
                                {:else if section.type == 'highlight'} -->

            {#each blog.sections as section}
                {#if section.type == 'text'}
                    <p class="col-12 text-left px-0 my-3 blog-text">{section.Content}</p>
                {:else if section.type == 'img'}
                    <img src="./img/blogs/{blog.number}. {blog.title}/blog{blog.id}-{currentImg}.jpg" alt="{section.alt}" class="col-10 col-md-8 mt-5 blog-img" />
                    <span class="col-12 text-center mb-5">{section.caption} <a href="{section.src}">source</a></span>
                    { currentImg = currentImg + 1}  
                {:else if section.type == 'divider'}
                    <div class="mt-5 pb-5 blog-divider col-8"></div>
                {:else if section.type == 'highlight'}
                    <p class="text-center blog-highlight p-5 col-12 col-lg-8 my-5">{section.content}</p>
                {:else if section.type == 'heading'}
                    <h4 class="text-start col-12 mt-3 mb-0">{section.content}</h4>
                {/if}
            {/each}
        {/if}
        </div>
        
    </div>
    <div class="col-12 d-flex justify-content-center">
        <a href="/blog" class=""><div class="button my-5">Back to Blogs</div></a>
    </div>
    
    <!-- <a href={'./'+testBlog.Title}>{testBlog.Title}</a>  -->
    <!-- <p on:click={blog = testBlog}>{testBlog.Title}</p> -->
</section>
 <!-- <p on:click={reloadPage(nextBlog.Title)}>{nextBlog.Title}</p> -->

<style>
    .transam-day-pics img {
        width: 100%;
        aspect-ratio: 2/3;
        max-height: 80vh;
        object-fit: cover;
        object-position: center;
        
    }


    .blog-text {
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: var(--bs-body-font-family);
    }

    .blog-img {
        object-fit: cover;
        margin: 0;
        position: relative;
        left: 0;
        top: 0;
        aspect-ratio: 1/1;
    }

    .blogBanner {
        background-color: black;
        height: 50vh;
        max-height: 300px;
        /* background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */
        position: relative;
        margin: auto;
        /* background-position: center; */
    }

    .blogBanner > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)); */
    }
/* #blogsContainer {
    display: flex;
    gap: 15px;
} */

.blog-header {
    height: 23vh;
}

.blogDate {
    color: #afadac;
}

.blog-header-divider {
    margin-bottom: 40px;
}

a {
    color: black;
}

.blog-highlight {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    font-style: italic;
    background-color: rgb(175, 173, 172, 0.1);
}

.blog-divider {
    border-top: black solid 2px;
}
</style>