<script>
    import cartImg from '$lib/img/cart-primary.png';
    import { page } from '$app/stores';

    // export let data
    // console.log(data.name)
    console.log($page.params)
    
    function getLastSegment() {
        let segments = $page.route.id.split('/');
        let lastSegment = segments[segments.length - 1]
        if (lastSegment.includes('[')) {
            lastSegment = $page.params.storeItem
        }
        
        console.log(lastSegment) 
        return lastSegment
    } // handle potential trailing slash
</script>

<div class="col-12 d-flex justify-content-between mt-3 align-items-center">
    <div class="col-9 d-flex justify-content-start">
        {#if $page.route.id !== '/store' && !$page.route.id?.includes("cart")}
            <a href="/store"><span>/store </span></a><span>/{getLastSegment()}</span>
        {/if}
    </div>
    <div class="col-3 d-flex justify-content-end">
        {#if !$page.route.id?.includes("cart")}
            <a href="/store/cart"><img src={cartImg} class="icon"></a>
        {/if}
    </div>
</div>

<!-- Hide store route when on store home page (if == '/store') --> 
<!-- Hide cart icon in top right when in the cart page -->

<style>
    .icon {
        width: 23px;
        
        margin: 10px;
    }
</style>