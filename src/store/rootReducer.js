import {TABLE_RESIZE} from './types'

export const rootReducer = (state, action) => {
  const colState = state.colState ?? {}
  switch (action.type) {
    case TABLE_RESIZE:
      colState[action.data.id] = action.data.value
      return {...state, colState}
    default: return state
  }
}
