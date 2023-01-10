import {defaultStyle} from '@/constans'
import {SET_TABLE_SIZE, SET_TEXT, SET_CURRENT_STYLE, SET_STYLE, SET_CURRENT_TEXT} from './types'

export const setTableSize = data => {
  return {
    type: SET_TABLE_SIZE,
    data
  }
}

// Text
export const setText = data => {
  return {
    type: SET_TEXT,
    data
  }
}

export const setCurrentText = text => {
  return {
    type: SET_CURRENT_TEXT,
    data: text
  }
}

// Style
export const setStyle = ids => {
  return {
    type: SET_STYLE,
    data: ids
  }
}

export const setCurrentStyle = style => {
  return {
    type: SET_CURRENT_STYLE,
    data: style || defaultStyle
  }
}
