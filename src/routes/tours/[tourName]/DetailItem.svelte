<script>
	import { slide } from "svelte/transition";
	export let itinerary
	let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>


<button on:click={toggle} aria-expanded={isOpen} class="d-flex justify-content-center align-items-center d-md-none"><svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> <p>Details</p> </button>
{#if isOpen}
<ul transition:slide={{ duration: 600 }}>
	{#each itinerary.description as paragraph}
		<p class="text-left px-0 mt-3">{paragraph}</p>
	{/each}
</ul>
{/if}

<style>
	
	ul {
		padding-left: 0;
	}

	p {
		margin: 0;
		padding: 0;
		width: fit-content;
	}
	button {
		background-color: var(--color-primary);
	}
	button {
		border: none; 
		line-height: 100%;
		margin: auto;
		
		color: white; 
		/* font-size: 36px;  */
		cursor: pointer; 
		margin: 0; 
		padding-bottom: 0.5em; 
		padding-top: 0.5em
	}

	svg { transition: transform 0.2s ease-in;
	}

	@media (min-width: 768px) {
		button, ul, p, svg {
			display: none;
		}
	}
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>