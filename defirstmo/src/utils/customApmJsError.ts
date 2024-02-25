import type { IApmJsError } from '@xhs/launcher-plugin-eaglet'

/**
 * 忽略一些已知错误
 * @param error
 */
function ignoreApmJsError(error:IApmJsError):boolean {
  /**
   * 忽略静态资源加载错误
   * 1. 加载失败
   * 2. 加载中退出页面
   * */
  if (error.errorType?.includes('ChunkLoadError')) {
    return true
  }
  return false
}

export default {
  // 默认开启，过滤 AbortError、HTTP 报错
  enableIgnoreDefaultError: true,
  // 业务测自定义忽略报错
  ignoreError: ignoreApmJsError,
}
