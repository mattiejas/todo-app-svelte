<script lang="ts">
  import Heading from '$lib/ui/Heading.svelte';
  import Fa from 'svelte-fa';
  // import { faPlus } from '@fortawesome/free-solid-svg-icons';
  import type { PageData } from './$types';

  export let data: PageData;

  $: todos = data.todos ?? [];

  console.log(data);
</script>

<Heading level={1}>You should do something.</Heading>

<ul class="mb-4">
  {#each todos as todo}
    <li>{todo.title}</li>
  {/each}
</ul>

<form action="?/addTodo" method="POST">
  <input
    type="text"
    name="title"
    class="h-[50px] border-2 border-purple-600 rounded-full p-4"
  />
  <button
    type="submit"
    class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full w-[50px] h-[50px] ml-2"
  >
    +
  </button>
</form>
