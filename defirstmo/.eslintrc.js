module.exports = {
  plugins: ['@xhs/eslint-plugin-xhs'],
  extends: ['plugin:@xhs/eslint-plugin-xhs/vue'],
  // 自定义配置
  rules: {
    'no-useless-constructor': 0,
    'class-methods-use-this': 0,
  },
}
