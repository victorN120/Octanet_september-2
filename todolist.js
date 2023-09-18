
const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadline');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (taskText !== '' && deadline !== '' && priority !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <label>${taskText} (Deadline: ${deadline}, Priority: ${priority})</label>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);

        // Clear input fields
        taskInput.value = '';
        deadlineInput.value = '';
        priorityInput.value = 'High';
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
