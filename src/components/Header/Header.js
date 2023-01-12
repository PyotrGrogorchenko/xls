import * as actions from '@/store/actions'

import {ExcelComponent} from '@core/ExcelComponent'
import {ActiveRoute} from '@core/router/ActiveRoute'
import {$} from '@core/dom'
import {debounce} from '@core/utils'
import {defaultTitle} from '@/constans'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
          <div class="button" data-button="delete">
            <i class="material-icons" data-button="delete">delete</i>
          </div>  
          <div class="button" data-button="exit">
            <i class="material-icons" data-button="exit">exit_to_app</i>
          </div>  
        </div>
      `
  }

  onInput(event) {
    this.$dispatch(actions.setTitle($(event.target).text()))
  }

  onClick(event) {
    const $target = $(event.target)

    switch ($target.data.button) {
      case 'delete':
        localStorage.removeItem(ActiveRoute.param.join(':'))
        ActiveRoute.navigate('#')
        return
      case 'exit':
        ActiveRoute.navigate('#')
        return
      default:
        return
    }
  }
}
