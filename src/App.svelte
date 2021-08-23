<script lang="ts">
  import TodoList from "./components/TodoList.svelte";
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const getInitialTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos?userId=1`).catch((e) => e);
    const initialTodos = await response.json();
    return initialTodos;
  };
  let todos = getInitialTodos();
</script>

<main>
  <h1>Hello!</h1>
  {#await todos}
    <p>Loading Your Todos...</p>
  {:then todos}
    <TodoList {todos} />
  {:catch error}
    <p>Error fetching your todos</p>
  {/await}
</main>

<style>
  main {
    text-align: center;
  }
</style>
