const tailwindcss = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [`./src/svelte/**/*.svelte`, `.public/**/*.html`],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    tailwindcss(`./src/plugins/svelte/tailwind.js`),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
