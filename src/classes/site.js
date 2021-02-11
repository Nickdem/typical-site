export class Header {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.insertAdjacentHTML('beforeend', model.toHTML())
    }
}

export class MainContent {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.$btn
    }

    show() {
        this.$el.querySelector('main').classList.add('show')
    }

    createForm() {
        // this.interval = setInterval(() => {
        //     console.log(123456);
        // }, 1000);
        // console.log('create',this.interval);
        const formTemplate = `
            <div class="backdrop"></div>
            <div class="form">
                <h3 class="form__title">Напишите нам!</h3>
                <form>
                    <div class="form__control">
                        <label class="form__label" for="username">Имя:</label>
                        <input class="form__input home-input" type="text" id="username" autocomplete="off">
                    </div>
                    <div class="form__control">
                        <label class="form__label" for="email">Почта:</label>
                        <input class="form__input home-input" type="email" id="email" autocomplete="off">
                    </div>
                    <div class="form__control">
                        <label class="form__label" for="message">Сообщение:</label>
                        <textarea class="form__textarea home-input" rows="4" id="message"></textarea>
                    </div>
                    <div class="form__control">
                        <input class="form__checkbox home-input" type="checkbox" id="checkbox">
                        <label for="checkbox">согласие на что-то</label>
                    </div>
                    <button class="form__btn" type="submit">Отправить</button>
                </form>
            </div>
        `

        document.querySelector('main').insertAdjacentHTML('afterend', formTemplate)
        const backdrop = document.querySelector('.backdrop')
        const formWrapper = document.querySelector('.form')
        const form = formWrapper.querySelector('form')
        // const inputs = form.querySelectorAll('.home-input')
        // console.log(inputs);
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const obj = {
                username: e.target.elements.username.value,
                email: e.target.elements.email.value,
                message: e.target.elements.message.value,
            }
            console.log(obj);

            backdrop.parentNode.removeChild(backdrop)
            formWrapper.parentNode.removeChild(formWrapper)
        })

        backdrop.addEventListener('click', () => {
            backdrop.parentNode.removeChild(backdrop)
            formWrapper.parentNode.removeChild(formWrapper)
        })
    }

    createBtn(text) {
        this.$btn = document.createElement('button')
        this.$btn.classList.add('home__button')
        this.$btn.innerText = text
        this.$btn.addEventListener('click', this.createForm)
        document.querySelector('.home').insertAdjacentElement('beforeend', this.$btn)
    }

    destroy() {
        // clearInterval(this.interval)
        // console.log('destr',this.interval);
        let main = this.$el.querySelector('main')
        
        this.$btn && this.$btn.removeEventListener('click', this.createForm)
        main && main.parentNode.removeChild(main)
    }

    render(model) {
        this.$el.insertAdjacentHTML('beforeend', model.toHTML())
    }
}