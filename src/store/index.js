import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  user: {
    isAnonymous: true
  },
  baseDB: '',
  records: {},
  categories: [
    {
      name: 'Food',
      code: 'food',
      icon: 'hamburger'
    },
    {
      name: 'Drink',
      code: 'drink',
      icon: 'beer'
    },
    {
      name: 'Transport',
      code: 'transport',
      icon: 'airplane-takeoff'
    },
    {
      name: 'Other',
      code: 'other',
      icon: 'currency-usd'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
