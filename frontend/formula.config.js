const path = require("path")
const RedsStyleStylusPlugin = require('@xhs/reds-h5-style/stylus-plugin')
const RedsStylePostcssPlugin = require('@xhs/reds-h5-style/postcss-plugin')
const formulaPluginSwc = require('@xhs/formula-plugin-swc')

module.exports = {
  title: '小红书',
  entry: __dirname + '/src/index.ts',
  category: 'vue-app',
  stylus: {
    use: [
      // 全局注入Reds中的stylus参数和mixin
      RedsStyleStylusPlugin,
    ],
    // 全局注入默认样式
    import: [path.resolve(__dirname, './src/style/imports.styl')],
  },
  postcss: [
    // 小写的 px 会被转成 rem
    // 大写的 PX 不会被转成 rem
    RedsStylePostcssPlugin(),
  ],
  // true | false: 是否需要动态调整根节点 font-size 来配合 rem 实现响应式布局
  // 'responsive': 表示页面完全自适应，不受系统字号和微信字号的影响
  // 方案文档：https://doc.weixin.qq.com/doc/w3_AKAABwbrAEsxNM8B60OQ0SnCeXCMS?scode=ANAAyQcbAAg9eYrY7RAKAABwbrAEs
  rootPixel: 'responsive',
  // 处理 svg 的方式：url: 使用 url-loader；sprite：使用 svg-sprite-loader，默认 url
  svg: 'sprite',
  // 为 HTML 添加 meta 标签
  html: {
    meta: [
      {
        name: 'keywords',
        content: '小红书标记我的生活',
      },
      // 本地绕过静态资源 ip 访问限制
      ...(process.env.NODE_ENV === 'development' ? [
        {
          name: 'referrer',
          content: 'no-referrer',
        }
      ] : [])
    ],
  },

  // 预连接域名，会在 `<head />` 头部插入 `<link rel="preconnect">` 提前与域名建立连接提升资源加载性能
  // 默认内置了小红书应用场景高频使用到的 CDN 域名（如下），一般不用特殊处理，有自己的 CDN 域名可以考虑传入
  // preconnect: [
  //   'fe-static.xhscdn.com',
  //   'fe-img-qc.xhscdn.com',
  //   'ci.xiaohongshu.com',
  //   'qimg.xiaohongshu.com',
  //   'img.xiaohongshu.com',
  //   'fe-video-qc.xhscdn.com',
  // ],

  // 功能和 `preconnect` 相同，主要是针对多 App 场景存在独立 CDN 域名的情况
  // 不会使用上方列举的内置预设配置，完全交由业务方自定义 App 实际使用到的域名
  // preconnectOnly: [
  //   'top-img-qc.xhscdn.com',
  //   'top-video-qc.xhscdn.com',
  // ],

  resolve: {
    alias: {
      // 使用 @vue/composition-api 编写的模块会自动转换为 vue3，比如 onix 组件
      '@vue/composition-api': 'vue',
      '~': path.join(__dirname, 'src'),
    },
  },
  speedUp: {
    isVue3: true,
    cache: true,
    // 建议 dev 超过 30s 时开启
    happypack: false,
  },

  // 移动端调试面板配置，该面板仅在开发环境生效
  mobileDevtools: {
    enable: true // 设置为 true 可开启面板，默认值为 false
  },
  // 活动测需要兼容到 es6
  // bundleCheck: {
  //   esVersion: 6
  // },
  bundleCheck: false,
  babelVue: true,
  chainWebpack: (chain) => {
    // formula-cli提速插件，暂不支持tsx https://code.devops.xiaohongshu.com/fe/web/formula-plugin-swc
    if (process.env.NODE_ENV === 'development') {
      formulaPluginSwc(chain)
    }
    /**
     * Formula 默认只会转换 src 和 @xhs 下的代码为 ES5 的语法
     * 为兼容更低端的设备，node modules 里其它的组件
     * 需要采用以下方式显示声明转换
     */
    chain.module.rule('babel').include.add(/vueuse/)
    chain.module.rule('typescript').include.add(/vueuse/)
    // chain.module.rule('babel').include.add(/pinia/)
    // chain.module.rule('typescript').include.add(/pinia/)
  }
}
