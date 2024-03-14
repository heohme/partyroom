import { onMounted } from 'vue'
import type { ISetShareContentConfig } from '@xhs/ozone-share'

/**
 * 初始化分享
 * @param content
 */
export default function usePageShare(content:ISetShareContentConfig) {
  onMounted(async () => {
    const { setShareContent } = await import('@xhs/ozone-share')
    setShareContent(content)
  })
}

/**
 * 显示客户端分享面板
 * @param content
 */
export async function showShareMenu(content?:ISetShareContentConfig) {
  const { showShareMenu: showMenu, setShareContent } = await import('@xhs/ozone-share')
  if (content) {
    await setShareContent(content)
  }
  await showMenu()
}
