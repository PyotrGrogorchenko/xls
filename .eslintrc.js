module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 0,
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'max-len': ['error', {'code': 150}],
    'indent': ['error', 2],
    'arrow-parens': 0,
    'no-unused-vars': 0
  }
}
