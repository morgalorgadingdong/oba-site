<script>
    import { blogs } from '../blogs'
    import BlogPreview from './BlogPreview.svelte'
</script>


<div class="vh-60 hero col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <img class="hero-img img" src="./img/blog.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Blog</h1>
    </div>
</div>
<section class="col-12 d-flex justify-content-center flex-wrap my-5">
    <div class="col-12 col-md-8 col-lg-6 d-flex justify-content-center flex-wrap content-container mt-4">
        {#each blogs as blog}
            {#if blog.Published == true}  
                <BlogPreview { blog } />
            {/if}
        {/each}
    </div>
</section>