<script>
    // import { PageData } from "./$types";
    import { page } from '$app/stores';
    import AddToCart from '$lib/components/AddToCart.svelte';
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


<div class="d-flex align-items-center px-0 col-12 col-xl-3">
    <img src="{ data.imgURL[0] }" class="img"/>
</div>
  
<div class="col-12 col-xl-9 px-0">
    <h2>{data.name}</h2>
    <div class="tour-divider col-12 mt-1 mb-3"></div>
    {@html data.descriptionHTML}
    <!-- <p class="col-12">{parseDescription(content.itemData.description)}</p> -->
    <div class="col-12 d-flex justify-content-center mt-4">
      <AddToCart { data } />
    </div>


</div>