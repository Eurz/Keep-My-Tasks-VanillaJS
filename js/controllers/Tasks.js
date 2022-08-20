import { TaskObserver, TasksSubject } from '../subjects/TasksSubject.js'
import Task from '../templates/Task.js'
import AbstractTask from './AbstractTask.js'

export default class Tasks extends AbstractTask {
    constructor() {
        super()
        this.root = document.createElement('div')
        this.root.setAttribute('id', 'tasks')
        this.root.classList.add('tasks')

        this.tasksList = document.createElement('div')
        this.tasksList.classList.add('tasks-list')

        this.tasksSubject = new TasksSubject()
        this.taskObserver = new TaskObserver()
        this.tasksSubject.subscribe(this.taskObserver)
    }

    createTask(task) {
        const newTask = new Task(task)

        const html = newTask.getHtml()
        newTask.saveTask({
            id: task.id,
            title: task.title,
            content: task.content,
        })
        this.tasksList.prepend(html)

        return newTask
    }

    addTask = () => {
        const taskObject = {
            id: 'task-' + Math.floor(Math.random() * 100000),
            title: '',
            content: '',
        }

        const task = this.createTask(taskObject)
    }

    editTask = (id) => {}

    duplicateTask = (id) => {}

    sortTask = (tasks) => {}

    displayTask = () => {}

    getHtml = () => {
        this.tasksList.innerHTML = ``
        const html = this.root.appendChild(this.tasksList)

        this.data.forEach((task) => {
            const item = new Task(task)
            this.tasksList.appendChild(item.getHtml())
        })

        return html
    }
}
