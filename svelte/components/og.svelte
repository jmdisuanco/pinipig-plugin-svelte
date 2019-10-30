<script>
  export let title;
  export let url;
  export let type;
  export let summary;
  export let description;
  export let image;
</script>

<svelte:head>
  <meta property="og:title" content={title} />
  <meta property="og:url" content={url} />
  <meta name="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content={summary} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:image" content={image} />
</svelte:head>
