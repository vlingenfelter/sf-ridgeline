<script lang="ts">
    import ExternalLinkIcon from "./ExternalLinkIcon.svelte";

    interface Props {
        href: string;
        linkText?: string;
    }

    let { href, linkText = href}: Props = $props();
</script>

<a {href} class="inline-flex items-center gap-1 text-sm">
    <span>{linkText} </span>
    <ExternalLinkIcon />
</a>