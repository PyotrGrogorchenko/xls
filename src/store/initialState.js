import {defaultStyle} from '@/constans';
import {storage} from '@core/utils'

const defaultState = {
  row: {},
  col: {},
  data: {},
  currentStyle: defaultStyle,
  currentText: ''
}

const initialState = storage('excel-state') ? storage('excel-state') : defaultState;
initialState.currentText = '';

export {initialState}
