export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
  }

  get current() {
    return this.group[0]
  }

  select = $el => {
    this.clear()
    this.group = [$el]
    $el.focus().addClass(TableSelection.className)
  }

  clear = () => {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className))
    this.group.length = 0
  }

  selectGroup = $group => {
    this.clear()
    this.group = $group || []
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  applyStyle = style => this.group.forEach($el => $el.css(style))

  ids = () => this.group.reduce((r, v) => {
    r.push(v.id())
    return r
  }, [])
}
