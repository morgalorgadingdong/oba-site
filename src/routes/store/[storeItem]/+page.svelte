<script>
    // import { PageData } from "./$types";
    import { page } from '$app/stores';
    import AddToCart from '$lib/components/AddToCart.svelte';
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    // import { enhance } from "$app/forms";
    

    export let data

    console.log(data)
    // let item
    // items.forEach(article => {
    //     if (article.itemData.name == data.itemName) {
    //         item = article;
    //     }
    // })

</script>


<div class="col-12 d-flex justify-content-start flex-wrap px-0 py-5">
    
    <div class="col-12 col-sm-6 d-flex align-items-start px-0 product-image-container">
        {#if data.imgURL.length > 1}
        <Splide aria-label="" class="z-reset col-12 px-0" hasTrack={ false } options={ {
            type: 'loop',
            perPage: 1,
            breakpoints: {

                576: {
                    perPage: 1,
                }
            },
            focus: 'center',
            drag: 'free',
            snap: true
          } }>
          <SplideTrack>
            {#each data.imgURL as pic}
                <SplideSlide class="d-flex justify-content-center mb-3">
                    <img src="{ pic }" class="product-image mx-3 col-12"/>
                </SplideSlide>
            {/each}
                
            </SplideTrack>
            <div class="splide__arrows col-12 d-flex justify-content-between">
                <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
                <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
            </div>
            </Splide>
        {:else}
            <img src="{ data.imgURL[0] }" class="product-image mx-3 col-12"/>
        {/if}
    </div>
    
    <div class="col-12 col-sm-6 px-5 d-flex justify-content-center flex-wrap">
        <h2 class="col-12">{data.name}</h2>
        <h4 class="col-12">$ {data.price}</h4>
        
        <div class="tour-divider col-12 mt-1 mb-3"></div>
        
        <div class="col-12 d-flex justify-content-start mb-2">
        <AddToCart { data } />
        </div>
        {@html data.descriptionHTML}


        <!-- <div class="col-6">
            {@html data.descriptionHTML}
        </div>
        <div class="col-6 d-flex justify-content-start mt-5">
            
        </div> -->
        
    </div>
    <div class="col-12 d-flex justify-content-center">
        <a href="/store" class=""><div class="btn btn-secondary my-5">Back to Store</div></a>
    </div>

</div>


<style>

    /* .product-image-container {
        height: 80vh;
        width: auto;
    } */

    .product-image {
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: contain;
    }

    :global(li) {
        list-style-type: none;
        
    }

    :global(ul) {
        display: block;
        width: 100%;
        margin-bottom: 0;
    }

    :global(p) {
        text-align: left;
        width: 100%;
    }

</style>
