import { RouteLocationNormalizedLoaded } from 'vue-router'
import { eaglet } from '@xhs/launcher-plugin-eaglet'
// TODO：需要修改为业务指定的 tracker 包
import { tracker } from '@xhs/protobuf-defirstmo-tracker'

export type TParams = {
  [key: string]: string | number
}

/**
 * 获取 TrackData
 * @param route
 * @param trackId
 */
export function getTrackData(id: number, params?: TParams): Record<string, unknown> {
  return tracker[id](params) || {}
}

/**
 * 曝光埋点
 * @param id
 * @param params
 */
export function getImpression(id: number, params?: TParams): string {
  return JSON.stringify(getTrackData(id, params))
}

/**
 * 埋点上报
 * @param id
 * @param params
 */
export default function track(id:number, params?: TParams):void {
  eaglet.push(getTrackData(id, params))
}

/**
 * 从路由中获取数据来源source
 * @param route
 */
export function getSourceFromRoute(route:RouteLocationNormalizedLoaded):string {
  // 兼容 source 为多个的情况
  return (Array.isArray(route.query.source) ? route.query.source[0] : route.query.source) || ''
}
