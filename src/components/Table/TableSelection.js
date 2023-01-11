import {parse} from '@core/parse'

export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
  }

  get current() {
    return this.group[0]
  }

  get ids() {
    return this.group.map($el => $el.id())
  }

  select = $el => {
    this.clear()
    this.group = [$el]
    $el.focus().addClass(TableSelection.className)
  }

  selectGroup = $group => {
    this.clear()
    this.group = $group || []
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  clear = () => {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className))
    this.group.length = 0
  }

  applyStyle = style => this.group.forEach($el => $el.css(style))

  setValue = value => {
    this.group.forEach($el => $el.attr('data-value', value).text(parse(value)))
  }
}
