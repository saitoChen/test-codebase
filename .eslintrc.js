/**
 * 规则列表: http://eslint.cn/docs/rules/
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  // base, essential(默认), strongly-recommended, recommended
  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
  rules: {
    'space-before-function-paren': 0,
    // 禁用console(仅生产)
    'no-console': 'off',
    // 禁用debugger(仅生产)
    'no-debugger': 'off',
    // 禁止出现未使用过的变量
    'no-unused-vars': 'off',
    'no-useless-escape': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    DDLogin: true
  }
}
