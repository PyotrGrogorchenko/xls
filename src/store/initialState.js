import {defaultStyle, defaultTitle} from '@/constans'
import {storage, clone} from '@core/utils'

const defaultState = {
  row: {},
  col: {},
  text: {},
  style: {},
  dataset: {},
  title: defaultTitle,
  lastOpened: new Date().toJSON()
}

export const getState = stateId => {
  const state = storage(stateId) ? storage(stateId) : clone(defaultState)

  state.currentText = ''
  state.currentStyle = clone(defaultStyle)

  return state
}
