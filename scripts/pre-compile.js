const fs = require('fs')
const path = require('path')

const renameToCssModule = modulePath => {
  const filePath = generatFilePath(modulePath)
  fs.copyFileSync(filePath, filePath.replace(/\.css$/, '.module.css'))

  function generatFilePath(modulePath) {
    return path.join(__dirname, '../', 'node_modules', modulePath)
  }
}

renameToCssModule('github-markdown-css/github-markdown.css')
