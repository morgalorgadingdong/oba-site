<script>
    // Add any necessary logic or imports here
    import { onMount } from 'svelte';

    // Make a request to the Netlify function on page load
    onMount(async () => {
      const response = await fetch('/.netlify/functions/webhooks');
      // Handle the response as needed
    });
  </script>

  <main>
    <h1>Webhooks</h1>
    <!-- Add the content for your webhooks page here -->
  </main>