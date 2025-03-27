<script>
	export const prerender = true;
	/** @type {import('./$types').PageProps} */
	import "../app.css";
	import { onMount } from "svelte";
	import SiteStats from "./components/SiteStats.svelte";
	import CustomFooter from "./components/CustomFooter.svelte";
	import MyProjects from "./components/MyProjects.svelte";
	import Hero from "./components/Hero.svelte";
	import ThemeContoller from "./components/ThemeContoller.svelte";
	let { data } = $props();
	import { themeChange } from "theme-change";

	onMount(() => {
		const handler = () => {
			plausible("scroll");
			window.removeEventListener("scroll", handler);
		};
		window.addEventListener("scroll", handler);
		return () => {
			window.removeEventListener("scroll", handler);
		};
	});
	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		// 👆 false parameter is required for svelte
		themeChange(false);

		if (typeof window !== "undefined") {
			window.plausible =
				window.plausible ||
				function () {
					(window.plausible.q = window.plausible.q || []).push(arguments);
				};
		}
	});
</script>

<ThemeContoller />

<Hero />

<h2
	id="projects"
	class="text-primary mt-25 mb-5 flex justify-self-center text-4xl font-bold sm:mb-1"
>
	My Projects:
</h2>
<MyProjects />

<SiteStats stats={data} />
<CustomFooter />
