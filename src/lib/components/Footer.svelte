<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { Card } from '$lib';

  const d3Link = {
    href: "https://d3js.org",
    linkText: "D3",
  };

  const svelteLink = {
    href: "https://svelte.dev",
    linkText: "Svelte",
  };

  const sourceLink = {
    href: "https://github.com/vlingenfelter/sf-ridgeline",
    linkText: "Source Code",
  };
</script>

<Card>
    <footer class="flex sm:flex-row flex-col justify-between items-center">
        <ThemeToggle />
        <div class="flex flex-col text-sm justify-end sm:text-right">
            <p>
              <a href="/acknowledgements" class="hover:underline text-local-link dark:text-dark-local-link">/acknowledgements</a></p>
            <p>
              <ExternalLink {...sourceLink} />
            </p>
            <p>
                Made with ❤️ in or around San Francisco
            </p>
        </div>
    </footer>
</Card>
