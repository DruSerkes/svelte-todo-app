<script>
  import { todos } from "../stores";
  export let id, title, completed, userId;

  const toggleComplete = () => {
    todos.updateTodo({ id, title, completed: !completed, userId });
  };
  const removeTodo = () => todos.removeTodo(id);
</script>

<li>
  <span on:click={toggleComplete} class:completed>{title}</span>
  <button on:click={removeTodo}>X</button>
</li>

<style>
  li {
    font-family: "Courier New", Courier, monospace;
    font-size: 1.25rem;
    line-height: 2.5rem;
    position: relative;
  }
  li:hover {
    cursor: crosshair;
  }
  .completed {
    opacity: 0.3;
  }
  button {
    background-color: crimson;
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 25%;
  }
</style>
