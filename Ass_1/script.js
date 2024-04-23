document.addEventListener("DOMContentLoaded", fetchTodos);

async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function displayTodos(todos) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // Clear previous content

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const title = document.createElement("p");
    title.textContent = todo.title;
    todoItem.appendChild(title);

    const completed = document.createElement("span");
    completed.textContent = todo.completed ? "Completed" : "Incomplete";
    todoItem.appendChild(completed);

    todoList.appendChild(todoItem);
  });
}
