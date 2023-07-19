import { writable } from 'svelte/store';
import { BROWSER } from 'esm-env';

interface CartItem {
  id: string;
  quantity: number;
}

let stored = [];

if (BROWSER) {
  // Get the value out of storage on load.
  stored = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

// Parse the stored value or set a default empty array.
export const cart = writable<CartItem[]>(stored);

// Anytime the store changes, update the local storage value.
if (BROWSER) {
  cart.subscribe((value) => localStorage.setItem('cart', JSON.stringify(value)));
}