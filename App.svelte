<script>
  export let setPage;
  export let payload;
  import routes from "../../svelte/generated/routes";
  import state from "./state";

  const getRoute = routes => route => {
    try {
      let target = routes.find(function(o) {
        return o.route == route;
      });
      return target.component;
    } catch (e) {
      console.error(e.message, "route not found");
    }
  };
  const Route = getRoute(routes);

  let page = state.page;
  if (setPage) {
    page.set(setPage);
  }
</script>

<svelte:component this={Route($page)} {payload} />
