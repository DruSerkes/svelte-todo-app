<script lang="ts">
  import { onMount } from "svelte";
  import { todos } from "./stores";
  import TodoList from "./components/TodoList.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  onMount(todos.getTodos);
</script>

<main>
  <h1>My To-Do List!</h1>

  <AddTodo />

  {#if !$todos.length}
    <p>Loading Your Todos...</p>
  {:else}
    <TodoList />
  {/if}
</main>

<style>
  main {
    text-align: center;
  }
  h1 {
    font-size: 4rem;
  }
</style>
