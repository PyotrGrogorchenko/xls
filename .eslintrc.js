module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 0,
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'no-debugger': 'off',
    'max-len': ['error', {'code': 150}],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'arrow-parens': 0,
    'no-unused-vars': 0
  }
}
