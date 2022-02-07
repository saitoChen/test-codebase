// 单独页面路由
export default [
  {
    // 模板审批
    path: '/auditing/edit',
    name: 'auditing-edit',
    component: () => import('@/views/common/index.vue')
  },
  {
    // pdf预览
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/common/index.vue')
  },
  {
    // 合同用印审批
    path: '/contract-seal-approval',
    name: 'contract-seal-approval',
    props: { pageType: 'sealApproval', pageName: '合同用印审批' },
    component: () => import('@/views/common/index.vue')
  },
  // 合同用印批次审批-待审批
  {
    path: '/contract-recheck-manage',
    name: 'seal-batch-approval',
    // meta: { title: '合同用印审批' },
    component: () => import('@/views/common/index.vue')
  },
  // 合同用印批次审批-审批后查看
  {
    path: '/contract-recheck-manage-view',
    name: 'seal-batch-view',
    component: () => import('@/views/common/index.vue')
  }
]
