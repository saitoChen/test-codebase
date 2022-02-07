import Common from './common'
// 新增弹窗得字段
export default class Create extends Common {
  constructor() {
    super()
  }
  save() {
    console.log('create/save')
    super.save()
  }
}
