eventbus 消息通道插件
已写入vue对象中的属性并配置到全局 为$bus，可在所有组件间任意使用
适用场景：解决跨级与兄弟组件通信问题
使用场景及方式：
A组件向B组件发送消息：
let aaa = bulabula
A组件，对应的方法内：this.$bus.emit('xxx', aaa)
B组件，记得销毁bus
created() {
    this.$bus.on('xxx', this.Amethod)
}
beforeDestroy() {
    this.$bus.off('xxx', this.Amethod)
},
methods: {
    Amethod(params) {
        console.log(params)
        // do something
    }
}

文章链接：https://www.jianshu.com/p/e95ee2d71bad