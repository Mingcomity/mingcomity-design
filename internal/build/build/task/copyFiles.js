const { copyFile } = require('fs/promises')
const path = require('path')
const { epPackage, outpuFoldert, root } = require('../utils/paths')
const copyFiles = async (cb) => {
  await Promise.all([
    copyFile(epPackage, path.resolve(outpuFoldert, 'package.json')),
    copyFile(path.resolve(root, 'README.md'), path.resolve(outpuFoldert, 'README.md')),
    copyFile(path.resolve(root, 'global.d.ts'), path.resolve(outpuFoldert, 'global.d.ts'))
  ])
  cb()
}

module.exports = {
  copyFiles
}
