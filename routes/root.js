const ssr = require('../plugins/svelte/hooks/ssr')
const { streamFile } = require('pinipig')

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
    url: '/assets/*',
    GET: streamFile('public/assets'),
  },
  {
    url: '*',
    GET: streamFile('public'),
  },
]

module.exports = routes
