<script lang="ts">
	import { Card } from '$lib';
	let name: string = $state('world');

</script>

<Card>
	<header class="flex flex-row justify-between items-center">
		<h1 class="text-2xl xl:text-3xl font-bold hover:underline"><a href="/">San Francisco Ridgeline</a></h1>
		<nav>
			<a href="/about" class="hover:underline text-local-link dark:text-dark-local-link">/about</a>
		</nav>
	</header>
</Card>