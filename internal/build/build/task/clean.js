const fs = require('fs-extra')
const { outpuFoldert } = require('../utils/paths')

const clean = async () => {
  await fs.remove(outpuFoldert)
}
module.exports = { clean }
