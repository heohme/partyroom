// for more detail, please refer <https://code.devops.xiaohongshu.com/formula/launcher-plugin-auth>
import { AuthConfig } from '@xhs/launcher-plugin-auth'

const authConfig: AuthConfig = {
  scheme: {
    type: 'sid',
    passSidByQuery: true,
  },
}

export default authConfig
