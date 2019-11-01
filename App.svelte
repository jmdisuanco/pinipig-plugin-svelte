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
      try {
        //if running on server set header status to 404
        ctx.res.writeStatus("404");
      } catch (e) {}
      page.set("/_404");
    }
  };
  const Route = getRoute(routes);

  let page = state.page;
  if (setPage) {
    page.set(setPage);
  }
</script>

<svelte:component this={Route($page)} {payload} />
