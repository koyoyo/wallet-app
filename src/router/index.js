import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import MonthlyChart from '@/components/MonthlyChart'
import Form from '@/components/Form'
import Detail from '@/components/Detail'

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
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
