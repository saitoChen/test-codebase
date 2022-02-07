import request from '@/utils/request'

// 获取路由以及按钮权限
export function getMenuInfo() {
  return request({
    url: '/api/mgmt/v1/resources/',
    method: 'get'
  })
}
