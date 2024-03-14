import '@xhs/reds-h5-style'
import '@xhs/reds-h5-style/src/override/media.styl'
import '~/style/index.styl'

import Launcher from '@xhs/launcher'
import authPlugin from '@xhs/launcher-plugin-auth'
import antiSpamPlugin from '@xhs/launcher-plugin-anti-spam'
import eagletPlugin from '@xhs/launcher-plugin-eaglet'
import customApmJsError from './utils/customApmJsError'

import authConfig from './config/auth.config'
import httpConfig from './config/http.config'
import routesConfig from './config/routes.config'

const app = new Launcher('#app', {
  routes: routesConfig,
  http: httpConfig,
})

app.use(authPlugin, authConfig)
app.use(antiSpamPlugin)
app.use(eagletPlugin, {
  // 全局埋点
  // tracker: () => import('@xhs/protobuf-buyer-h5-tracker'),
  apm: {
    // 业务 js Error 自定义
    jsError: customApmJsError,
  },
})

app.start()

export default app
