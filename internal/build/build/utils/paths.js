const { resolve } = require('path')

// root
const root = resolve(__dirname, '../../../../')

// packages
const packagesFolder = resolve(root, 'packages')

// input
const inputFolder = resolve(packagesFolder, 'mingcomity-design')
const cssInputFolder = resolve(packagesFolder, 'components')

// output
const outpuFoldert = resolve(root, 'dist')
const outputEsmFolder = resolve(outpuFoldert, 'es')
const outputCjsFolder = resolve(outpuFoldert, 'lib')
const outputUmdFolder = resolve(outpuFoldert, 'dist')

// style
const styleInputFolder = resolve(packagesFolder, 'theme-chalk')
const styleOutputFolder = resolve(outpuFoldert, 'theme-chalk')

// package
const epPackage = resolve(inputFolder, 'package.json')

module.exports = {
  root,
  inputFolder,
  outpuFoldert,
  outputEsmFolder,
  outputCjsFolder,
  outputUmdFolder,
  styleInputFolder,
  styleOutputFolder,
  epPackage,
  cssInputFolder,
  packagesFolder
}
