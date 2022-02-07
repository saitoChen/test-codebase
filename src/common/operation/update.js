import Common from './common'
// 新增弹窗得字段
export default class Create extends Common {
  constructor() {
    super()
  }
  save() {
    console.log('update/save')
    super.save()
  }
}
