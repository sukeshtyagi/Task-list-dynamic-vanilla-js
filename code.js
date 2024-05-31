let taskArray = [];
let editIndex = null;

function start() {
  const inputEl = document.getElementById("inputBox");
  inputEl.onkeydown = getInput;
}
start();

function getInput(e) {
  if (e.key === "Enter") {
    let inputValue = document.getElementById("inputBox").value;
    if (editIndex !== null) {
      taskArray[editIndex] = inputValue;
    } else {
      taskArray.push(inputValue);
    }
    document.getElementById("inputBox").value = "";
    displayTasks(taskArray);
  }
}

function displayTasks(taskArray) {
  console.log(taskArray);
  let taskDiv = document.getElementById("container");
  if (taskDiv) {
    taskDiv.remove();
  }
  const outerDiv = document.createElement("div");
  outerDiv.setAttribute("id", "container");
  for (let task of taskArray) {
    let taskDetail = document.createElement("p");
    const btnDiv = document.createElement("div");
    btnDiv.style.display = "flex";
    btnDiv.style.gap = "15px";
    let button = document.createElement("button");
    button.innerText = "Delete";
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    button.setAttribute("id", taskArray.indexOf(task));
    editButton.setAttribute("id", taskArray.indexOf(task));
    taskDetail.innerText = task;
    outerDiv.appendChild(taskDetail);
    outerDiv.appendChild(btnDiv);
    btnDiv.appendChild(editButton);
    btnDiv.appendChild(button);

    button.onclick = deleteTask;
    editButton.onclick = editTask;

    document.body.appendChild(outerDiv);
  }
}

function deleteTask(e) {
  taskArray = taskArray.filter(
    (task, index, self) => task !== self[e.target.id]
  );
  displayTasks(taskArray);
}

function editTask(e) {
  console.log("eidt");
  console.log(taskArray[e.target.id]);
  editIndex = e.target.id;
  document.getElementById("inputBox").value = taskArray[e.target.id];
}
