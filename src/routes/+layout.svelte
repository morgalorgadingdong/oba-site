<script>
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';
	// import './style.css';
</script>

<div class="app">
	<main>
        <Header />
		<slot class="test"/>
        <Footer />
	</main>
	
</div>

<style>
	main {
		z-index: 0;
	}

	.test {
		z-index: 1;
	}

</style>