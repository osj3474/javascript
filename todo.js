const todoForm = document.querySelector(".js-todo"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODO_LS = "todoList";

let todoOjbs = [];

function deleteTodos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanOjbs = todoOjbs.filter(function (todo) {
    console.log(todo.id, parseInt(li.id));
    return todo.id !== parseInt(li.id);
  });
  todoOjbs = cleanOjbs;
  saveTodo(todoOjbs);
}

function saveTodo(value) {
  localStorage.setItem(TODO_LS, JSON.stringify(value));
}

function paintTodo(obj) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌ ";
  delBtn.addEventListener("click", deleteTodos);
  const span = document.createElement("span");
  span.innerText = obj.text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = obj.id;
  todoList.appendChild(li);
}

function handleTodoInput(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  const todoId = todoOjbs.length + 1;
  const todoObj = {
    id: todoId,
    text: todoValue,
  };
  todoOjbs.push(todoObj);
  saveTodo(todoOjbs);
  paintTodo(todoObj);
  todoInput.value = "";
}

function loadTodos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(toDos);
    todoOjbs = parsedToDos;
    parsedToDos.forEach(function (todo) {
      paintTodo(todo);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleTodoInput);
}

init();
