<script>
  import Header from "../components/header.svelte";
  import state from "../../plugins/svelte/state";
  let page = state.page;
</script>

<style>
  #wrapper {
    background-image: url("/assets/success.jpg");
  }
</style>

<svelte:head>
  <title>Pinipig-Svelte</title>
</svelte:head>
<div id="wrapper" class="bg-cover bg-right bg-no-repeat h-screen max-h-screen ">
  <Header />
  <div id="hero" class="text-right sm:text-left p-2 sm:pl-64 text-indigo-600">
    <h1 class="text-6xl sm:text-ube ">Awesome!</h1>
    <h2 class="text-sm sm:text-purple-700 ">Svelte plugin is now installed!</h2>
    <div>
      <div class="text-purple-700 text-2xl mt-64">
        Start coding awesomeness! 😎
      </div>
      <div>
        <div>The svelte files are located at</div>
        <pre>/src/svelte</pre>
        <div>
          Learn more about PinipigJS at
          <a
            href="https://pinipig.js.org"
            class="underline hover:text-gray-900"
            target="_blank">
            Pinipig.js.org
          </a>
        </div>
        <div>
          Documentation about this plugin
          <a
            class="underline hover:text-gray-900"
            href="/about"
            on:click={e => {
              e.preventDefault();
              page.set('/about');
            }}>
            here
          </a>

        </div>
      </div>

    </div>
  </div>
</div>
