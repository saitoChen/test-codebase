/*
 * @Author: Kun
 * @Date: 2020-12-Fr 11:48:29
 * @Last Modified by:   Kun
 * @Last Modified time: 2020-12-Fr 11:48:29
 */
import Vue from 'vue'
import { Loading } from 'element-ui'

let loading = null
const _startHook = () => {
  console.log('startHook')
  loading = Loading.service({
    text: '加载中...'
  })
}
const _endHook = () => {
  loading.close()
}

export const promiseContainer = (callback, startHook, endHook) => {
  startHook = startHook || _startHook
  endHook = endHook || _endHook

  Vue.prototype.$promiseEnd = _endHook

  startHook()

  callback()
}

Vue.directive('promise', {
  inserted: function(el, binding) {
    el.addEventListener('click', () => {
      promiseContainer(binding.value)
    })
  }
})
