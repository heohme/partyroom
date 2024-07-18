module.exports = {
  plugins: [],
  extends: [],
  // 自定义配置
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src'],
        ],
      },
    },
  },
}
