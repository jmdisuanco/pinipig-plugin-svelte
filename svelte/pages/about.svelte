<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>
<Header />
<h1 class="text-4xl">About Page</h1>
