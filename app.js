const container = document.querySelector(".container")
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-button");


addBtn.addEventListener("click",function() {
    let taskValue = taskInput.value;
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.innerHTML = `
        <input id="checkbox" type="checkbox">
        <p id="task">${taskValue}</p>
        <button id="del-btn" class="del-btn">
            <i class="fa-solid fa-trash"></i>
        </button>`

    container.appendChild(taskContainer);
})