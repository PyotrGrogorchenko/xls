import {SET_TABLE_SIZE, SET_TEXT, SET_CURRENT_STYLE, SET_ACTIVE_ID, PUT_STYLE} from './types'

export const setTableSize = (data) => {
  return {
    type: SET_TABLE_SIZE,
    data
  }
}

export const setText = (data) => {
  return {
    type: SET_TEXT,
    data
  }
}

export const setCurrentStyle = (data) => {
  return {
    type: SET_CURRENT_STYLE,
    data
  }
}

export const putStyle = (ids) => {
  return {
    type: PUT_STYLE,
    data: ids
  }
}


export const setActiveId = (id) => {
  return {
    type: SET_ACTIVE_ID,
    data: id
  }
}
