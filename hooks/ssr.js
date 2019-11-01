const App = require('../../../svelte/generated/ssr')
const serverApp = require('../../../svelte/serverApp')
const stringify = require('fast-stringify').default

const ssr = (ctx) => {
  try {
    let url = ctx.req.getUrl()
    let props = {
      setPage: url,
      payload: '',
    }
    const { head, html, css } = App.render(props)
    ctx.res.end(serverApp(head, html, css, stringify(props)))
  } catch (err) {
    ctx.res.end(
      `<html>
          <body>404</body>
          <pre>${err}</pre>
        </html>`,
    )
  }
}

module.exports = ssr
