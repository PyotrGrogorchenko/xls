const CODES = {
  A: 65,
  Z: 90
}

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

const getWidth = (state, index) => {
  return (state?.col?.[index] ?? DEFAULT_WIDTH) + 'px'
}

const getHeight = (state, index) => {
  return (state?.row?.[index] ?? DEFAULT_HEIGHT) + 'px'
}

const toCell = (state, row) => {
  return (_, col) => {
    const id = `${row}:${col}`
    const data = state.text[id] ?? ''
    return `<div
      class="cell"
      contenteditable
      data-col="${col}"
      data-row="${row}"
      data-id="${id}"
      data-type="cell"
      style="width: ${getWidth(state, col)}"
    >${data}</div>`
  }
}

const toColumn = ({content, index, width}) => {
  return `
    <div 
      class="column"
      data-type="resizable"
      data-col="${index}"
      style="width:${width}"
    >
      ${content}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

const createRow = (index, content, state) => {
  const height = getHeight(state, index)
  return `
    <div
      class="row"
      data-type="resizable"
      data-row="${index}"
      style="height:${height}"
    >
      <div class="row-info">
        ${index || ''}
        ${index ? '<div class="row-resize" data-resize="row"></div>' : ''}
      </div>
      <div class="row-data">${content}</div>
    </div>      

  `
}

const toChar = (_, index) => String.fromCharCode(CODES.A + index)

const withWidthFrom = (state) => {
  return (content, index) => {
    return {
      content, index, width: getWidth(state, index)
    }
  }
}

export const createTable = (rowsCount = 25, state = {}) => {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFrom(state))
    .map(toColumn)
    .join('')

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell(state, row))
      .join('')

    rows.push(createRow(row + 1, cells, state))
  }

  return rows.join('')
}
