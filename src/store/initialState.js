import {storage} from '@core/utils'

const defaultState = {
  row: {},
  col: {},
  data: {},
  currentText: ''
}

export const initialState = storage('excel-state') ? storage('excel-state') : defaultState
