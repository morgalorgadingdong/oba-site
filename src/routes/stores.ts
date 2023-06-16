import { writable } from 'svelte/store';
import { readable } from 'svelte/store';
import items from './store-items.json';

export const cart = writable([]);
export const products = readable(items);