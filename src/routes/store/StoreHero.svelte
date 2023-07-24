<script>
// import { PageData } from "../$types";
import { page } from '$app/stores';
import hero from '$lib/img/hero2.jpg';


console.log($page.route.id)

</script>

<div class="hero hero-sub col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="img" src={hero}/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <!-- Store page -->
        {#if $page.route.id?.includes("cart")}
            <h1 class="hero-tagline col-12">Cart</h1>
        {:else}
            <h1 class="hero-tagline col-12">Store</h1>
        {/if}
    </div>
</div>