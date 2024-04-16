const config = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/standard/eslint-config-standard
    'standard',
    'plugin:prettier/recommended'
  ]
}

module.exports = config
