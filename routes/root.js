const ssr = require('../plugins/svelte/hooks/ssr')
const { streamFile } = require('pinipig')

const getPost = async (ctx) => {
  let { id } = ctx.parameters
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    let data = await response.json()
    let payload = {
      url: '/post', // to assign a different page from url
      post: data,
      id,
    }
    Object.assign(ctx, { payload: payload })
    return ctx
  } catch (e) {
    return ctx
    console.log(e)
  }
}

const getBlogs = async (ctx) => {
  let url = ctx.req.getUrl()
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await response.json()
    let payload = {
      url: url,
      blogs: data,
    }
    Object.assign(ctx, { payload: payload })
    return ctx
  } catch (e) {
    return ctx
    console.log(e)
  }
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
    url: '/blog',
    GET: [getBlogs, ssr],
  },
  {
    url: '/blog/:id',
    GET: [getPost, ssr],
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
