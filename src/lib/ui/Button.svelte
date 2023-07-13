<script lang="ts">
  let cls: any = '';
  export { cls as class };
</script>

<button
  class={`bg-gray-200 hover:bg-gray-900 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ${cls}`}
  on:click
>
  <slot />
</button>
