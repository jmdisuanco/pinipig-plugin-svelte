require('es6-promise').polyfill()
require('isomorphic-fetch')
const App = require('../../../svelte/generated/ssr')
const serverApp = require('../../../svelte/serverApp')
const stringify = require('fast-stringify').default
const { streamFile } = require('pinipig')
const static = streamFile('public')
const ssr = (ctx) => {
  try {
    const { payload } = ctx
    let url = '/'
    try {
      url = ctx.req.getUrl()
    } catch (e) {
      url = ctx.payload.url
    }
    if (url.split('.').length < 2) {
      url === '/' ? (url = '/index') : null
      let props = {
        setPage: url,
        payload: stringify(payload),
      }
      const { head, html, css } = App.render(props)
      ctx.res.end(serverApp(head, html, css, stringify(props)))
    } else {
      static(ctx)
    }
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
