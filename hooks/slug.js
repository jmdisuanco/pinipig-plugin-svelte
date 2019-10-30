const App = require('../../svelte/generated/ssr.js')
const serverApp = require('../svelte/serverApp')
const stringify = require('fast-stringify').default

const slug = (page) => (ctx) => {
  const { payload } = ctx
  const { postType, slug } = ctx.parameters
  page != undefined ? (postType = page) : null
  payload.slug = slug //assign slug value
  try {
    let props = {
      setPage: `/${postType}`,
      payload: stringify(payload),
    }

    const { head, html, css } = App.render(props)

    ctx.res.end(serverApp(head, html, css, stringify(props)))
  } catch (err) {
    ctx.res.end(
      `<html>
          <body>Slug not Found</body>
        </html>`,
    )
  }
}

module.exports = slug
