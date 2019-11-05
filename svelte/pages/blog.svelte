<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";

  let page = state.page;
  export let payload;
  let blogList;
  let data = {
    title: "",
    content: "",
    slug: ""
  };

  const getBlogList = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const text = await res.json();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  };

  if (payload) {
    data = JSON.parse(payload);
  }

  if (data.slug === "") {
    //if no payload slug property we need to list the blog index
    blogList = getBlogList();
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<svelte:head>
  <title>{data.slug}</title>
</svelte:head>
<Header />

{#if data.slug}
  <h1>Page {$page} / {data.slug}</h1>
  <div>{data.content}</div>
{:else}
  <div>
    {#await blogList}
      <p>waiting...</p>
    {:then posts}
      {#each posts as post}
        <div>
          <a href="blog/{post.title.replace(/\s+/g, '-')}">{post.title}</a>
        </div>
      {/each}
    {:catch error}
      <div>oops! :{error}</div>
    {/await}
  </div>
{/if}
