import * as actions from '@/store/actions'
// import {defaultStyles} from '@/constans'

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
      // subscribe: ['currentStyle'],
      ...options
    })
  }

  init() {
    super.init()
    this.selection = new TableSelection()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)

    this.$on('formula:input', text => {
      this.selection.current.text(text)
      this.putText()
    })

    this.$on('formula:done', () => {
      this.selection.current.focus()
    })

    this.$on('toolbar:onStyle', style => {
      this.selection.applyStyle(style)
      this.$dispatch(actions.setCurrentStyle(style))
    })
  }

  selectCell($cell) {
    this.selection.select($cell)
    this.putText()

    // const {text} = this.store.getState()
    // const {id} = $cell.data
    // this.$dispatch(actions.setActiveId(id))

    // const {text} = this.store.getState()
    // console.log('text', text[id])
    // const styles = $cell.getStyles(Object.keys(defaultStyles))
    // this.$dispatch(actions.setStyle(styles))
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

  onInput(event) {
    this.putText()
  }

  storeChanged(changes) {
    this.selection.applyStyle(changes.currentStyle)

    const ids = this.selection.group.reduce((r, v) => {
      r.push(v.id())
      return r
    }, [])
    this.$dispatch(actions.setStyle(ids))
  }

  putText = () => {
    const id = this.selection.current.id()
    const text = this.selection.current.text()

    this.$dispatch(actions.setText({id, value: text}))
    this.$dispatch(actions.setCurrentText(text))
  }

  putStyle = () => {
    // const id = this.selection.current.id()
    // const text = this.selection.current.text()

    // this.$dispatch(actions.setText({id, value: text}))
    // this.$dispatch(actions.setCurrentText(text))
  }
}
