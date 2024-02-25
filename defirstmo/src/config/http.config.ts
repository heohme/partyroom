import { HttpConfig } from '@xhs/launcher'
import { commonChecks } from '@xhs/ozone-detector'

const httpConfig: HttpConfig = {
  BASE_URL: {
    // npm run dev
    development: 'https://logan.devops.xiaohongshu.com/proxy/h5-activity',
    // formula build -e test
    test: 'https://edith.beta.xiaohongshu.com',
    // formula build
    production: 'https://edith.xiaohongshu.com',
  },
  API_LIST: {
    // 短链服务
    SHORT_URL: 'https://edith.xiaohongshu.com/api/sns/v1/activity_other/short_url',
    // 二维码服务
    QR_CODE: 'https://fe.xiaohongshu.com/faas/picasso-qrcode-gen-qrcode/',
    // 上传token
    TOKEN: 'https://edith.xiaohongshu.com/api/media/v1/upload/permit',
    USERS: 'http://jsonplaceholder.typicode.com/users',
  },
  BASE_CONFIG: {
    defaults: {
      timeout: 10000,
      transform: true,
      preferBridge: commonChecks.isXHS,
    },
    development: {
      withCredentials: true,
    },
  },
}

export default httpConfig
