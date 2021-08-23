<script>
  export let todos;

  const toggleCompleted = (todo) => {};
</script>

{#if !todos.length}
  <p>No Todos Found!</p>
{:else}
  <ul>
    {#each todos as { id, title }}
      <li {id}>{title}</li>
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
