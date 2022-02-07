export default {
  // 合同模板管理/合同模板管理
  'contract-template/add': {
    name: 'contract-template-add',
    component: () => import('@/views/common/index.vue')
  },
  // 合同模板管理/新增合同模板
  'contract-template/created': {
    name: 'contract-template-created',
    title: '选择折让',
    component: () => import('@/views/choose/index.vue')
  },
  // 合同模板管理/修改合同模板
  'contract-template/update': {
    name: 'contract-template-update',
    component: () => import('@/views/common/index.vue')
  },
  // 合同模板管理/修改（停用状态）合同模板
  'contract-template/update-settings': {
    name: 'contract-template-update-settings',
    component: () => import('@/views/common/index.vue')
  },
  // 合同模板管理/模板列表
  'contract-template/list': {
    name: 'contract-template-list',
    component: () => import('@/views/common/index.vue')
  },
  // 合同模板管理/设置模板正文
  'contract-template/edit': {
    name: 'contract-template-edit',
    component: () => import('@/views/common/index.vue')
  },
  // 合同模版管理/查看合同模版设置
  'contract-template/view-settings': {
    name: 'contract-template-view-settings',
    // component: () => import('@/views/contract-template/view/index')
    component: () => import('@/views/common/index.vue')
  },
  // 合同模板管理/查看合同模板
  'contract-template/view': {
    name: 'contract-template-view',
    component: () => import('@/views/common/index.vue')
    // component: () => import('@/views/contract-template/created/index')
  },
  // 合同模板管理/模板审批管理
  // 'contract-template/auditing/list': {
  //   name: 'contract-template-auditing-list',
  //   component: () => import('@/views/contract-template-auditing/list/index')
  // },
  // 合同模板管理/审批合同模板
  'contract-template/auditing/edit': {
    name: 'contract-template-auditing-edit',
    component: () => import('@/views/common/index.vue')
  }
}
