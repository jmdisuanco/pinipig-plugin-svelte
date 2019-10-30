<script>
  import Header from "../components/header.svelte";
  import state from "../state";
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
<div class="bg-red-300">Index</div>
