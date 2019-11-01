<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
</script>

<style>
  h1 {
    color: red;
    font-size: 20px;
  }
</style>

<!-- 404 -->
<svelte:head>
  <title>404 Page not Found</title>
</svelte:head>
<h1>Page Not found</h1>
