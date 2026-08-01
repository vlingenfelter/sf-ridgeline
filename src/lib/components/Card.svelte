<script lang="ts">
    let { children } = $props();
</script>

<div class="flex flex-col">
    <div class="flex-1 border-dotted bg-card-bg m-6 rounded-lg dark:bg-dark-card-bg border border-border dark:border-dark-border border-2">
        <div class="p-6">
            {@render children?.()}
        </div>
    </div>
</div>