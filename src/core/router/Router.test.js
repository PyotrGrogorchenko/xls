import {Router} from './Router'
import {Page} from '../Page'

class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHtml = 'dashboard'
    return root
  }
}
class ExcelPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHtml = 'excel'
    return root
  }
}

describe('Router:', () => {
  let router
  let $root

  beforeEach(() => {
    $root = document.createElement('div')
    router = new Router(
      $root,
      {
        dashboard: DashboardPage,
        excel: ExcelPage
      })
  })

  test('should be defined', () => {
    expect(router).toBeDefined()
  })

//   test('should render Dashboard Page', () => {
//     router.onRoute()
//     expect($root.innerHtml).toBe('<div></div>')
//   })
})
