class Block {
  constructor(values) {
    this.values = values
  }

  toHTML() {
    throw new Error('Метод toHTML обязателен')
  }
}

export class HeaderBlock extends Block {
  constructor(values) {
    super(values)
  }

  renderListItems(arr) {
    return arr.map((item) => {
      return `
        <li class="header__navigation-item">
          <a class="header__navigation-link" href="${item.to}">${item.name}</a>
        </li>
      `
    }).join('')
  }

  toHTML() {
    return `
    <header class='header'>
      <div class="container">
        <div class="header__inner">
          <div class='header__logo'>
            <a href="/">
              <img src='${this.values.logo}' alt='logo'>
            </a>
          </div>
          <nav class="header__navigation">
            <ul class="header__navigation-list">
              ${this.renderListItems(this.values.links)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    `
  }
}

export class HomeBlock extends Block {
  constructor(values) {
    super(values)
  }

  toHTML() {
    return `
      <main>
        <div class="container">
          <div class="home">
            <h1 class="home__title">${this.values.title}</h1>
            <p class="home__text">${this.values.text}</p>
          </div>
        </div>
      </main>
    `
  }
}

export class AboutBlock extends Block {
  constructor(values) {
    super(values)
  }

  toHTML() {
    return `
      <main>
        <div class="container">
          <div class="about">
            <h1 class="about__title page-title">${this.values.title}</h1>
            <p class="about__text">${this.values.text}</p>
          </div>
        </div>
      </main>
    `
  }
}

export class PortfolioBlock extends Block {
  constructor(values) {
    super(values)
  }

  toHTML() {
    return `
      <main>
        <div class="container">
          <div class="portfolio">
            <h1 class="portfolio__title page-title">${this.values.title}</h1>
            <p class="portfolio__text">${this.values.text}</p>
          </div>
        </div>
      </main>
    `
  }
}

export class ReviewsBlock extends Block {
  constructor(values) {
    super(values)
  }

  toHTML() {
    return `
      <main>
        <div class="container">
          <div class="reviews">
            <h1 class="reviews__title page-title">${this.values.title}</h1>
            <p class="reviews__text">${this.values.text}</p>
          </div>
        </div>
      </main>
    `
  }
}

export class ContactsBlock extends Block {
  constructor(values) {
    super(values)
  }

  toHTML() {
    return `
      <main>
        <div class="container">
          <div class="contacts">
            <h1 class="contacts__title page-title">${this.values.title}</h1>
            <p class="contacts__text">${this.values.text}</p>
          </div>
        </div>
      </main>
    `
  }
}
