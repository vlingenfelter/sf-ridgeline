<script lang="ts">
	import { Card } from '$lib';
	let name: string = $state('world');

</script>

<Card>
	<header class="flex flex-row justify-between items-center">
		<h1 class="text-2xl font-bold"><a href="/">San Francisco Ridgeline</a></h1>
		<nav>
			<a href="/about" class="underline text-local-link dark:text-dark-local-link">/about</a>
		</nav>
	</header>
</Card>