<script>
  import { onMount } from "svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
  onMount(() => {
    const nav = document.getElementById("nav");
    nav.addEventListener("click", e => {
      e.preventDefault();
      if (e.target.tagName == "A") {
        let url = e.target.getAttribute("href");
        page.set(url);
        history.pushState(1, url.replace("/", ""), url);
      }
    });
  });
</script>

<header class="bg-purple-700">
  <nav class="flex justify-between w-full text-white p-4">
    <a href="/">
      <span class="font-semibold text-xl tracking-tight">Pinipig</span>
    </a>
    <div class="md:items-center md:w-auto flex">
      <div id="nav" class="flex">
        <a class="block md:text-white mr-4" href="/about">About</a>
        <a class="block md:text-white mr-4" href="/counter">Counter</a>
      </div>
    </div>
  </nav>

</header>
