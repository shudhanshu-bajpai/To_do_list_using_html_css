function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.className = "task";
        newTask.innerHTML = `
            <input type="checkbox">
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var task = button.parentElement;
    task.parentElement.removeChild(task);
}