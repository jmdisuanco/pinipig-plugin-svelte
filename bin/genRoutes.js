#!/usr/bin/env node

const fs = require('fs')
let watch = process.argv
const generate = () => {
  let result = `/*\n\t Generated by Pinipig-Svelte \n\t Any Manual input here will be removed every Route Generation  \n*/`
  let pages = fs.readdirSync(`${process.cwd()}/src/svelte/pages`)

  let Capitalize = (page) => {
    let name = page.split('.')[0]
    let Name = name.charAt(0).toUpperCase() + name.slice(1)
    Name += 'Page'
    return Name.replace(/\s/g, '_')
  }

  pages.map((page) => {
    result += `\nimport ${Capitalize(page)} from '../pages/${page}';`
  })

  result += '\n\nconst routes =['
  pages.map((page) => {
    result += `\n\t{route: '/${page.split('.')[0]}', component: ${Capitalize(
      page,
    )} },`
  })

  result += '\n]\nexport default routes'

  fs.writeFileSync(
    `${process.cwd()}/src/plugins/svelte/.generated/routes.js`,
    result,
  )
}

generate()

if (watch.includes('-w')) {
  fs.watch(`${process.cwd()}/src/svelte/pages`, (event, filename) => {
    console.log(`building new routes adding / removing ${filename}`)
    generate()
  })
}
