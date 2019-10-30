const App = require('../svelte/generated/ss.js')
const serverApp = require('../svelte/serverApp')
const stringify = require('fast-stringify').default
// const { streamFile } = require('pinipig')

const ssr = (ctx) => {
  try {
    let url = ctx.req.getUrl().split('.')
    if (url[1] === 'html') {
      let props = {
        setPage: url[0],
        payload: '',
      }
      const { head, html, css } = App.render(props)

      ctx.res.end(serverApp(head, html, css, stringify(props)))
    } else {
      // streamFile('./public')(ctx)
      res.end()
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
