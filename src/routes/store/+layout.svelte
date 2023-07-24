<script>
    import StoreSubHeader from './StoreSubHeader.svelte';
    import StoreHero from './StoreHero.svelte';
    import { page } from '$app/stores';
</script>

<div class="col-12 d-flex flex-wrap px-0">
    <StoreHero />
    <StoreSubHeader />
    
    <slot/>
</div>
