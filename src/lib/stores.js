// src/lib/stores.js
import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Get the initial theme from local storage if in the browser, default to 'light' if not set
const storedTheme = browser ? localStorage.getItem("theme") : null;
const initialTheme = storedTheme || "nord";

// Create the writable store with the initial theme
export const theme = writable(initialTheme);

// Sync the store with local storage whenever the value changes, but only in the browser
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem("theme", value);
	});
}
