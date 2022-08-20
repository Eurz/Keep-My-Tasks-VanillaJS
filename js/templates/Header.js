export default class Header {
    constructor() {}

    getHtml() {
        const container = document.createElement('div')
        container.classList.add('header')

        const html = `
        <h1>Keep My Tasks</h1>
        <div class="nav">
            <a href="#">Dashboard</a>
            <a href="#">Settings</a>
            <a href="#">Profil</a>
            <a href="#">Sign out</a>
        </div>
    `
        container.innerHTML = html

        return container
    }
}
