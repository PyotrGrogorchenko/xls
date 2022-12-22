import {range} from '@core/utils'

export const shouldResize = (event) => event.target.dataset.resize

export const isCell = (event) => event.target.dataset.type === 'cell'

export const matrix = ($target, $current) => {
  const target = $target.id(true)
  const current = $current.id(true)

  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  return cols.reduce((res, c) => {
    rows.forEach(r => res.push(`${r}:${c}`))
    return res
  }, [])
}
