import { dev } from '$app/environment';
import { get } from 'svelte/store';


export const load = async ({ fetch }) => {
    const response = await fetch('/.netlify/functions/readStoreItems');
    const data = await response.json();
    return {
        items: data
    };
};




// fetch('/.netlify/functions/readStoreItems')
//     .then(response => response.json())
//     .then(data => console.log(data));


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = true;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;