let inp = document.querySelector("input");
let btn = document.querySelector(".add-btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let task = document.createElement("li");
  task.innerText = inp.value;

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit");

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(delBtn);

  task.appendChild(buttonContainer);
  ul.appendChild(task);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    let listItem = event.target.parentElement.parentElement;
    listItem.remove();
  } else if (event.target.classList.contains("edit")) {
    let listItem = event.target.parentElement.parentElement;
    let taskText = listItem.firstChild.textContent;
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskText;
    listItem.replaceChild(editInput, listItem.firstChild);

    let saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.classList.add("save");
    event.target.parentElement.replaceChild(saveBtn, event.target);

    saveBtn.addEventListener("click", function () {
      let updatedTask = document.createElement("span");
      updatedTask.innerText = editInput.value;
      listItem.replaceChild(updatedTask, editInput);

      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("edit");
      saveBtn.parentElement.replaceChild(editBtn, saveBtn);
    });
  }
});
