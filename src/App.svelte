<script lang="ts">
  import { onMount } from "svelte";
  import { v4 as uuid } from "uuid";
  import type { todo } from "./types";
  import TodoList from "./components/TodoList.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  const BASE_URL = "https://jsonplaceholder.typicode.com";
  let todos: todo[] = [];

  onMount(async () => {
    const response = await fetch(`${BASE_URL}/todos?userId=1`).catch((e) => e);
    const initialTodos = await response.json();
    todos = initialTodos.slice(0, 10);
  });

  const addTodo = async (title: string) => {
    const body = JSON.stringify({
      id: uuid(),
      userId: 1,
      completed: false,
      title,
    });
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const newTodo = await response.json();
      todos = todos?.length ? [...todos, newTodo] : [newTodo];
    } catch (e) {
      console.log(e);
      const newTodo = JSON.parse(body);
      todos = todos?.length ? [...todos, newTodo] : [newTodo];
    }
  };
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
