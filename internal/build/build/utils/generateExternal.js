const { compPackage } = require('./paths')
const getCompPackage = () => {
  const { version, dependencies = {}, peerDependencies = {} } = require(compPackage)
  return {
    version,
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  }
}

const generateExternal = (options) => {
  const { dependencies, peerDependencies } = getCompPackage()
  const packages = peerDependencies
  if (options.full) {
    packages.push(...dependencies)
  }

  return (id) => {
    return packages.some((pkg) => id === pkg || (options.full && id.startsWith(`${pkg}/`)))
  }
}
module.exports = generateExternal
