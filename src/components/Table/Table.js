import {ExcelComponent} from '@core/ExcelComponent'
import {range} from '@core/utils'
import {$} from '@core/dom'

import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {isCell, shouldResize, matrix} from './table.functions'
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
    const $el = this.$root.find('[data-id="0:0"]')
    this.selection.select($el)
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
      return
    }

    const $target = $(event.target)
    if (isCell(event)) {
      if (event.shiftKey) {
        const $sells = matrix($target, this.selection.current)
          .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($sells)
        return
      }
      this.selection.select($target)
    }
  }
}
