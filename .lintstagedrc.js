// .lintstagedrc.js
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.css': ['stylelint --fix --allow-empty-input', 'prettier --write'],
  'package.json': ['prettier --write']
}
