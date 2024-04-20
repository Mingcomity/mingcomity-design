module.exports = {
  root: true,
  extends: '@mingcomity-design/eslint-config',
  overrides: [
    {
      files: ['packages/**/*.ts', 'packages/**/*.tsx'],
      rules: {
        'no-console': 'error'
      }
    }
  ]
}
