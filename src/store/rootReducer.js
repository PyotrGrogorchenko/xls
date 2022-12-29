import {TABLE_RESIZE, CHANGE_TEXT, SET_STYLE} from './types'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case TABLE_RESIZE:
      setValue(state, action)
      return {...state}
    case CHANGE_TEXT:
      setValue(state, action)
      return {
        ...state,
        currentText: action.data.value
      }
    case SET_STYLE:
      return {
        ...state,
        currentStyle: {
          ...state.currentStyle,
          ...action.data
        }
      }
    default: return state
  }
}

const setValue = (state, action) => {
  const {type, id, value} = action?.data ?? {}
  state[type][id] = value
  return state
}
