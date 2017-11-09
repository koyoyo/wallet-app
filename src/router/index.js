import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import MonthlyChart from '@/components/MonthlyChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/chart',
      name: 'MonthlyChart',
      component: MonthlyChart
    }
  ]
})
