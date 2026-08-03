<script lang="ts">
	import { Card } from '$lib';
	import { base } from '$app/paths';
	let name: string = $state('world');

</script>

<Card>
	<header class="flex flex-row justify-between items-center">
		<h1 class="text-2xl xl:text-3xl font-bold hover:underline"><a href="{base}">San Francisco Ridgeline</a></h1>
		<nav>
			<a href="{base}/about" class="hover:underline text-local-link dark:text-dark-local-link">/about</a>
		</nav>
	</header>
</Card>