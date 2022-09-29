const container = document.querySelector(".container")
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-button");

addBtn.addEventListener("click",function() {
    let taskValue = taskInput.value;

    if(taskValue === "") {
        alert("Enter a task");
    } else {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.innerHTML = `
            <input id="checkbox" class="checkbox" type="checkbox">
            <p id="task" class="task">${taskValue}</p>
            <button id="del-btn" class="del-btn">
                <i class="fa-solid fa-trash"></i>
            </button>`

        container.appendChild(taskContainer);

        taskContainer.addEventListener("click", completeOrDeleteTasks)
    }
});

function completeOrDeleteTasks(e) {
    const targetEl = e.target;
    if(targetEl.classList.contains('checkbox')) {
        if(targetEl.checked) {
            targetEl.nextElementSibling.classList.add("task-clicked")
        } else {
            targetEl.nextElementSibling.classList.remove("task-clicked");
        }
    }

    if(targetEl.parentElement.classList.contains('del-btn')) {
        e.currentTarget.remove();
    }
}

