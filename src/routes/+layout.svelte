<!-- <script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Header, Footer } from '$lib';

	let { children } = $props();

	import { onMount } from 'svelte';
	import { theme } from '$lib/theme';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		
		const handleSystemChange = (e: MediaQueryListEvent) => {
			// Only auto-update if the user hasn't explicitly set a preference
			if (!localStorage.getItem('theme')) {
				theme.set(e.matches ? 'dark' : 'light');
			}
		};

		// Listen for system preference switches
		mediaQuery.addEventListener('change', handleSystemChange);
		
		return () => {
			mediaQuery.removeEventListener('change', handleSystemChange);
		};
	});

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
<Footer /> -->
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

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

<div class="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">
	<header class="p-4 flex justify-end">
		<ThemeToggle />
	</header>
	
	<main class="p-6">
		{@render children()}
	</main>
</div>
