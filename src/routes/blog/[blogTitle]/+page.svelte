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

    console.log(blog)

    let transAmTotalDistance = 4323

    // let imgSrcBanner = `../img/blogs/${blog.Number}. ${blog.Title}/blog${blog.id}-banner.jpg`;
    let imgSrcBanner
    if (blog.transAmBlog) {
        console.log('transam')
        if (blog.sections[0].type == 'intro' || blog.sections[0].type == 'day') {
            imgSrcBanner = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`
        } else {
            imgSrcBanner = `../../img/blog/transam/${blog.title}/${blog.title}-banner.jpg`
        }
        
    } else {
        imgSrcBanner = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
    }
    let currentImg = 0;
    let testBlog = blogs[1]
    let prevBlog
    let nextBlog
    // if (blog.Number != 1) {
    //     prevBlog = blogs[blog.Number - 1]
    // }
    // if (blog.Number <= blogs.length+1) {
    //     nextBlog = blogs[blog.Number + 1]
    // }

    // const videos = document.querySelectorAll('video');
    // const videos
    // videos.forEach(video => {
    //     video.removeAttribute('controls');
    // })
// ./img/blogs/transam/Let's Bike Across America/Let's Bike Across America-1.jpg
// .\img\blog\transam\Let's Bike Across America\Let's Bike Across America-1.jpg"
</script>

<section>
    <div class="vh-60 blogBanner col-12 px-0">
        <img src = {imgSrcBanner} alt="{blog.bannerAlt}" class="bannerImg" />
    </div>
    <div id="" class="d-flex flex-wrap justify-content-center content-container text-start center mb-5" >            
        <div class="col-12 blog-header d-flex align-content-center justify-content-start flex-wrap my-3">
            <h2 class="col-12 text-left px-3 pb-1">{blog.title}</h2>
            <p class="blogDate col-12 text-left px-3">Published by {blog.author} on {blog.date}</p>
            {#if blog.transAmBlog}
                <span class="mx-3">{blog.sections[0].dateRange}</span>    
                <span class="mx-3">{blog.sections[0].startingPoint} -&#62; {blog.sections[0].endingPoint}</span>
                <span class="mx-3">{blog.sections[0].totalMilage} miles down</span>
                <span class="mx-3">{blog.sections[0].milageLeft} miles to go</span>
            {/if}
        </div>
        <div class="col-12 px-3">
            <div class="blog-divider col-12 blog-header-divider"></div>
        </div>
        <div class="col-12 d-flex justify-content-center flex-wrap mt-3 px-3">
            {#if blog.transAmBlog}
                {#each blog.sections as section}
                    {#if section.type == 'intro'}
                        {#if section.text}
                        <div class="col-12 d-flex justify-content-start flex-wrap">
                            <p class="col-12">{section.text}</p>
                        </div>    
                    
                        <div class="mt-5 pb-5 blog-divider col-12"></div>
                        {/if}
                    {:else if section.type == 'day'}
                        <div class="transam-day-upper col-12 col-md-6">
                            <h3>Day {section.day}: {section.startingPoint} {#if section.endingPoint} -&#62; {section.endingPoint} {/if}</h3>                            
                            <p>{section.distance} miles, {section.elevation} ft of climb</p>
                            {#if section.distance}
                                <p>Difficulty: {section.difficulty}</p>
                            {/if}
                            {#if section.safety}
                                <p>Safety: {section.safety}</p>
                            {/if}
                            {#if section.text}
                                <p>{section.text}</p>
                            {/if}
                            {#if section.notes}
                            <p>Notes</p>
                            <ul>
                                {#each section.notes as note}
                                    <li>{note}</li>
                                {/each}
                            </ul>
                            {/if}
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
                                    <SplideTrack class="carousel">
                                        {#each section.images as image}
                                            
                                            {#if image.video}
                                            <SplideSlide class="my-3 mt-0 transam-day-pic">
                                                <div class="video-container d-flex justify-content-center">
                                                    <video src='../../img/blog/transam/week {blog.week}/day{section.day}-{image.number}.mp4' alt={image.alt} class="transam-day-vid" controls></video>
                                                    <p>{image.caption}</p>
                                                </div>
                                            </SplideSlide>
                                            {:else}
                                            <SplideSlide class="my-3 mt-0 transam-day-pic">
                                                <img src='../../img/blog/transam/week {blog.week}/day{section.day}-{image.number}.jpg' alt={image.alt} class="" />
                                                <p>{image.caption}</p>
                                            </SplideSlide>
                                            {/if}
                                        
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
                                {:else if section.type == 'text'}
                                    <p class="col-12 text-left px-0 my-3 blog-text">{section.content}</p>
                                {:else if section.type == 'img'}
                                    <img src="./img/blogs/transam/{blog.title}/{blog.title}-{currentImg}.jpg" alt="{section.alt}" class="col-10 col-md-8 mt-5 blog-img" />
                                    <span class="col-12 text-center mb-5">{section.caption} <a href="{section.src}">source</a></span>
                                    { currentImg = currentImg + 1}  
                                {:else if section.type == 'divider'}
                                    <div class="mt-5 pb-5 blog-divider col-8"></div>
                                {:else if section.type == 'highlight'}
                                    <p class="text-center blog-highlight p-5 col-12 col-lg-8 my-5">{section.content}</p>
                                {:else if section.type == 'heading'}
                                    <h4 class="text-start col-12 mt-3 mb-0">{section.content}</h4>
                                {:else if section.Type == 'list'}
                                    <ul class="text-start col-12 col-lg-8 my-3 mb-0 d-flex flex-wrap">
                                        {#each section.listItems as item}
                                            <li class="blog-text my-2 col-12">{item.content}</li>
                                        {/each}
                                    </ul>
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
    .video-container video {
        position: absolute;
        top: 0;
        /* left: 0; */
        /* width: 100%; */
        height: 95%;
        margin: 0 auto;
    }
    .video-container {
        position: relative;
        padding: 0;
        margin: 0;
        /* padding-bottom: 56.25%; */
        height: 100%; 
        overflow: hidden;
    }

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
    min-height: 23vh;
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