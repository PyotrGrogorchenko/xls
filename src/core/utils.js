export const capitalize = str => {
  if (typeof str !== 'string') {
    return ''
  }
  return str.charAt(0).toUpperCase().concat(str.slice(1))
}

export const range = (start, end) => {
  if (start > end) [start, end] = [end, start]
  return new Array(end - start + 1)
    .fill('')
    .map((_, i) => start + i)
}

export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}

export const camelToDashCase = str => str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)

export function debounce(fn, wait) {
  let timeout

  return function(...args) {
    const later = () => {
      clearTimeout(timeout)
      // eslint-disable-next-line
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const clone = obj => (JSON.parse(JSON.stringify(obj)))

export const preventDefault = event => event.preventDefault()
