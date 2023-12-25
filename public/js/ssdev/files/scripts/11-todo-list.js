const todoList = [{
  name: 'make dinner',
  date: '2023-12-24'
}, {
  name: 'wash dishes',
  date: '2032-12-24'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, i) {
    const { name, date } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  /*
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
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  */
    
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

  renderTodoList();
}