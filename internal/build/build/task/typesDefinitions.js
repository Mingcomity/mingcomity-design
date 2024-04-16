const { src, dest } = require('gulp')

const { outputEsmFolder, outputCjsFolder, inputFolder } = require('../utils/paths')

// 工具函数
const { MingcomityDesignTransform } = require('../plugins/mingcomity-design-transform')

const generateTypesDefinitions = async () => {
  // 纯es包
  const { execa } = await import('execa')
  await execa('npx', ['vue-tsc', '-b'], {
    cwd: inputFolder
  })

  return src(`${outputEsmFolder}/**/*.d.ts`)
    .pipe(MingcomityDesignTransform())
    .pipe(
      dest(function (data) {
        return data.base
      })
    )
    .pipe(dest(`${outputCjsFolder}`))
}

module.exports = {
  generateTypesDefinitions
}
