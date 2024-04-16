module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard 默认规则
    'stylelint-config-standard',
    // https://github.com/stormwarning/stylelint-config-recess-order 书写顺序
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended'
  ],
  plugins: [
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order'
  ],
  rules: {
    'no-empty-source': null,
    'unit-no-unknown': null,
    'at-rule-no-unknown': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null
  }
}
