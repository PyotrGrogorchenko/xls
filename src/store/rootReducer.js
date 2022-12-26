import {TABLE_RESIZE, CHANGE_TEXT} from './types'

export const rootReducer = (state, action) => {
  const {type, id, value} = action?.data ?? {}
  switch (action.type) {
    case TABLE_RESIZE:
      state[type][id] = value
      return {...state}
    case CHANGE_TEXT:
      return {...state, currentText: action.data.value}
    default: return state
  }
}
