import * as actions from '@/store/actions'

import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {debounce} from '@core/utils'
import {defaultTitle} from '@/constans'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 500)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" class="input" value="${title}"/>
        <div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>  
        <div class="button">
          <i class="material-icons">delete</i>
        </div>  
      </div>`
  }

  onInput(event) {
    this.$dispatch(actions.setTitle($(event.target).text()))
  }
}
