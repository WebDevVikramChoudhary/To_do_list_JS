const input_field = document.querySelector("#input_field");
const form = document.querySelector("form");
const delete_btn = document.querySelector("#delete_btn");
const task_list = document.querySelector("#task_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let li = document.createElement("li");
  let task = document.createTextNode(input_field.value);
  li.appendChild(task);
  task_list.appendChild(li);
  localStorage;
  input_field.value = "";

  // Delete a li item on click
  li.onclick = function () {
    this.parentNode.removeChild(this);
  };
});
