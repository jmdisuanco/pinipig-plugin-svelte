<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let counter = 0;
  let page = state.page;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Header />
<h1>Page {$page}!</h1>
<h2>{counter}</h2>
<button
  on:click={() => {
    counter += 1;
  }}>
  Add
</button>
