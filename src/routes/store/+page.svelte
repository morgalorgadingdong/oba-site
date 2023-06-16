<script>
    import items from '../store-items.json';
    import StoreItemCard from './StoreItemCard.svelte';

    
</script>

<div class="hero hero-sub col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="hero-img img" src="./img/hero-2.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Store</h1>
    </div>
</div>
<section class="col-12 d-flex justify-content-center flex-wrap my-5">
    <div class="col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4">
        {#each items as item}
            <StoreItemCard { item } />
        {/each}
    </div>
</section>


<style>
</style>