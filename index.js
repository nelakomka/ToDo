// today's date
const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

let x = 0;

const getTasks = document.querySelector(".tasks");
const getInput = document.querySelector(".input");

const addTask = () => {
  //get input
  const value = getInput.value;

  //.trim checks for empty string and multiple spaces
  if (!value.trim()) {
    return;
  }

  //create input and checkbox
  const createDiv = document.createElement("div");
  const createInput = document.createElement("input");
  const createLabel = document.createElement("label");
  const createSpan = document.createElement("span");
  const createDelete = document.createElement("button");

  createSpan.innerHTML = value; //put value in span
  createDelete.innerHTML = "x"; //add text to delete button

  //add ids and event
  createDiv.setAttribute("class", "task");
  createDiv.setAttribute("id", String(x));
  createInput.setAttribute("id", `checkbox${x}`);
  createInput.setAttribute("type", "checkbox");
  createLabel.setAttribute("for", `checkbox${x}`);
  createDelete.addEventListener("click", deleteToDo);
  x++;

  //create text
  createDiv.appendChild(createInput);
  createDiv.appendChild(createLabel);
  createDiv.appendChild(createSpan);
  getTasks.appendChild(createDiv);
  createDiv.appendChild(createDelete); //create delete button

  //clear input
  getInput.value = "";
};

function deleteToDo(event) {
  const parentElement = event.target.parentElement;

  parentElement.remove();
}

getInput.addEventListener("keydown", (ev) => {
  if (ev.keyCode === 13) {
    addTask();
  }
});
