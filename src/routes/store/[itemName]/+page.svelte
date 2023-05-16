<script>
    import items from '../../store-items.json';
    export let data;

    let item
    items.forEach(article => {
        if (article.itemData.name == data.itemName) {
            item = article;
        }
    })
</script>


<div class="vh-60 hero col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="hero-img img" src="{ item.itemData.imgURL[0] }"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">{item.itemData.name}</h1>
    </div>
</div>