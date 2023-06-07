// scripts.js

// Get form elements
const taskForm = document.querySelector('#task-form');
const taskTitleInput = document.querySelector('#task-title');
const taskDescriptionInput = document.querySelector('#task-description');
const taskDueDateInput = document.querySelector('#task-due-date');
const taskPriorityInput = document.querySelector('#task-priority');

// Get task list element
const taskList = document.querySelector('#task-list ul');

// Function to create a new task
function createTask(title, description, dueDate, priority) {
  // Create task item
  const taskItem = document.createElement('li');

  // Create task content
  const taskContent = document.createElement('div');
  taskContent.classList.add('task-item');
  taskContent.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <p>⏰ Due Date: <span class="due-date">${dueDate}</span></p>
    <p>🚀 Priority: <span class="priority">${priority}</span></p>
  `;

  // Create task actions
  const taskActions = document.createElement('div');
  taskActions.classList.add('task-actions');
  taskActions.innerHTML = `
    <button class="complete-button">✅ Complete</button>
    <button class="delete-button">🗑️ Delete</button>
  `;

  // Append task content and actions to task item
  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskActions);

  // Append task item to task list
  taskList.appendChild(taskItem);
}

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const dueDate = taskDueDateInput.value;
  const priority = taskPriorityInput.value;

  // Create new task
  createTask(title, description, dueDate, priority);

  // Reset form inputs
  taskForm.reset();
});

// Event delegation for delete and complete button clicks
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const taskItem = event.target.closest('li');
    taskList.removeChild(taskItem);
  }


});


// scripts.js

// Get all complete buttons
const completeButtons = document.querySelectorAll('.complete-button');

// Function to mark a task as completed
function completeTask() {
  // Get the parent task item
  const taskItem = this.closest('li');

  // Toggle the "completed" class
  taskItem.classList.toggle('completed');
}

// Add event listener to each complete button
completeButtons.forEach(button => {
  button.addEventListener('click', completeTask);

});
  