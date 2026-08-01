<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let name: string = $state('world');

</script>

<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">
	<header class="p-4 flex flex-row justify-between items-center">
		<h1 class="text-2xl font-bold"><a href="/">SF Ridgeline</a></h1>
		<nav>
			<a href="/about">about</a>
		</nav>
	</header>
</div>