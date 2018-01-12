// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import App from './App'

Vue.use(ElementUI)
Vue.use(BaiduMap, { ak: '0splGL787be69VgsOZX2t3vMvw016i0F' });

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
