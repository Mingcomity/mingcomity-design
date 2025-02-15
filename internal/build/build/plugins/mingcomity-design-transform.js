const { Transform } = require('stream')

// const PKG_PREFIX = '@mingcomity-design'
const PKG_NAME = 'mingcomity-design/es'

const contentForFile = (file) => {
  const content = file.contents.toString()
  const newContent = content
    .replace(/@mingcomity-design/g, PKG_NAME)
    .replace(/mingcomity-design\/es\/theme-chalk/g, 'mingcomity-design/theme-chalk')
  return Buffer.from(newContent)
}

const MingcomityDesignTransform = () => {
  return new Transform({
    objectMode: true,
    transform(file, _, callback) {
      file.contents = contentForFile(file)
      return callback(null, file)
    }
  })
}

module.exports = { MingcomityDesignTransform }
