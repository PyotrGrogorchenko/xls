import {$} from '@core/dom'
import {ActiveRoute} from './ActiveRoute'

export class Router {
  constructor(selector = '#app', routes = {}) {
    this.$root = $(selector)
    this.routes = routes
    this.onRoute = this.onRoute.bind(this)
    this.page = null

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.onRoute)
    this.onRoute()
  }

  onRoute() {
    if (this.page) {
      this.page.destroy()
    }
    this.$root.clear()
    const param = ActiveRoute.param
    const Page = this.routes[param[0]] || this.routes.dashboard

    this.page = new Page(param)
    this.$root.append(this.page.getRoot())

    this.page.afterRender()
  }

  destroy() {
    window.removeEventListener('hashchange')
  }
}
