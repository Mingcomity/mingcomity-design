// packages/eslint-config/src/vue.js
// https://eslint.vuejs.org/user-guide
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  extends: [
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-recommended',
    './typescript.js'
  ]
}
