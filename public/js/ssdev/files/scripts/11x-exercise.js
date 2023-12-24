const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function storeTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const date = todoObject.date;
    const { name, date } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        storeTodoList();
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
    
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML; 
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;

  todoList.push({
    //name: name,
    //date: date,
    name,
    date
  });

  inputElement.value = '';

  storeTodoList();
  renderTodoList();
}