<script>
  import { todos } from "../stores";
  import TodoItem from "./TodoItem.svelte";
</script>

{#if !$todos.length}
  <p>No Todos Found!</p>
{:else}
  <ul>
    {#each $todos as todo}
      <TodoItem {...todo} id={todo.id} />
    {/each}
  </ul>
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  p,
  ul {
    margin-top: 2rem;
  }
</style>
