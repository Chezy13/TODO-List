"use strict"

const descriptionTask = document.querySelector("#input");
const addTaskBtn = document.querySelector("#add-btn");
const deleteAllBtn = document.querySelector("#del-btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total")

let i = 0;

addTaskBtn.addEventListener("click", () => {
    if (descriptionTask.value === " ") return
    createDeleteElements(descriptionTask.value)
    descriptionTask.value = " "
})

deleteAllBtn.addEventListener("click", () => {
    while (result.firstChild) {
        i --
        total.textContent = i
        result.removeChild(result.firstChild);
    }
})

function createDeleteElements(value) {
    i++
    
    const createTaskLi = document.createElement("li")
    const createBtnDelete = document.createElement("button")
    const createBtnDone = document.createElement("button")
    const createDate = document.createElement("span")

    createTaskLi.className = "li"
    createTaskLi.textContent = value

    createBtnDone.className = "todo-done_btn"
    createBtnDone.textContent = "Done"
    createTaskLi.prepend(createBtnDone)

    createBtnDelete.className = "todo-del_btn"
    createBtnDelete.textContent = "Delete"
    createTaskLi.appendChild(createBtnDelete)

    createDate.className = "todo-createDate"
    createDate.innerText = new Date().toLocaleDateString()
    createTaskLi.appendChild(createDate)

    createBtnDelete.addEventListener("click", () => {
        i --
        total.textContent = i
        result.removeChild(createTaskLi)
    })

    createBtnDone.addEventListener("click", () => {
        createTaskLi.classList.toggle("li-notactive")
    })

    total.textContent = i

    result.appendChild(createTaskLi)
}