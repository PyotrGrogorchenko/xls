import {defaultStyles} from '@/constans';
import {storage} from '@core/utils'

const defaultState = {
  row: {},
  col: {},
  data: {},
  currentStyles: defaultStyles,
  currentText: ''
}

const initialState = storage('excel-state') ? storage('excel-state') : defaultState;
initialState.currentText = '';

export {initialState}
