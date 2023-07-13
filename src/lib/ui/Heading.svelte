<script lang="ts">
  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>

{#if level === 1}
  <h1 class="text-4xl font-bold">
    <slot />
  </h1>
{:else if level === 2}
  <h2 class="text-3xl font-bold">
    <slot />
  </h2>
{:else if level === 3}
  <h3 class="text-2xl font-bold">
    <slot />
  </h3>
{:else if level === 4}
  <h4 class="text-xl font-bold">
    <slot />
  </h4>
{:else if level === 5}
  <h5 class="text-lg font-bold">
    <slot />
  </h5>
{:else if level === 6}
  <h6 class="text-base font-bold">
    <slot />
  </h6>
{/if}
