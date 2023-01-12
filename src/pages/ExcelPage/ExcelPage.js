import {Excel} from '@/components/Excel/Excel'
import {Formula} from '@/components/Formula/Formula'
import {Header} from '@/components/Header/Header'
import {Table} from '@/components/Table/Table'
import {Toolbar} from '@/components/Toolbar/Toolbar'
import {rootReducer} from '@/store/rootReducer'
import {getState} from '@/store/initialState'

import {Page} from '@core/Page'
import {createStore} from '@core/store/createStore'
import {storage, debounce} from '@core/utils'

import {storageName} from './excel.functions'

export class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, getState(storageName(this.params)))

    const stateListener = debounce(state => {
      storage(storageName(this.params), state)
    }, 500)

    store.subscribe(stateListener)

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store
    })

    return this.excel.getRoot()
  }

  afterRender() {
    this.excel.init()
  }

  destroy() {
    this.excel.destroy()
  }
}
