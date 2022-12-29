import {TABLE_RESIZE, CHANGE_TEXT, SET_STYLE} from './types'

export const tableResize = (data) => {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export const changeText = (data) => {
  return {
    type: CHANGE_TEXT,
    data: {
      ...data,
      type: 'data'
    }
  }
}

export const setStyle = (data) => {
  return {
    type: SET_STYLE,
    data
  }
}
