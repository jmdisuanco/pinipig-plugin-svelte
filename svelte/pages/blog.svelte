<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";

  let page = state.page;
  export let payload;
  let blogList;
  let data;
  const getBlogList = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const text = await res.json();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  };
  blogList = getBlogList();

  if (payload) {
    data = JSON.parse(payload).blogs;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<svelte:head>
  <title>Blogs</title>
</svelte:head>
<Header />

{#if data}
  <h1>Page {$page}</h1>

  {#each data as post}
    <div>
      <a href="blog/{post.id}">{post.title}</a>
    </div>
  {/each}
{:else}
  <div>
    {#await blogList}
      <p>waiting...</p>
    {:then posts}
      {#each posts as post}
        <div>
          <a href="blog/{post.id}">{post.title}</a>
        </div>
      {/each}
    {:catch error}
      <div>oops! :{error}</div>
    {/await}
  </div>
{/if}
