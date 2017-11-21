import * as types from './mutation-types'

export const insertRecord = ({ commit }, payloads) => {
  commit(types.INSERT_RECORD, payloads)
}
