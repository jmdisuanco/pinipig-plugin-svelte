const App = require('../../../svelte/generated/ssr')
const serverApp = require('../../../svelte/serverApp')
const stringify = require('fast-stringify').default

const slug = (page) => (ctx) => {
  let { payload } = ctx
  Object.assign(payload, ctx.parameters)
  try {
    let props = {
      setPage: `/${page}`,
      payload: stringify(payload),
    }
    const { head, html, css } = App.render(props)

    ctx.res.end(serverApp(head, html, css, stringify(props)))
  } catch (err) {
    console.log(err)
    ctx.res.end(
      `<html>
          <body>Slug not Found</body>
        </html>`,
    )
  }
}

module.exports = slug
