import {defaultStyle} from '@/constans'
import * as actions from '@/store/actions'
import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {$} from '@core/dom'

import {createToolbar} from './toolbar.temlate'

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyle'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyle)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  storeChanged(changes) {
    this.setState(changes.currentStyle)
    this.$root.html(this.template)
  }

  onClick(e) {
    const $target = $(e.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$dispatch(actions.setCurrentStyle(value))
      // this.setState(value)
      // this.$emit('toolbar:onStyle', value)
    }
  }
}
