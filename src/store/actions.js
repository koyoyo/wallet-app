import * as types from './mutation-types'

export const insertRecordOld = ({ commit }, payloads) => {
  commit(types.INSERT_RECORD, payloads)
}

export const updateUser = ({ commit }, payloads) => {
  commit(types.UPDATE_USER, payloads)
  commit(types.UPDATE_BASE_FIREBASE_PATH, payloads)
}

export const insertRecord = ({ commit, state }, payloads) => {
  const ref = state.baseDB.child(`records/${payloads.date}`).push()
  ref.set(payloads.data).then(() => {
    commit(types.INSERT_RECORD, payloads)
  })
}

export const loadMontlyRecord = ({ commit, state }, date) => {
  const startDate = `${date}01`
  const endDate = `${date}99`

  const ref = state.baseDB.child(`records`).orderByKey().startAt(startDate).endAt(endDate)
  ref.once('value').then(snapshot => {
    commit(types.LOAD_MONTLY_RECORD, snapshot.val())
  })
}
