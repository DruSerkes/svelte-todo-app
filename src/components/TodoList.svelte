<script>
  export let todos;
</script>

{#if !todos.length}
  <p>No Todos Found!</p>
{:else}
  <ul>
    {#each todos as todo}
      <li id={todo.id}>{todo.title}</li>
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
    margin-top: 4rem;
  }
</style>
