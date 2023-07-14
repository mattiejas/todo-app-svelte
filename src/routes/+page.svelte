<script lang="ts">
  import Heading from '$lib/ui/Heading.svelte';
  import type { Todo } from '@prisma/client';

  export let data: { todos: Todo[] };

  console.log(data);
</script>

<Heading level={1}>You should do something.</Heading>

<!-- {#each data.todos as todo} -->
<!-- <li>{todo.title}</li> -->
<!-- {/each} -->
