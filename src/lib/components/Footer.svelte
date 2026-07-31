<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";

  const d3Link = {
    href: "https://d3js.org",
    linkText: "D3",
  };

  const svelteLink = {
    href: "https://svelte.dev",
    linkText: "Svelte",
  };

  const sourceLink = {
    href: "https://github.com/vlingenfelter/tidal-wave",
    linkText: "Source",
  };
</script>

<footer class="p-4 flex flex-col justify-between items-center">
  <p>
    Made with ❤️ in or around San Francisco.
    <br />
    Built with <ExternalLink {...d3Link} /> and <ExternalLink {...svelteLink} />.
    <br />
    <ExternalLink {...sourceLink} />
  </p>
</footer>