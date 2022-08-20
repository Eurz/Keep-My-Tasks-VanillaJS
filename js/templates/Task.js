import AbstractTask from '../controllers/AbstractTask.js'
import { createButton, createWrapper } from '../functions/utilities.js'

export default class Task extends AbstractTask {
    constructor(task) {
        super()
        this.taskWrapper = document.createElement('div')
        this.title = task.title || ''
        this.content = task.content || ''
        this.id = task.id || 666
    }

    get getContent() {
        return this.content
    }

    set setContent(newContent) {
        this.content = newContent
    }

    get getTitle() {
        return this.title
    }

    set setTitle(newTitle) {
        return (this.title = newTitle)
    }

    get getId() {
        return this.id
    }

    editTask() {
        this.taskWrapper.classList.add('task-fullscreen')
    }

    saveTask = (task) => {
        console.log('je vais sauvegarder cette tache!')
        const newTask = this.data.find((task) => task.id === this.getId)

        if (newTask !== undefined) {
            const taskIndex = this.data.indexOf(
                (task) => task.id === this.getId
            )

            this.data[taskIndex] = Object.assign(newTask, {
                id: task.id,
                title: task.title,
                content: task.content,
            })
        } else {
            this.data.unshift({
                id: task.id,
                title: task.title,
                content: task.content,
            })
        }

        localStorage.setItem('keepmytasks', JSON.stringify(this.data))
    }

    deleteTask = (id, element) => {
        const taskToDelete = this.data.filter((task) => task.id !== id)

        const newData = this.data.filter((task) => task.id !== this.getId)
        console.log({ newData })
        console.log(this.getId)

        document
            .querySelector('.tasks-list')
            .removeChild(document.querySelector('#' + this.getId))
        localStorage.setItem('keepmytasks', JSON.stringify(newData))
    }

    addTaskActions() {
        const btnGroups = createWrapper('div', 'btn-groups')

        const deleteButton = createButton(
            'Delete',
            'btn',
            'btn-delete-task',
            () => {
                this.deleteTask(this.getId, document.querySelector(this.getId))
            }
        )

        const saveButton = createButton(
            'Save',
            'btn',
            'btn-delete-task',

            (e) => {
                console.log('Je save')

                this.saveTask({
                    id: this.getId,
                    title: this.getTitle,
                    content: this.getContent,
                })
            }
        )

        btnGroups.append(deleteButton, saveButton)
        this.taskWrapper.appendChild(btnGroups)
    }

    getHtml() {
        this.taskWrapper.classList.add('task')
        this.taskWrapper.id = this.getId

        const title = document.createElement('input')
        title.classList.add('task-title')
        title.value = this.title
        title.placeholder = 'Enter a title'

        title.addEventListener('input', (e) => {
            this.setTitle = e.target.value
        })

        const content = document.createElement('textarea')
        content.classList.add('task-content')
        content.value = this.content
        content.placeholder = 'Enter a title'

        content.addEventListener('change', (e) => {
            this.setContent = e.target.value
        })

        this.taskWrapper.append(title, content)
        this.addTaskActions()

        return this.taskWrapper
        // return html
    }
}
