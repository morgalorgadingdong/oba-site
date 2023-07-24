<script>
  import { onMount } from "svelte";

    // import items from '../store-items.json';
    import StoreItemCard from './StoreItemCard.svelte';
    export let data


    // onMount(async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = await res.json();
    //     console.log(data);
    // });

    console.log(data)
    
</script>

<section class="col-12 d-flex justify-content-center flex-wrap my-5">
    <div class="col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-wrap content-container mt-4">
        {#each data.storeItems as item}
            <StoreItemCard { item } />
        {/each}
    </div>
</section>


<style>
</style>