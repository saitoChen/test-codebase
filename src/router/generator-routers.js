import contractManagement from './router-maps/contract-management'
import contractTemplate from './router-maps/contract-template'
import contractSetting from './router-maps/contract-setting'
import contractStatistics from './router-maps/contract-statistics'

// 缺省的路由，boc配置本地却没有的
const common = {
  common: {
    name: 'common',
    component: () => import('@/views/common/index.vue')
  }
}

export default {
  ...contractTemplate,
  ...contractManagement,
  ...contractSetting,
  ...contractStatistics,
  ...common
}
