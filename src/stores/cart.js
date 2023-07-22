import { writable } from 'svelte/store';

// Check if cart data exists in local storage
const storedCart = localStorage.getItem('cart');
const initialCart = storedCart ? JSON.parse(storedCart) : [];

// Create a writable Svelte store
export const cart = writable(initialCart);

// Subscribe to changes in the cart store and update local storage
cart.subscribe(value => {
  localStorage.setItem('cart', JSON.stringify(value));
});
