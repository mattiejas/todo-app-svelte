<script lang="ts">
  import Heading from '$lib/ui/Heading.svelte';
  import Fa from 'svelte-fa';
  import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
  import type { PageData } from './$types';

  export let data: PageData;

  $: todos = data.todos ?? [];

  console.log(data);
</script>

<Heading level={1}>You should do something.</Heading>

<ul class="my-4">
  {#each todos as todo}
    <li>
      <form action="?/deleteTodo" method="POST">
        <input type="hidden" name="id" value={todo.id} />
        <button
          type="submit"
          class="text-gray-700 hover:text-red-500 font-bold py-2 px-4 ml-2"
        >
          <Fa icon={faTrash} />
        </button>
        <span class="text-gray-700">{todo.title}</span>
      </form>
    </li>
  {/each}
</ul>

<form action="?/addTodo" method="POST">
  <input
    type="text"
    name="title"
    placeholder="What do?"
    class="h-[50px] border-2 border-purple-600 rounded-full p-4"
  />
  <button
    type="submit"
    class="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-[50px] h-[50px] ml-2 inline-flex items-center justify-center"
  >
    <Fa icon={faPlus} />
  </button>
</form>
