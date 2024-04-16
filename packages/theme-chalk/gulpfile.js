const { src, dest, parallel } = require('gulp')
const path = require('path')
const postcss = require('gulp-postcss')

const sourceFolder = path.resolve(__dirname, 'src/**/*.css')
const modulesFolder = path.resolve(__dirname, '../../dist/theme-chalk')
const fullFolder = path.resolve(__dirname, '../../dist/dist')

/**
 * 对css处理的任务 postcss to css
 */

const buildModulesThemeChalk = () => {
  return src(sourceFolder).pipe(postcss()).pipe(dest(modulesFolder))
}

const buildFullThemeChalk = () => {
  return src('./src/index.css').pipe(postcss()).pipe(dest(fullFolder))
}

exports.default = parallel(buildModulesThemeChalk, buildFullThemeChalk)
