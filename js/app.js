import Tasks from './controllers/Tasks.js'
import Docker from './templates/Docker.js'
import Header from './templates/Header.js'

const appDiv = document.querySelector('#app')

const header = new Header()
const tasks = new Tasks()
const docker = new Docker()

appDiv.append(header.getHtml(), tasks.getHtml(), docker.getHtml())

const btnAddTask = document.querySelector('#btn-add-task')
btnAddTask.addEventListener('click', () => {
    tasks.addTask()
})
