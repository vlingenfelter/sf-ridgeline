<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

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

<footer class="p-4 flex flex-row justify-between items-center mb-8">
    <ThemeToggle />
    <div class="flex flex-col text-sm text-slate-500 dark:text-slate-400 justify-end text-right">
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