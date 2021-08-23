<script lang="ts">
  import TodoList from "./components/TodoList.svelte";
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  let todos = [];

  const getInitialTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos?userId=1`);
    const initialTodos = await response.json();
    todos = initialTodos;
  };

  getInitialTodos();
</script>

<main>
  <h1>Hello!</h1>
  <TodoList {todos} />
</main>

<style>
</style>
