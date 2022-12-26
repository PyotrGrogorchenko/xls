import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>`
  }

  init() {
    super.init()
    this.$formula = this.$root.find('#formula')

    this.$on('table:select', $c => {
      this.$formula.text($c.text())
    })

    // this.$on('table:input', $c => {
    //   this.$formula.text($c.text())
    // })

    this.$subscribe(s => {
      console.log('formula:update', s)
      this.$formula.text(s.currentText)
    })
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    const {key} = event

    if (keys.includes(key)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}
