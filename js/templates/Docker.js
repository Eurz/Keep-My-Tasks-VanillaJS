export default class Docker {
    constructor() {
        // const btnAddTask = docu
    }

    getHtml() {
        const container = document.createElement('div')
        container.setAttribute('id', 'docker')

        const button = document.createElement('button')
        button.classList.add('btn', 'btn-add-task')
        button.setAttribute('id', 'btn-add-task')

        button.textContent = '+'

        container.appendChild(button)

        return container
    }
}
