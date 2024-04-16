const PKG_PREFIX = '@mingcomity-design'
const PKG_NAME = 'mingcomity-design'
function MingcomityDesignAlias() {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}`
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}`

  return {
    name: 'mingcomity-design-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute'
      }
    }
  }
}
module.exports = {
  MingcomityDesignAlias
}
