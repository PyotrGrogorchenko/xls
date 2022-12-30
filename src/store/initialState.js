import {defaultStyle} from '@/constans';
import {storage} from '@core/utils'

const defaultState = {
  row: {},
  col: {},
  text: {},
  style: {}
}

const initialState = storage('excel-state') ? storage('excel-state') : defaultState;
initialState.activeId = '';
initialState.currentText = '';
initialState.currentStyle = defaultStyle

export {initialState}
