import {defaultStyle} from '@/constans'
import {
  SET_TABLE_SIZE,
  SET_TEXT,
  SET_CURRENT_STYLE,
  SET_STYLE,
  SET_CURRENT_TEXT,
  SET_TITLE,
  SET_DATASET,
  SET_LAST_OPENED
} from './types'

export const setTableSize = data => {
  return {
    type: SET_TABLE_SIZE,
    data
  }
}

export const setTitle = text => {
  return {
    type: SET_TITLE,
    data: text
  }
}

export const setDataset = data => {
  return {
    type: SET_DATASET,
    data
  }
}

export const setLastOpened = date => {
  return {
    type: SET_LAST_OPENED
  }
}
// Text
export const setText = text => {
  return {
    type: SET_TEXT,
    data: text
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
