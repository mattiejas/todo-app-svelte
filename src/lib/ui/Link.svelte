<script>
  export let href = '#';
  let cls = '';
  export { cls as class };
</script>

<a
  class="bg-gray-200 hover:bg-gray-900 text-gray-800 hover:text-white font-bold py-2 px-4 rounded {cls}"
  {href}
>
  <slot />
</a>
