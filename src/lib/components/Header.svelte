<script lang="ts">
import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let name: string = $state('world');

</script>

<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">
	<header class="p-4 flex justify-end">
		<ThemeToggle />
	</header>
</div>