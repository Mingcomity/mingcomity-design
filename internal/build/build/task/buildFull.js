const path = require('path')
const { rollup } = require('rollup')

// 用于 rollup 支持 cjs
const commonjs = require('@rollup/plugin-commonjs')
// 导入的扩展
const nodeResolve = require('@rollup/plugin-node-resolve')
// 解决vue代码环境变量的问题
const replace = require('rollup-plugin-replace')
// vue 需要的包
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
// ts支持 以及 teser 代码压缩
const { default: esbuild, minify: minifyPlugin } = require('rollup-plugin-esbuild')

// 变量
const { version } = require('../utils/canstans')

const { inputFolder, outputUmdFolder } = require('../utils/paths')
// const generateExternal = require('../utils/generateExternal')
const banner = `/*! mingcomity desgin v${version} */\n`

const build = async (minify = false) => {
  // 入口
  const input = [path.resolve(inputFolder, 'index.ts')]

  // 编译解析
  const bundle = await rollup({
    input,
    plugins: [
      commonjs(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts', 'tsx', 'jsx']
      }),
      vue(),
      vueJsx(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      esbuild({
        sourceMap: minify,
        target: 'es2018',
        treeShaking: true
      }),
      minify ? minifyPlugin({ target: 'es2018', sourceMap: minify }) : null
    ],
    treeshake: true,
    external: ['vue']
  })

  // 输出文件
  await Promise.all([
    bundle.write({
      // 打包模式
      format: 'umd',
      name: 'mingcomity-design',
      file: path.resolve(outputUmdFolder, `index.full${minify ? '.min' : ''}.js`),
      // 导出模式特殊处理
      exports: 'named',
      globals: {
        vue: 'Vue'
      },
      sourcemap: minify,
      banner
    }),
    bundle.write({
      // 打包模式
      format: 'esm',
      file: path.resolve(outputUmdFolder, `index.full${minify ? '.min' : ''}.mjs`),
      sourcemap: minify,
      banner
    })
  ])
}

// 合并为一个主任务
const buildFull = async () => {
  await Promise.all([build(false), build(true)])
}

module.exports = {
  buildFull
}
