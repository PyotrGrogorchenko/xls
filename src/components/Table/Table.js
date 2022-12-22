import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'

import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {isCell, shouldResize} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  init() {
    super.init()
    this.selection = new TableSelection()
    const $el = this.$root.find('[data-cell="0:0"]')
    this.selection.select($el)
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      this.selection.select($(event.target))
    }
  }
}
