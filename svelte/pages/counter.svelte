<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let counter = 0;
  let page = state.page;

  const handleClick = n => {
    counter += 1 * n;
  };
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Header />
<div class="container mx-auto pt-64">
  <div class="shadow-lg w-64 mx-auto">
    <h2 class="text-center text-6xl text-indigo-700">{counter}</h2>
    <div class="flex">
      <button
        class="w-1/2 bg-red-400 focus:outline-none hover:bg-red-500"
        on:click={() => {
          handleClick(-1);
        }}>
        -
      </button>
      <button
        class="w-1/2 bg-green-400 focus:outline-none hover:bg-green-500"
        on:click={() => {
          handleClick(1);
        }}>
        +
      </button>

    </div>

  </div>

</div>
