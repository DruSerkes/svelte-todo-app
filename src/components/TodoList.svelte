<script>
  export let todos = [];
</script>

{#if !todos.length}
  <p>Loading Your Todos...</p>
{/if}
<ul>
  {#each todos as todo}
    <li id={todo.id}>{todo.title}</li>
  {/each}
</ul>
