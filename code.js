let taskArray = [];

function start() {
  const inputEl = document.getElementById("inputBox");
  inputEl.onkeydown = getInput;
}
start();

function getInput(e) {
  if (e.key === "Enter") {
    let inputValue = document.getElementById("inputBox").value;
    taskArray.push(inputValue);
    document.getElementById("inputBox").value = "";
    displayTasks();
  }
}

function displayTasks() {
  console.log(taskArray);
  let a = document.getElementById("container");
  if (a) {
    a.remove();
    const outerDiv = document.createElement("div");
    outerDiv.setAttribute("id", "container");
    for (let task of taskArray) {
      let taskDetail = document.createElement("p");
      let button = document.createElement("button");
      button.innerText = "Delete";
      button.setAttribute("id", taskArray.indexOf(task));
      button.onclick = deleteTask;
      console.log(button);
      taskDetail.innerText = task;
      outerDiv.appendChild(taskDetail);
      outerDiv.appendChild(button);

      document.body.appendChild(outerDiv);
    }
  } else {
    const outerDiv = document.createElement("div");
    outerDiv.setAttribute("id", "container");
    for (let task of taskArray) {
      let taskDetail = document.createElement("p");
      let button = document.createElement("button");
      button.innerText = "Delete";
      button.setAttribute("id", taskArray.indexOf(task));
      button.onclick = deleteTask;
      console.log(button);
      taskDetail.innerText = task;
      outerDiv.appendChild(taskDetail);
      outerDiv.appendChild(button);

      document.body.appendChild(outerDiv);
    }
  }
}

function deleteTask(e) {
  console.log("deleteTask");
  console.log(e.target.id);
  taskArray = taskArray.filter(
    (task, index, self) => task !== self[e.target.id]
  );
  console.log(taskArray);
}
