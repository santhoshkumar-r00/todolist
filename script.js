
function submitData() {

    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var mainBody = document.getElementById('main_container');

    if (title.trim() === '' || description.trim() === '') {
        alert("Please fill in both title and description.")
        return;
    }
    // Create new elements
    var newTitle = document.createElement('h2');
    newTitle.textContent = title;

    var newDescription = document.createElement('p');
    newDescription.textContent = description;

    var newContainer = document.createElement('div');
    newContainer.className = "task"

    // Append children
    newContainer.appendChild(newTitle);
    newContainer.appendChild(newDescription);
    mainBody.appendChild(newContainer);

    // Complete your task
    var completeTask = document.createElement('button');
    completeTask.textContent = "✔️";
    completeTask.className = "completeTask"
    newContainer.appendChild(completeTask);
    completeTask.onclick = () => {
        newTitle.style.textDecoration = 'line-through';
        newDescription.style.textDecoration = 'line-through';
    }

    // Delete your task
    var deleteTask = document.createElement('button');
    deleteTask.textContent = "🗑️"
    deleteTask.className = "deleteTask"
    newContainer.appendChild(deleteTask);
    deleteTask.onclick = () => {
        if (confirm("Are you sure you want to delete this task?"))
            newContainer.remove()
    }

    //  Edit button
    var editTask = document.createElement('button');
    editTask.textContent = "✏️";
    editTask.className = "editTask";
    newContainer.appendChild(editTask);
    editTask.onclick = () => {
        var updateTitle = prompt("Edit title:", newTitle.textContent);
        var updateDescription = prompt("Edit description:", newDescription.textContent);

        if (updateTitle !== null && updateDescription !== null) {
            newTitle.textContent = updateTitle;
            newDescription.textContent = updateDescription;
        }
    }
    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

}
// Using Clear button-clearinput fields
function resetClear() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

