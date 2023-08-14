const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];


function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveTodos();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener('click',deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}


function handleToDoUsbmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}


toDoForm.addEventListener("submit",handleToDoUsbmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
};


