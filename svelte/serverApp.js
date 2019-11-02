module.exports = (head, html, css, props) =>
  `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Pinipig server App</title>
    ${head}
    <link rel="icon" type="image/ico" href="/assets/favicon.ico" />
    <link rel="stylesheet" href="/assets/global.css" />
    <link rel="stylesheet" href="/assets/index.css" />
    <link rel="stylesheet" href="/assets/bundle.css" />
    <script src="/assets/csr.js"></script>
    <style>
      ${css.code}
    </style>
  </head>

  <body>
    ${html}
  </body>
  <script>
    let App = new app({
      target: document.body,
      hydrate: true,
      props: ${props}
    })
  </script>
</html>
`
