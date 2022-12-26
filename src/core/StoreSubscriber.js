import {isEqual} from '@core/utils'

export class StoreSubscriber {
  constructor(store) {
    this.store = store
    this.sub = null
    this.prevState = {}
  }

  subscribeComponents(components) {
    this.prevState = this.store.getState()
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(k => {
        if (!isEqual(this.prevState[k], state[k])) {
          components.forEach(c => {
            if (c.isWatching(k)) {
              c.storeChanged({[k]: state[k]})
            }
          })
        }
      })
      this.prevState = this.store.getState()
    })
  }

  unsubscribeFromStore() {
    this.sub.unsubscribe()
  }
}
