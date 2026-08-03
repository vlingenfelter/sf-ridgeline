<!-- src/routes/+layout.svelte -->
<script lang="ts">
	export const prerender = true;
	import './layout.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme.svelte';
	// import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { Header, Footer, BarChart, Card, SvgPattern } from '$lib';

	let { children } = $props();

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e: MediaQueryListEvent) => {
			// Automatically update layout theme ONLY if user hasn't frozen a choice
			if (theme.isSystemDefault) {
				theme.resetToSystem();
			}
		};
		
		mediaQuery.addEventListener('change', handleSystemChange);
		return () => mediaQuery.removeEventListener('change', handleSystemChange);
	});
</script>

<SvgPattern />

<div class="min-h-screen flex flex-col justify-between max-w-screen-lg mx-auto">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
