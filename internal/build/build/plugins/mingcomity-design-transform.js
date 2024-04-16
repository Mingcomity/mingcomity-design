const { Transform } = require('stream')

// const PKG_PREFIX = '@mingcomity-design'
const PKG_NAME = 'mingcomity-design'

const contentForFile = (file) => {
  const content = file.contents.toString()
  const newContent = content.replace(/@mingcomity-design/g, PKG_NAME)
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
