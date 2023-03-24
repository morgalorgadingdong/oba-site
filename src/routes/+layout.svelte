<script>
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';
	// import './style.css';

</script>

<div class="app">
	<main>
        <Header />
		<slot/>
        <Footer />
	</main>
	
</div>

<style>
	main {
		z-index: 0;
	}

</style>