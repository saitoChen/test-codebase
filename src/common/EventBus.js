/**
 * 消息通道
 */

// import Vue from 'vue';

// const _vue = new Vue();

// const Bus = {
//     install(Vue) {
//         Vue.prototype.$bus = Bus;
//     },
//     on(name, func) {
//         _vue.$on(name, func);
//     },
//     emit() {
//         _vue.$emit(...arguments);
//     },

//     /**
//      * @param {string | Array<string>} event
//      * @param {Function} [callback]
//      */
//     off(event, callback) {
//         _vue.$off(event, callback);
//     }
// }

// export default Bus;

const install = Vue => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(event, callback) {
        this.$on(event, callback)
      },
      off(event, callback) {
        this.$off(event, callback)
      }
    }
  })
  Vue.prototype.$bus = Bus
}

export default install
