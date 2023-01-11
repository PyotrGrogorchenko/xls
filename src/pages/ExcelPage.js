import {Excel} from '@/components/Excel/Excel'
import {Formula} from '@/components/Formula/Formula'
import {Header} from '@/components/Header/Header'
import {Table} from '@/components/Table/Table'
import {Toolbar} from '@/components/Toolbar/Toolbar'
import {createStore} from '@core/createStore'
import {storage, debounce} from '@core/utils'
import {rootReducer} from '@/store/rootReducer'
import {initialState} from '@/store/initialState'

import {Page} from '@core/Page'

export class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState)

    const stateListener = debounce(state => {
      storage('excel-state', state)
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
