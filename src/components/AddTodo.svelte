<script>
  import { todos } from "../stores";

  let value;

  const handleSubmit = () => {
    if (!value) return;
    todos.addTodo(value);
    value = "";
  };
  const handleClear = (e) => {
    if (e.key === "Escape") value = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    on:keyup={handleClear}
    bind:value
    placeholder="What to do?"
    aria-label="Add a new to-do"
  />
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
