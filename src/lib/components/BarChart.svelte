<script>
  import { scaleLinear } from "d3-scale";
  import { theme } from "$lib/theme.svelte";

  let width = 1000;
  const height = 1000;

  const margin = {
    top: 40,
    right: 30,
    bottom: 30,
    left: 30
  };

  const years = Array.from({ length: 50 }, (_, i) => 1990 + i * 5);

  // -----------------------------
  // Generate dummy distributions
  // -----------------------------

  function randomNormal(mean, std) {
    const u = Math.random();
    const v = Math.random();

    return (
      mean +
      std *
        Math.sqrt(-2 * Math.log(u)) *
        Math.cos(2 * Math.PI * v)
    );
  }

  const data = years.map((year, i) => ({
    year,
    values: Array.from({ length: 250 }, () =>
      randomNormal(1 + i * 0.7, 0.1 + Math.random() * 4.1)
    )
  }));

  // -----------------------------
  // Kernel Density Estimate
  // -----------------------------

  function kernel(x, sample, bandwidth = 0.7) {
    const t = (x - sample) / bandwidth;
    return Math.exp(-0.5 * t * t);
  }

  function density(values) {
    const pts = [];

    for (let x = 0; x <= 20; x += 0.15) {
      let d = 0;

      for (const v of values) {
        d += kernel(x, v);
      }

      pts.push({
        x,
        density: d / values.length
      });
    }

    return pts;
  }

  const ridges = data.map((d) => ({
    ...d,
    density: density(d.values)
  }));

  const maxDensity = Math.max(
    ...ridges.flatMap((r) => r.density.map((d) => d.density))
  );

  // -----------------------------
  // Scales
  // -----------------------------

  const xScale = scaleLinear()
    .domain([0, 20])
    .range([margin.left, width - margin.right]);

  const ridgeHeight = margin.top;
  const ridgeSpacing =
    (height - margin.top - margin.bottom) / ridges.length;

  const yScale = scaleLinear()
    .domain([0, maxDensity])
    .range([0, ridgeHeight]);

  
  let strokeColor = $derived(
    theme.current === "dark" ? "#cad5e2" : "#314158"
  );

  let fillColor = $derived(
    theme.current === "dark" ? "#020618" : "#f8fafc"
  );

  function ridgeFillPath(ridge, baseline) {
    let d = `M ${xScale(ridge.density[0].x)} ${baseline}`;

    for (const p of ridge.density) {
      d += ` L ${xScale(p.x)} ${baseline - yScale(p.density)}`;
    }

    const last = ridge.density.at(-1);

    d += ` L ${xScale(last.x)} ${baseline} Z`;

    return d;
  }

  function ridgeStrokePath(ridge, baseline) {
    let d = `M ${xScale(ridge.density[0].x)} ${baseline - yScale(ridge.density[0].density)}`;

    for (const p of ridge.density.slice(1)) {
      d += ` L ${xScale(p.x)} ${baseline - yScale(p.density)}`;
    }

    return d;
  }
</script>

<div bind:clientWidth={width}>
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="100%"
    height="auto"
    preserveAspectRatio="xMidYMid meet"
  >
    <!-- <rect
      width={width}
      height={height}
      fill={fillColor}
    /> -->

    {#each ridges as ridge, i}
      {@const baseline = margin.top + (i + 1) * ridgeSpacing}
      
      <path
        d={ridgeFillPath(ridge, baseline)}
        fill={fillColor}
      />

      <path
        d={ridgeStrokePath(ridge, baseline)}
        fill="none"
        stroke={strokeColor}
        stroke-width="2"
      />
    {/each}
  </svg>
</div>

<style>
svg {
  display: block;
  width: 100%;
  border-radius: 8px;
}
</style>