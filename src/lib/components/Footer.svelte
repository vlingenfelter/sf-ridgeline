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
    linkText: "Source",
  };
</script>

<Card>
    <footer class="flex flex-row justify-between items-center">
        <ThemeToggle />
        <div class="flex flex-col text-sm justify-end text-right">
            <p>
                <ExternalLink {...sourceLink} />
            </p>

            <p>
                Built with <ExternalLink {...d3Link} /> and <ExternalLink {...svelteLink} />.
            </p>

            <p>
                Made with ❤️ in or around San Francisco
            </p>
        </div>
    </footer>
</Card>
