import {storage} from '@core/utils'

export const dbRecord = key => {
  const model = storage(key)

  return `
    <li class="db__record">
      <a href="#${key.replace(':', '/')}">${model.title}</a>
      <strong>
        ${new Date(model.lastOpened).toLocaleDateString()}
        ${new Date(model.lastOpened).toLocaleTimeString()}
      </strong>
    </li>  
  `
}

export const fetchKeys = () => {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export const createRecordstable = () => {
  const keys = fetchKeys()

  if (!keys.length) {
    return `<p>There are no tables yet</p>`
  }

  return `
    <div class="db__list-header">
      <span>Title</span>
      <span>Opening date</span>
    </div>

    <ul class="db__list">
      ${keys.map(dbRecord).join('')}
    </ul>
  `
}
