<script>
	import { onMount } from "svelte";
	import { theme } from "$lib/stores.js";
	import "../app.css";

	onMount(() => {
		// Set the initial theme
		document.documentElement.setAttribute("data-theme", $theme);
		// Remove the loading state
		document.documentElement.removeAttribute("data-loading");
		document.getElementById("darkModeToggle").removeAttribute("data-loading");
		// Update data-theme on theme changes
		theme.subscribe((value) => {
			document.documentElement.setAttribute("data-theme", value);
		});
	});

	import "../app.css";
	let { children } = $props();
	// Optional: You can define dynamic variables here if needed
	const siteUrl = "https://vegardhaglund.dev";
	const title = "Vegard Haglund | Portfolio of Node.js & Express Projects";
	const description =
		"Vegard Haglund's portfolio showcasing Node.js and Express server projects. Explore innovative web development solutions and coding expertise.";
</script>

<svelte:head>
	<title>{title}</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Vegard Haglund, Node.js, Express, web development, server-side, JavaScript, portfolio, projects"
	/>
	<meta name="author" content="Vegard Haglund" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content="Vegard Haglund | Node.js & Express Projects" />
	<meta
		property="og:description"
		content="Discover Vegard Haglund's latest Node.js and Express server projects at vegardhaglund.dev"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />

	<!-- Favicon -->
	<!-- <link rel="icon" href="/favicon.ico" type="image/x-icon" /> -->

	<!-- Preconnect and Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@600&family=Roboto+Flex:opsz,wdth,wght,GRAD,XOPQ,XTRA,YOPQ@8..144,112.5,100..1000,-43,88,400,116&family=Roboto+Serif:ital,opsz,wdth,wght,GRAD@0,8..144,112.5,200,-50;1,8..144,112.5,200,-50&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&icon_names=search_insights"
	/>

	<!-- External Script (e.g., Analytics) -->

	<script
		defer
		data-domain="vegardhaglund.dev"
		src="https://required.vegardhaglund.website/js/script.outbound-links.pageview-props.tagged-events.js"
	></script>
</svelte:head>
{@render children()}
