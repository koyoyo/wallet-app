import Firebase from 'firebase'

import * as types from './mutation-types'

export default {
  [types.INSERT_RECORD] (state, payload) {
    if (state.records.hasOwnProperty(payload.date)) {
      state.records[payload.date] = [...state.records[payload.date], payload.data]
    } else {
      state.records = { ...state.records,
        [payload.date]: [
          payload.data
        ]
      }
    }
  },
  [types.UPDATE_USER] (state, payload) {
    if (payload) {
      state.user = payload
    } else {
      state.user = {
        isAnonymous: true
      }
    }
  },
  [types.UPDATE_BASE_FIREBASE_PATH] (state, payload) {
    state.baseDB = Firebase.database().ref(`users/${payload.uid}`)
  },
  [types.LOAD_MONTLY_RECORD] (state, payload) {
    for (let [key, val] of Object.entries(payload)) {
      if (state.records[key] === undefined) {
        state.records[key] = val
      } else {
        // NOTE: More thought thoroughly about this
        state.records[key] = Object.assign(state.records[key], val)
      }
    }
  }
}
