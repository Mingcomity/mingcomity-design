const { epPackage } = require('./paths')
const getCompPackage = () => {
  const { version, dependencies = {}, peerDependencies = {} } = require(epPackage)
  return {
    version,
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  }
}

const generateExternal = (options) => {
  const { dependencies, peerDependencies } = getCompPackage()
  const packages = peerDependencies
  if (!options.full) {
    packages.push(...dependencies)
  }

  return (id) => {
    return [...new Set(packages)].some((pkg) => id === pkg || id.startsWith(`${pkg}/`))
  }
}
module.exports = {
  generateExternal
}
