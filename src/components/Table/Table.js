import * as actions from '@/store/actions'

import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'

import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {isCell, shouldResize, matrix, nextSelector} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  init() {
    super.init()
    this.selection = new TableSelection()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)

    this.$on('formula:input', value => {
      this.selection.setValue(value)
      this.putText()
      this.putDataset()
    })

    this.$on('formula:done', () => {
      this.selection.current.focus()
    })

    this.$on('toolbar:onStyle', style => {
      this.putStyle(style)
      this.$dispatch(actions.setStyle(this.selection.ids))
    })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.putText()

    const {style} = this.store.getState()
    const id = this.selection.current.id()
    this.putStyle(style[id])
  }

  toHTML() {
    return createTable(30, this.store.getState())
  }

  async resizeTable(event) {
    try {
      const data = await resizeHandler(this.$root, event)
      this.$dispatch(actions.setTableSize(data))
    } catch (e) {
      console.error('Resize error:', e.message)
    }
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      this.resizeTable(event)
      return
    }

    const $cell = $(event.target)
    if (isCell(event)) {
      if (event.shiftKey) {
        const $sells = matrix($cell, this.selection.current)
          .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($sells)
        return
      }
      this.selectCell($cell)
    }
    this.$emit('table:select', this.selection.current)
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp'
    ]
    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      this.selectCell($next)
    }
  }

  onInput() {
    const text = this.selection.current.text()

    this.selection.setValue(text)
    this.putText()
    this.putDataset()

    this.$emit('table:input', this.selection.current)
  }

  putText = () => {
    const id = this.selection.current.id()
    const text = this.selection.current.text()

    this.$dispatch(actions.setText({id, value: text}))
    this.$dispatch(actions.setCurrentText(text))
  }

  putStyle = style => {
    this.$dispatch(actions.setCurrentStyle(style))
    this.selection.applyStyle(this.store.getState().currentStyle)
  }

  putDataset = () => {
    const id = this.selection.current.id()
    const dataValue = this.selection.current.data.value
    this.$dispatch(actions.setDataset({id, name: 'value', value: dataValue}))
  }
}
