//项目的入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局样式表
// import css from './assets/css/Login.css'
import './assets/css/Login.css'
// 引入element的样式表
import  'element-ui/lib/theme-chalk/index.css'
//导入element组件
import  './plugin/element.js'
//导入字体图标库
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  //css,
  render: h => h(App)
}).$mount('#app')
