export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
  }

  select($el) {
    this.clear()
    this.group = [$el]
    $el.addClass(TableSelection.className)
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className))
    this.group.length = 0
  }

  selectGroup() {

  }
}
