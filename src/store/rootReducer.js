import {SET_TABLE_SIZE, SET_TEXT, SET_CURRENT_STYLE, SET_CURRENT_TEXT, SET_STYLE} from './types'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_TABLE_SIZE:
      return setTableSize(state, action)
    case SET_TEXT:
      return setText(state, action)
    case SET_CURRENT_STYLE:
      return setCurrnetStyle(state, action)
    case SET_CURRENT_TEXT:
      return setCurrnetText(state, action)
    case SET_STYLE:
      return setStyle(state, action)
    // case SET_ACTIVE_ID:
    //   return setActiveId(state, action)
    default:
      return state
  }
}

const setTableSize = (state, action) => {
  const {type, id, value} = action.data
  state[type][id] = value
  return {...state}
}

const setText = (state, action) => {
  const {id, value} = action.data
  state['text'][id] = value
  return {...state}
}

const setCurrnetStyle = (state, action) => {
  return {
    ...state,
    currentStyle: {
      ...state.currentStyle,
      ...action.data
    }
  }
}

const setStyle = (state, action) => {
  const {data: ids} = action

  console.log('setStyle', ids)
  return state
  // {
  //   ...state
  // }
}

const setCurrnetText = (state, action) => {
  return {
    ...state,
    currentText: action.data
  }
}

// const setActiveId = (state, action) => {
//   return {
//     ...state,
//     activeId: action.data
//   }
// }
