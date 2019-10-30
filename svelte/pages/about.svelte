<script>
  import Header from "../components/header.svelte";
  import state from "../state";
  import Og from "../components/og.svelte";
  let page = state.page;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Og
  title="About Us"
  url="https://pinipig.js.org"
  type="website"
  summary="summary performant web framework"
  description="description performant web framework"
  image="https://picsum.photos/id/237/200/300" />

<svelte:head>
  <title>About us</title>
</svelte:head>
<Header />
<h1>Page {$page}!</h1>
