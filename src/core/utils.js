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
