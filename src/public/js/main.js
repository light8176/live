import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

//开启debug模式

Vue.use(VueRouter);

import router from './router'


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#main')
