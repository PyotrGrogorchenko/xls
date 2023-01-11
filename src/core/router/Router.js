import {$} from '@core/dom'
import {ActiveRoute} from './ActiveRoute'

export class Router {
  constructor(selector = '#app', routes = {}) {
    this.$root = $(selector)
    this.routes = routes

    this.onRoute = this.onRoute.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.onRoute)
    this.onRoute()
  }

  onRoute() {
    const Page = this.routes.excel
    const page = new Page()
    this.$root.append(page.getRoot())
    page.afterRender()
  }

  destroy() {
    window.removeEventListener('hashchange')
  }
}
