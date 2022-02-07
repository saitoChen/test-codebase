/**
 * 按钮防抖指令
 * @description 针对按钮的click事件可能存在多个参数的场景，binding.value表示传参，为数组形式，binding.arg表示方法名
 */
import Vue from 'vue'

/**
 * 示例
 * v-debounce:[方法名]="[参数1, 参数2, ...]"
 */
Vue.directive('debounce', {
  inserted: function(el, binding) {
    // 在el中自定义传参，在组件更新过程中进行赋值
    el.customArg = binding.value
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        if (el.customArg instanceof Array) {
          binding.arg(...el.customArg)
        } else if (el.customArg === undefined) {
          binding.arg()
        } else {
          console.error('v-debounce warn: 请检查指令传参格式是否正确')
        }
      }, 500)
    })
  },
  update: function(el, binding) {
    el.customArg = binding.value
  }
})
