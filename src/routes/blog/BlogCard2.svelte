<script>
    /**
	 * @type {{ }}
	 */
     export let blog;
    let imgSrc
    if (blog.transAmBlog) {
        console.log('transam')
        if (blog.sections[0].type == 'intro' || blog.sections[0].type == 'day') {
            imgSrc = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`
        } else {
            imgSrc = `../../img/blog/transam/${blog.title}/${blog.title}-banner.jpg`
        }
        
    } else {
        imgSrc = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
    }
</script>


<a href={'./blog/' + blog.title} class="col-12 col-md-5 d-lg-none my-3" data-sveltekit-preload-data="hover">
    <div class="col-12 card mx-0 px-0">
        <div class="card-body">
            <div class="card-img-top" >
                <img src="{ imgSrc }" alt="{blog.title}"/>
                <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
                <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
                <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
            </div>
            <!-- <div class="card-img-top"></div> -->
            <div class="col-12 px-2">
                <h5 class="card-title pt-3 d-inline-block">{blog.title}</h5>
                <p class="blogDate col-12 text-left px-0 d-inline-block">{blog.date}</p>
                {#if blog.sections[0].type=='text'}
                    <p class="blogDescription col-12 text-left px-0">{blog.sections[0].content}</p>
                {:else if blog.sections[0].type=='intro'}
                    <p class="blogDescription col-12 text-left px-0">{blog.sections[0].startingPoint} -&#62; {blog.sections[0].endingPoint}</p>
                {/if}
                <a href={'./blog/' + blog.title}>Read More</a>
            </div>
        </div>
    </div>
</a>

<a href={'./blog/' + blog.title} class="col-12 d-none d-lg-inline my-5" data-sveltekit-preload-data="hover">
    <div class="col-12 d-flex flex-wrap">
        <div class="card-img-left col-4" >
            <img src="{ imgSrc }" alt="{blog.title}"/>
            <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
            <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
            <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
        </div>
        <!-- <div class="card-img-top"></div> -->
        <div class="col-8 px-2 d-flex align-content-center justify-content-start flex-wrap px-3">
            <div class="col-12 d-flex justify-content-between card-title-container px-0">
                <h5 class="card-title text-left py-1 pl-0">{blog.title}</h5>
                <p class="blogDate text-left px-0" >{blog.date}</p>
            </div>
            
            {#if blog.sections[0].type=='text'}
                    <p class="blogDescription col-12 text-left px-0">{blog.sections[0].content}</p>
                {:else if blog.sections[0].type=='intro'}
                    <div class="col-12 d-flex justify-content-between px-0 mb-3">
                        <span class="text-left px-0">{blog.sections[0].startingPoint} -&#62; {blog.sections[0].endingPoint}</span>
                        <span class="mx-3">{blog.sections[0].totalMilage} miles</span>
                    </div>
                    <p>{blog.sections[0].text}</p>
                {/if}
            <a class="col-12 text-center d-none d-lg-inline" href={'./blog/' + blog.title}>Read More</a>
        </div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: black;
    }
    a.col-3 {
        padding: 1rem;
    }

    .card {
        margin: 1rem;
    }
    .card-body {
        padding: 0;
    }

    .card-img-top {
        width: 100%;
        height: 15rem;
        padding: 0;
        background-size: cover;
        background-position: center;
        border-bottom: solid 4px var(--color-primary);
        /* background-image: url({imgSrc}) */
    }
    .card-img-top > img, .card-img-left > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }

    .card-img-left {
        aspect-ratio: 3/2;
        padding: 0;
        background-size: cover;
        background-position: center;
        /* background-image: url({imgSrc}) */
    }

    .card-section {
        border-top: #afadac solid 1px;
        padding-top: 1rem;
    }

    .card-section p {
        width: 50%;
    }

    .blogCard {
    padding: 0;
}

.blogCard:hover {
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
    cursor: pointer;
}

.blogCardBG {
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    /* background-image: url('../img/blog/blog-1.jpeg'); */
}

.blogDate {
    color: #afadac;
    width: fit-content;
}

.blogDescription {
    white-space: nowrap;
    padding: 0;
    overflow: hidden; 
    word-wrap: break-word;
    /* line-height: 1.5;
    max-height: 40px; */
    text-overflow: ellipsis;
    font-size: 14px;
}

    .card-title-container {
        border-bottom: solid 2px var(--color-primary);
    }

</style>