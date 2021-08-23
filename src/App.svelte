<script lang="ts">
  import { v4 as uuid } from "uuid";
  import type { todo } from "./types";
  import TodoList from "./components/TodoList.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const getInitialTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos?userId=1`).catch((e) => e);
    const initialTodos = await response.json();
    todos = initialTodos.slice(0, 10);
  };
  const addTodo = async (title) => {
    const body = JSON.stringify({
      id: uuid(),
      userId: 1,
      completed: false,
      title,
    });
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((e) => e);
    const newTodo = await response.json();
    todos = todos?.length ? [...todos, newTodo] : [newTodo];
  };

  let todos: todo[] = [];

  getInitialTodos();
</script>

<main>
  <h1>My To-Do List!</h1>

  {#await todos}
    <p>Loading Your Todos...</p>
  {:then todos}
    <TodoList {todos} />
  {:catch error}
    <p>Error fetching your todos</p>
    <TodoList todos={[]} />
  {/await}

  <AddTodo {addTodo} />
</main>

<style>
  main {
    text-align: center;
  }
  h1 {
    font-size: 4rem;
  }
</style>
