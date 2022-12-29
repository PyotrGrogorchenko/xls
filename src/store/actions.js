import {TABLE_RESIZE, CHANGE_TEXT, CHANGE_STYLES} from './types'

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

export const changeStyles = (data) => {
  return {
    type: CHANGE_STYLES,
    data
  }
}
