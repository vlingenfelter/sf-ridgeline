<script lang="ts">
  import ExternalLinkIcon from "./ExternalLinkIcon.svelte";
  import type { ExternalLinkProps } from "../types.ts";

  let { href, linkText = href }: ExternalLinkProps = $props();
</script>

<a
  {href}
  class="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
>
  <span>{linkText} </span>
  <ExternalLinkIcon />
</a>