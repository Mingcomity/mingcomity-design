const { parallel, series } = require('gulp')

// 文件清理
const { clean } = require('./task/clean')
// 模块组件打包
const { buildModules } = require('./task/buildModules')
// 全量打包
const { buildFull } = require('./task/buildFull')
// 类型文件
const { generateTypesDefinitions } = require('./task/typesDefinitions')
// 样式文件
const { buildThemeChalk } = require('./task/themeChalk')
// 复制文件
const { copyFiles } = require('./task/copyFiles')

exports.default = series(
  clean,
  parallel(buildModules, buildFull, generateTypesDefinitions, buildThemeChalk),
  copyFiles
)
