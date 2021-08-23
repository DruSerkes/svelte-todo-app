<script>
  export let { id, title, completed, userId } = todo;
  export let toggleCompleted;
</script>

<li on:click={toggleCompleted} class:completed {id}>{title}</li>

<style>
  .completed {
    opacity: 0.4;
  }
</style>
