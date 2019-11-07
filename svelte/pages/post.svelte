<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";

  let page = state.page;
  export let payload;
  let blogList;
  let post = {
    title: "",
    body: ""
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
    post = JSON.parse(payload).post;
  }
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<Header />
<h1 class="text-indigo-500 text-size-5xl">{post.title}</h1>
<div>{post.body}</div>
