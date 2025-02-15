// packages/eslint-config/src/typescript.js
module.exports = {
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    './base.js'
  ],
  rules: {
    // override rules
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    'no-use-before-define': 'off',

    // off rules
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
