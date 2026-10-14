const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; 

    const li = document.createElement('li');

    
    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-text';
    
    
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; 
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});