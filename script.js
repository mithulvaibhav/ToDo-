let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');


function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') return alert(" Enter a Task"); 

    let li = document.createElement('li');

    
    let span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-text';
    
    
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    let deleteBtn = document.createElement('button');
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