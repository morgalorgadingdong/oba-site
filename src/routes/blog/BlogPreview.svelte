<script>
    /**
	 * @type {{ }}
	 */
    export let blog;
    let imgSrc
    if (blog.transAmBlog) {
        console.log('transam')
        imgSrc = `../../img/blog/transam/week ${blog.week}/week${blog.week}-banner.jpg`
    } else {
        imgSrc = `../../img/blog/${blog.id}. ${blog.title}/blog${blog.id}-banner.jpg`;
    }
    // let imgSrc = `./img/test.jpg`;
    // console.log(imgSrc)
</script>
<div class="blog-preview col-12 mb-5">
    <div class="img-container">
        <a href={'./blog/' + blog.title}><img src="{ imgSrc }" class="img" alt=""></a>
    </div>
    <div class="blog-info col-12 d-flex justify-content-between align-items-center">
        <h3 class="blog-title my-2">{blog.title}</h3>
        <p class="blog-date m-0">{blog.date}</p>
    </div>
    <div id="blog-category-container" class="category-container col-12 d-flex justify-content-center">
        {#each blog.categories as category}
            <span class="category">{category}</span>
        {/each}
    </div>
</div>


<style>
    a {
        text-decoration: none;
        color: black;
    }
    #blog-category-container {
        opacity: 0;
        transform: translateY(-100%);
        transition: all 0.5s ease-in-out;
    }

    #blog-category-container .category {
    /* display: inline-block; */
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 0 0.5rem 0 0.5rem;
    /* border: solid 1px black; */
    transition: all 0.5s ease-in-out;
    box-shadow: -2px 2px 4px 0px rgba(0,0,0,0.5);
    }

    .blog-preview:hover > #blog-category-container {
        opacity: 1;
        transform: translateY(0%);
        transition: all 0.5s ease-in-out;
    }

    .img-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  /* height: 100%; */
  overflow: hidden;
  object-position: center;
  box-shadow: -2px 2px 4px 0px rgba(0,0,0,0.5);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease-in-out;
}

</style>