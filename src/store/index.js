import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  records: {
    '171120': [],
    '171119': [
      {
        'amount': 200,
        'category': 'food',
        'note': 'Custard'
      },
      {
        'amount': 1000,
        'category': 'drink',
        'note': ''
      },
      {
        'amount': 50,
        'category': 'transport',
        'note': ''
      }
    ],
    '171118': [
      {
        'amount': 300,
        'category': 'food',
        'note': ''
      },
      {
        'amount': 50,
        'category': 'transport',
        'note': ''
      }
    ]
  },
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
