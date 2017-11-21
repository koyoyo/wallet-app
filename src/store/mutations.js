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
  }
}
