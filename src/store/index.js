import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
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
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
