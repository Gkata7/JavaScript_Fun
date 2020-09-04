// Storing variables 
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const deleteBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const inputTask = document.getElementById('task');

// Load eventlisteners
loadEventListeners();

// Create function for eventlisteners
function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  deleteBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

// Have Tasks stick on the page after reloading
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fas fa-times"></li>';
      li.appendChild(link);
      taskList.appendChild(li);
  });
}

// Add Task Functions
function addTask(event){
  if(inputTask.value === ''){
    alert('Add a Task');
  }
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(inputTask.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fas fa-times"></li>';
  li.appendChild(link);
  taskList.appendChild(li);

  storeTasks(inputTask.value);
  inputTask.value = '';
  event.preventDefault();
}


// Store Tasks
function storeTasks(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
      removeTaskFromStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from the storage
function removeTaskFromStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, i){
    if(taskItem.textContent === task){
      tasks.splice(i, 1);
    }
  })
  localStorage.setItem('tasks', JSON.stringify('tasks'));
}

// Clear Tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

