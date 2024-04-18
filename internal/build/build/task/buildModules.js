const glob = require('fast-glob')
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
const { default: esbuild } = require('rollup-plugin-esbuild')
// 引入格式转换插件
const { MingcomityDesignAlias } = require('../plugins/mingcomity-design-alias')
// 变量
const { version } = require('../utils/canstans')
// 工具函数
const { excludeFiles } = require('../utils/excludeFiles')
const { generateExternal } = require('../utils/generateExternal')

const { inputFolder, outputCjsFolder, outputEsmFolder, cssInputFolder } = require('../utils/paths')

const banner = `/*! mingcomity desgin v${version} */\n`

const buildModules = async () => {
  // css入口
  const cssInput = excludeFiles(
    await glob('**/style/css.{js,ts}', {
      cwd: cssInputFolder,
      absolute: true,
      onlyFiles: true
    })
  )
  // 入口
  const input = [path.resolve(inputFolder, 'index.ts'), ...cssInput]

  // 编译解析
  const bundle = await rollup({
    input,
    plugins: [
      MingcomityDesignAlias(),
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
        sourceMap: true,
        jsxFactory: 'vueJsxCompat',
        target: 'es2018',
        treeShaking: true
      })
    ],
    treeshake: true,
    external: generateExternal({ full: false })
  })

  // 输出文件
  await Promise.all([
    bundle.write({
      // 打包模式
      format: 'cjs',
      name: 'mingcomity-design',
      dir: outputCjsFolder,
      // 导出模式 cjs 特殊处理
      exports: 'named',
      globals: {
        vue: 'Vue'
      },
      entryFileNames: '[name].js',
      sourcemap: true,
      banner,
      preserveModules: true,
      preserveModulesRoot: inputFolder
    }),
    bundle.write({
      format: 'esm',
      dir: outputEsmFolder,
      sourcemap: true,
      banner,
      entryFileNames: '[name].mjs',
      preserveModules: true,
      preserveModulesRoot: inputFolder
    })
  ])
}

module.exports = {
  buildModules
}
