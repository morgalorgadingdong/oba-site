<script>
    export let item;

    // let price = item.itemData.variations[0].itemVariationData.priceMoney.amount;
    // price = (Number(price.slice(0, -1))) / 100;

    import Modal from './ItemModal.svelte';

    let isModalOpen = false;
    

    function openModal() {
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }
</script>


<Modal 
  bind:isOpen={isModalOpen} 
  title={item.name} 
  content={item} 
  on:close={closeModal} 
/>


<div on:click={openModal} on:keypress={openModal} data-sveltekit-preload-data="hover">
    <div class="col-12 card mx-0 px-0">
        <div class="card-body">
            <div class="card-img-top" >
                <img src="{ item.imgURL[0] }"/>
                <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
                <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
                <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
            </div>
            <div class="col-12 d-flex justify-content-between">
                <p>{item.name}</p>
                <p>$ {item.price} </p>
            </div>
            <!-- <div class="card-img-top"></div> -->
        </div>
    </div>
</div>


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

.card-body:hover {
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