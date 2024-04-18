import path from 'path'
import prompts from 'prompts'
import fs from 'fs-extra'
import { template, camelCase, upperFirst } from 'lodash-es'

const componentFolder = path.resolve(__dirname, '../packages/components')
const cssFolder = path.resolve(__dirname, '../packages/theme-chalk')

// 检查组件名是否规范
function checkComponentName(name: string) {
  return !/^[a-z][a-z|-]*[a-z]$/.test(name)
}

// 检查同名
function checkComponentExist(name: string) {
  return fs.existsSync(path.resolve(componentFolder, name))
}

const getCreatedFiles = (name: string) => {
  return [
    {
      file: path.resolve(componentFolder, name, 'src', 'index.tsx'),
      template: path.resolve(__dirname, './temlpate/index.src.tsx.tpl')
    },
    {
      file: path.resolve(componentFolder, name, 'src', 'types.ts'),
      template: path.resolve(__dirname, './temlpate/types.src.ts.tpl')
    },
    {
      file: path.resolve(componentFolder, name, 'style', 'index.ts'),
      template: path.resolve(__dirname, './temlpate/index.style.ts.tpl')
    },
    {
      file: path.resolve(componentFolder, name, 'style', 'css.ts'),
      template: path.resolve(__dirname, './temlpate/css.style.ts.tpl')
    },
    {
      file: path.resolve(componentFolder, name, '__tests__', 'index.tsx'),
      template: path.resolve(__dirname, './temlpate/index.test.tsx.tpl')
    },
    {
      file: path.resolve(componentFolder, name, 'index.ts'),
      template: path.resolve(__dirname, './temlpate/index.ts.tpl')
    },
    {
      file: path.resolve(cssFolder, 'src', `${name}.css`),
      template: path.resolve(__dirname, './temlpate/css.css.tpl')
    }
  ]
}

/**
 * 添加一个组件
 */
const addComponent = async (name: string) => {
  getCreatedFiles(name).forEach(async (item) => {
    // 读取模板
    const tplPath = item.template
    let data = await fs.readFile(tplPath, 'utf-8')

    // 编译模板
    const compiled = template(data)
    data = compiled({
      name,
      camelCaseName: camelCase(name),
      pascalCaseName: upperFirst(camelCase(name))
    })

    // 输入模板
    const outputPath = item.file
    await fs.outputFile(outputPath, data)
    console.log(`已创建：${outputPath}`)
  })
}

async function init() {
  const result = await prompts([
    {
      type: 'text',
      name: 'name',
      message: '输入组件名称',
      validate: (name) => {
        if (checkComponentName(name)) {
          return '组件名称请使用(kebab-case)方式命名！'
        }
        if (checkComponentExist(name)) {
          return `组件库中已经存在名为${name}的组件！`
        }
        return true
      }
    }
  ])
  if (!result.name) return
  await addComponent(result.name)
}
init()
