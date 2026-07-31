<script>
  import ExternalLink from "./ExternalLink.svelte";

  const d3Link = {
    href: 'https://d3js.org',
    text: 'D3'
  }

  const svelteLink = {
    href: 'https://svelte.dev',
    text: 'Svelte'
  }

  const sourceLink = {
    href: 'https://github.com/vlingenfelter/tidal-wave',
    text: 'Source'
  }

</script>

<footer>
  <p>Made with ❤️ near San Francisco.</p>
  <ExternalLink href="https://d3js.org" linkText="D3" />
</footer>