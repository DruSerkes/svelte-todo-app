<script>
  export let addTodo;
  let currentTodo;

  const handleSubmit = () => {
    addTodo(currentTodo);
    currentTodo = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={currentTodo} />
  <button type="submit">Add Todo</button>
</form>

<style>
  button {
    background-color: cornflowerblue;
    border-radius: 4px;
  }
</style>
