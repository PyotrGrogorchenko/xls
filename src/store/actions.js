import {SET_TABLE_SIZE, SET_TEXT, SET_CURRENT_STYLE, SET_STYLE, SET_CURRENT_TEXT} from './types'

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

export const setStyle = (ids) => {
  return {
    type: SET_STYLE,
    data: ids
  }
}

export const setCurrentText = (text) => {
  return {
    type: SET_CURRENT_TEXT,
    data: text
  }
}


export const setCurrentStyle = (data) => {
  return {
    type: SET_CURRENT_STYLE,
    data
  }
}


// export const setActiveId = (id) => {
//   return {
//     type: SET_ACTIVE_ID,
//     data: id
//   }
// }
