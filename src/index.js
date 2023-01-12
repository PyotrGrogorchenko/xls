import {Router} from '@/core/router/Router'
import {DashboardPage} from '@/pages/DashboardPage/DashboardPage'
import {ExcelPage} from '@/pages/ExcelPage/ExcelPage'
import './scss/index.scss'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage
})
