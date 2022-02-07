export default {
  // 合同模板管理/合同模板管理
  'contract-setting/open': {
    name: 'contract-setting-open',
    component: () => import('@/views/common/index.vue')
  },
  'contract-setting/type': {
    name: 'contract-setting-type',
    component: () => import('@/views/common/index.vue')
  },
  'contract-setting/other-settings': {
    name: 'contract-setting-type-other-settings',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/批次审批设置
  'contract-setting/approval': {
    name: 'contract-setting-approval',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/授权书管理
  'contract-setting/auth': {
    name: 'contract-setting-auth',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/配置合同类型
  'contract-setting/config': {
    name: 'contract-setting-config',
    component: () => import('@/views/common/index.vue')
  },
  'contract-index': {
    name: 'contract-index',
    component: () => import('@/views/common/home.vue')
  }
}
