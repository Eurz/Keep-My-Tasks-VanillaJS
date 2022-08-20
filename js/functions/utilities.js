/**
 *
 * @param {HTMLElement} element - Container to create
 * @param {String} className - Class name of the container
 * @returns HTMLElement
 */
export function createWrapper(element, className, id = null) {
    const wrapper = document.createElement(element)
    wrapper.classList.add(className)
    if (id) {
        wrapper.setAttribute('id', id)
    }

    return wrapper
}

export function createButton(label, className, id = null, callBack) {
    const button = document.createElement('button')
    button.textContent = label
    button.classList.add(className)

    if (id) {
        button.setAttribute('id', id)
    }

    button.addEventListener('click', callBack)
    return button
}
