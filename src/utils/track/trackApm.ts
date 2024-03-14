import { eaglet } from '@xhs/launcher-plugin-eaglet'

/**
 * 自定义点位上报
 * @param metrics
 */
export function trackMetrics(metrics:{
  type: string
  value: any
}):void {
  try {
    // console.log('=============== trackMetrics', metrics)
    // 点位上报
    eaglet.push(metrics, 'ApmJSONTracker')
  } catch (error) {
    console.warn('[eaglet track not support]:', error)
  }
}
