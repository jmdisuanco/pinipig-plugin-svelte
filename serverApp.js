module.exports = (head, html, css, props) =>
  `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Pinipig server App</title>
    ${head}
    <link rel="icon" type="image/ico" href="/favicon.ico" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/index.css" />
    <script src="/csr.js"></script>
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
