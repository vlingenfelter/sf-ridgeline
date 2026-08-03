<script lang="ts">
    import { Card, ThankYouLi } from '$lib';

    var acknowledgements = [
        { name: "Svelte and SvelteKit", purpose: "the Svelte framework" },
        { name: "D3.js", purpose: "helping me make web data visualizations for over a decade" },
        { name: "Tailwind CSS", purpose: "letting me avoid styling headaches" },
        { name: "TypeScript", purpose: "making JavaScript bearable" },
        { name: "GitHub", purpose: "hosting and deployment of this site" },
        { name: "Rasmus Andersson", purpose: "designing the always-readable Inter font family" },
        { name: "Florian Karsten", purpose: "designing the modern yet fun Space Grotesk font family" }, 
    ];

    var last = { name: "My wonderful partner, Dillon", purpose: "looking at 50+ iterations of this website with slightly different color schemes" } 
</script>

<Card>
    <h2 class="mb-4 text-xl">
        Acknowledgements
    </h2>

    <p class="mb-2">
        Thank you to:
    </p>
    <ul class="list-disc list-inside sm:mb-2 mb-4">
        {#each acknowledgements as ack}
            <ThankYouLi name={ack.name} purpose={ack.purpose} />
        {/each}
    </ul>

    <p class="mb-2">
        and lastly but not leastly
    </p>
    <ul class="list-disc list-inside">
        <ThankYouLi name={last.name} purpose={last.purpose} />
    </ul>   
</Card>