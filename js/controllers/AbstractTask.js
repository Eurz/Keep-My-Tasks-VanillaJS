export default class {
    constructor() {
        this.data = this.getTasks()
    }

    getTasks = () => {
        // return this.test
        return JSON.parse(localStorage.getItem('keepmytasks') || '[]')
    }
}
