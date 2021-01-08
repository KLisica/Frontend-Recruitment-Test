import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/index.js'
import './assets/style/app.scss'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
