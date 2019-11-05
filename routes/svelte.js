const ssr = require('../hooks/ssr')
const { streamFile } = require('pinipig')

const payloader = (ctx) => {
  let { parameters } = ctx
  Object.assign(ctx, { payload: parameters })
  return ctx
}

let routes = [
  {
    url: '/',
    GET: ssr,
  },
  {
    url: '/:page',
    GET: ssr,
  },
  {
    url: '/blog/:slug',
    GET: [payloader, ssr],
  },
  {
    url: '/assets/*',
    GET: streamFile('public/assets'),
  },
  {
    url: '*',
    GET: streamFile('public'),
  },
]

module.exports = routes
