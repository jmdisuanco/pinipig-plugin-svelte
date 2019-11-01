<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<svelte:head>
  <title>Pinipig SSR</title>
</svelte:head>
<Header />
<h1>Page : {$page}!</h1>
<div class="bg-green-300">Home Page</div>
