import {defaultStyles} from '@/constans'
import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {$} from '@core/dom'

import {createToolbar} from './toolbar.temlate'

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  onClick(e) {
    const $target = $(e.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.setState(value)
      this.$emit('toolbar:appliStyle', value)
    }
  }
}
