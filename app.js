const input_field = document.querySelector("#input_field");
const submit_btn = document.querySelector("#submit_btn");
const delete_btn = document.querySelector("#delete_btn");
const task_list = document.querySelector("#task_list");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(input_field.value);
  let li = document.createElement("li");
  let task = document.createTextNode(input_field.value);
  li.appendChild(task);
  task_list.appendChild(li);
  input_field.value = "";
});
