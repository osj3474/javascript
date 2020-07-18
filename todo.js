const todoForm = document.querySelector(".js-todo"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODO_LS = "todoList";

function saveTodo(value) {
  localStorage.setItem(TODO_LS, value);
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function handleTodoInput(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  saveTodo(todoValue);
  paintTodo(todoValue);
  todoInput.value = "";
}

function loadTodos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
    paintTodo(toDos);
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleTodoInput);
}

init();
