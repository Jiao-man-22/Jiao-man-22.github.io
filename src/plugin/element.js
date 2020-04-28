// 安装完elemen-ui 要在这里导入要使用的组件，然后还要带main.js中去该文件
import Vue from 'vue'
import {Button} from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
Vue.use(Form)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Input)
