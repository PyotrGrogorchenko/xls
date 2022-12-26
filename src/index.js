import {Excel} from '@/components/Excel/Excel'
import {Formula} from '@/components/Formula/Formula'
import {Header} from '@/components/Header/Header'
import {Table} from '@/components/Table/Table'
import {Toolbar} from '@/components/Toolbar/Toolbar'
import {createStore} from '@core/createStore'
import {storage} from '@core/utils'
import {rootReducer} from '@/store/rootReducer'
import {initialState} from '@/store/initialState'
import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(s => {
  storage('excel-state', s)
})

const excel = new Excel(
  '#app',
  {
    components: [Header, Toolbar, Formula, Table],
    store
  })

excel.render()
