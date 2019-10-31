<script>
  import state from "../../plugins/svelte/state";
  let page = state.page;
</script>

<header class="bg-gray-400">
  <nav class="flex justify-between w-full bg-gray-500 text-white p-4">
    <a
      href="/"
      on:click={e => {
        e.preventDefault();
        page.set('/index');
      }}>
      <span class="font-semibold text-xl tracking-tight">Pinipig</span>
    </a>
    <div class="md:items-center md:w-auto flex">
      <div class="md:flex hidden">
        <a
          class="block md:text-white mr-4"
          href="/about.html"
          on:click={e => {
            e.preventDefault();
            page.set('/about');
          }}>
          About
        </a>
        <a
          class="block md:text-white mr-4"
          href="/counter.html"
          on:click={e => {
            e.preventDefault();
            page.set('/counter');
          }}>
          Counter
        </a>
      </div>
    </div>
  </nav>
</header>
