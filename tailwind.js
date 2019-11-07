const defaultConfig = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

try {
  const config = require('../svelte/config.json')
  module.exports = config.tailwind
} catch (e) {
  module.exports = defaultConfig
}
