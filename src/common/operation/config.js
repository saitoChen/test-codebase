import Create from './create'
import Update from './update'

export function getInstance() {
  let instanceObj = {}
  return function(status) {
    console.log('status', status)
    if (!instanceObj[status]) {
      console.log('开始取了，但是没取到，初始化')
      instanceObj['CREATE'] = new Create()
      instanceObj['UPDATE'] = new Update()
    } else {
      console.log('从闭包里取到了')
    }
    return instanceObj[status]
  }
}
