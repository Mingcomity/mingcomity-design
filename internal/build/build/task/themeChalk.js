const { styleInputFolder } = require('../utils/paths')

const buildThemeChalk = async (cb) => {
  // 纯es包
  const { execa } = await import('execa')
  await execa('pnpm', ['run', 'build'], {
    cwd: styleInputFolder
  })
  cb()
}

module.exports = {
  buildThemeChalk
}
