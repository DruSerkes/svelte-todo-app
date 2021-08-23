<script>
  export let addTodo;

  let currentTodo;

  const handleSubmit = () => {
    if (!currentTodo) return;
    addTodo(currentTodo);
    currentTodo = "";
  };
  const handleClear = (e) => {
    if (e.key === "Escape") currentTodo = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" on:keyup={handleClear} bind:value={currentTodo} />
  <button type="submit">Add Todo</button>
</form>

<style>
  input {
    height: 1.75rem;
  }
  button {
    background-color: cornflowerblue;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  button:hover {
    background-color: darkblue;
    color: whitesmoke;
    cursor: pointer;
  }
</style>
