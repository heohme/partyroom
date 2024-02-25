import { LauncherOptions } from '@xhs/launcher'
// import { RouteLocationNormalizedLoaded } from 'vue-router'
// import { getSourceFromRoute, getTrackData } from '../utils/track'
import Main from '../pages/Main.vue'

// 主页面入口地址
const HomePath = '/fe/defirstmo'

const routes: LauncherOptions['routes'] = [
  {
    path: '/',
    redirect: HomePath,
  },
  {
    name: 'home',
    path: HomePath,
    component: Main,
    meta: {
      title: '小红书',
      // pageInstance: '',
      /**
       * PV 点位自动注入source
       * 注意：需要分析师创建PV点位的时候带上 Browser.source 字段 @伊桑
       */
      urlSource: true,
      /** 当需要在 PV 添加自定义字段时使用 */
      // getTrackerData: (route:RouteLocationNormalizedLoaded) => getTrackData(25796, {
      //   channelType: getSourceFromRoute(route),
      // }),
      /** 页面 PE 上报 */
      // getPageEnd: () => getTrackData(25797),
    },
  },
]

export default routes
