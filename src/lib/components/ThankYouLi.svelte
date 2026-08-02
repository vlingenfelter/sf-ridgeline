<script lang="ts">
  import type { ThankYouLiProps } from "../types.ts";

  let { name, purpose = "general support" }: ThankYouLiProps = $props();
</script>

<li class="mb-1">
  <strong>{name}</strong> for {purpose}
</li>