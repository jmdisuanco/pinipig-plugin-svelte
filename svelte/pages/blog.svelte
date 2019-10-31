<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
  export let payload;

  let data = {
    title: "",
    content: "",
    slug: ""
  };

  if (payload) {
    data = JSON.parse(payload);
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>
{#if data}
  <Header />
  <h1>Page {$page} / {data.slug}</h1>
  <div>{data.content}</div>
{/if}
