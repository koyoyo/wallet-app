// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import Firebase from 'firebase'
import 'buefy/lib/buefy.css'

// import config from '~/config'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Bulma
Vue.use(Buefy)

// Firebase
Firebase.initializeApp(process.env.FIREBASE_CONFIG)

// Global Filters
Vue.filter('numberWithCommas', (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
