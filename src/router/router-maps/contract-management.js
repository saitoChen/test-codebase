const commonObj = {
  component: () => import('@/views/common/index.vue')
}

export default {
  // // 合同管理/合同管理
  // 'contract-management/management': {
  //   name: 'contract-management-list',
  //   component: () => import('@/views/contract-management/index')
  // },
  // 合同管理/确认合同
  'contract-management/contract-confirm': {
    name: 'contract-management-confirm',
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'confirm', pageName: '确认合同' }
  },
  // 合同管理/查看合同
  'contract-management/contract-detail': {
    name: 'contract-management-detail',
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'view', pageName: '查看合同' }
  },
  // 合同管理/复核合同
  'contract-management/contract-review': {
    name: 'contract-management-review',
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'review', pageName: '复核合同' }
  },
  // 合同管理/合同用印审批
  'contract-management/contract-seal-approval': {
    name: 'contract-management-approval',
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'sealApproval', pageName: '合同用印审批' }
  },
  // 合同管理/核查合同
  'contract-management/contract-verification': {
    name: 'contract-management-verification',
    hidden: true,
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'verification', pageName: '核查合同' }
  },
  // 合同管理/合同盖章管理-查看合同
  'contract-management/contract-seal': {
    name: 'contract-management-seal',
    component: () => import('@/views/common/index.vue'),
    props: { pageType: 'seal', pageName: '合同盖章管理' }
  },
  // 合同管理/合同管理-创建合同（不使用模板）
  'contract-management/created-contract-without-template': {
    name: 'created-contract-without-template',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同管理-创建合同（不使用模板）
  'contract-management/created-contract-without-template-edit': {
    name: 'created-contract-without-template-edit',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同管理-创建合同（使用模板）
  'contract-management/created-contract-template': {
    name: 'contract-management/created-contract-template',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同管理-创建合同（使用模板）
  'contract-management/created-contract-template-edit': {
    name: 'contract-management/created-contract-template-edit',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同管理(我发起的)
  'contract-management/my-create-contract-manage': {
    name: 'my-create-contract-manage',
    ...commonObj
  },
  // 合同管理/合同管理(我经办的)
  'contract-management/my-handle-contract-manage': {
    name: 'my-handle-contract-manage',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同复核管理
  'contract-management/contract-recheck-manage': {
    name: 'contract-recheck-managee',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同盖章管理
  'contract-management/contract-seal-manage': {
    name: 'contract-seal-manage',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/填写合同
  'contract-management/edit': {
    name: 'contract-edit',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/设置合同正文
  'contract-management/set': {
    name: 'contract-set',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/合同管理(我发起的)
  'contract-management/all-contract-manage': {
    name: 'all-contract-manage',
    ...commonObj
  },
  // 合同管理/合同核查记录
  'contract-management/contract-check-manage': {
    name: 'contract-check-managee',
    component: () => import('@/views/common/index.vue')
  },
  // 合同管理/创建合同
  'contract-management/create-contract': {
    name: 'create-contract',
    component: () => import('@/views/common/index.vue')
  }
}
