// Storing variables 
const form = document.getElementById('task-form');
const tasks = document.querySelector('.collection');
const deleteBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const inputTask = document.getElementById('task');

// Load eventlisteners
loadEventListeners();

// Create function for eventlisteners
function loadEventListeners(){
  form.addEventListener('submit', addTask);
  tasks.addEventListener('click', removeTask);
  deleteBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

// Add task functions
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
  tasks.appendChild(li);
  inputTask.value = '';

  event.preventDefault();
}

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks(){
  while(tasks.firstChild){
    tasks.removeChild(tasks.firstChild);
  }
}

// Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContext;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}
