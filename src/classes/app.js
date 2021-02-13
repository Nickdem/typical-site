import { headerModel } from "../models/header-model"
import { homeModel } from "../models/home-model"
import { aboutModel } from "../models/about-model"
import { portfolioModel } from "../models/portfolio-model"
import { Header, MainContent } from "./site"
import { reviewsModel } from "../models/reviews-model"
import { contactsModel } from "../models/contacts-model"

export class App {
  mainContent
  constructor() {}

  #checkLocation(path) {
    switch (path) {
      case '/':
        return homeModel
      case '/about':
        return aboutModel
      case '/reviews':
        return reviewsModel
      case '/portfolio':
        return portfolioModel
      case '/contacts':
        return contactsModel
      default:
        history.pushState(null, null, '/');
        return homeModel
    }
  }

  #makeLinksHandlers() {
    const links = document.querySelector('.header__inner').querySelectorAll('a')

    Array.from(links).forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const path = e.target.pathname || '/'

        if (window.location.pathname === path) return

        document.querySelector('main').classList.remove('show')

        setTimeout(() => {
          history.pushState(null, null, path);
          this.#update(path)
        }, 400)
      })
    })
  }

  #update(path) {
    this.mainContent.destroy()
    this.mainContent.render(this.#checkLocation(path))
    setTimeout(() => {
      this.mainContent.show()
      if (path === '/') this.mainContent.createBtn('Написать нам')
    }, 400)
  }

  init() {
    const header = new Header('.app')
    header.render(headerModel)

    this.mainContent = new MainContent('.app')
    this.#update(window.location.pathname)

    this.#makeLinksHandlers()
  }
}