import { App } from './classes/app.js';

const app = new App()
app.init()

const header = document.querySelector('.header__inner')
const links = header.querySelectorAll('a')

function clickHandler(e) {
    e.preventDefault()
    const path = e.target.pathname || '/'

    if (window.location.pathname === path) return

    document.querySelector('main').classList.remove('show')

    setTimeout(() => {
        history.pushState(null, null, path);
        app.update(path)
    }, 400)
}

Array.from(links).forEach((link) => {
    link.addEventListener('click', clickHandler)
})

//console.log(document.querySelector('.home__button'))
//document.querySelector('.home__button').addEventListener('click', () => console.log(123))