const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = []; 

function DeleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(todos);
    saveTodos();
}

function saveTodos(){
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));  //string으로 바꿔주는 형태
}

function paintTodo(Todo){
    const li = document.createElement("li");
    li.classList.add("list-style");
;    li.id = Todo.id;
    const span = document.createElement("span");
    span.innerText = Todo.text;
    const button = document.createElement("button");
    button.innerText = `DEL`;
    button.addEventListener("click",DeleteTodo);
    li.appendChild(span)
    li.appendChild(button);
    todoList.appendChild(li);

}

function todoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";

    const newTodoobj = {
        text : newtodo,
        id : Date.now()
    };
    todos.push(newTodoobj);
    paintTodo(newTodoobj);
    saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}


