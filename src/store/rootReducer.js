import {
  SET_TABLE_SIZE,
  SET_TEXT,
  SET_CURRENT_TEXT,
  SET_STYLE,
  SET_CURRENT_STYLE,
  SET_TITLE,
  SET_DATASET
} from './types'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_TABLE_SIZE:
      return setTableSize(state, action)
    case SET_TITLE:
      return setTitle(state, action)
    case SET_DATASET:
      return setDataset(state, action)
    case SET_TEXT:
      return setText(state, action)
    case SET_CURRENT_TEXT:
      return setCurrnetText(state, action)
    case SET_STYLE:
      return setStyle(state, action)
    case SET_CURRENT_STYLE:
      return setCurrnetStyle(state, action)
    default:
      return state
  }
}

const setTableSize = (state, action) => {
  const {type, id, value} = action.data
  state[type][id] = value
  return {...state}
}

const setTitle = (state, action) => {
  return {...state, title: action.data}
}

const setDataset = (state, action) => {
  const {id, name, value} = action.data

  state.dataset[id] = state.dataset[id] || {}
  state.dataset[id] = {
    ...state.dataset[id],
    [name]: value
  }

  return {...state}
}

// Text
const setText = (state, action) => {
  const {id, value} = action.data
  state['text'][id] = value
  return {...state}
}

const setCurrnetText = (state, action) => {
  return {
    ...state,
    currentText: action.data
  }
}

// Style
const setStyle = (state, action) => {
  action.data.forEach(id => state.style[id] = {...state.currentStyle})
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
