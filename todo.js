const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todolist = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

let arrey = [];
let donArrey = [];

function saveDone() {
  localStorage.setItem("todone", JSON.stringify(donArrey));
}

function saveList() {
  localStorage.setItem("todo", JSON.stringify(arrey));
}
function removeDoneList(event) {
  const li = event.target.parentNode;
  const span = li.firstChild;
  li.remove();
  donArrey = donArrey.filter((donArrey) => donArrey.id !== parseInt(span.id));
  saveDone();
}

function removeList(event) {
  const li = event.target.parentNode;
  li.remove();
  arrey = arrey.filter((arrey) => arrey.id !== parseInt(li.id));
  saveList();
}

function showingDoneList(event) {
  const lid = document.createElement("li");
  const span = document.createElement("span");
  span.id = event.id;
  const moveBTN = document.createElement("button");
  const button = document.createElement("button");
  button.addEventListener("click", removeDoneList);
  moveBTN.addEventListener("click", drawingDo);
  button.innerText = "remove";
  moveBTN.innerText = "move";
  span.innerText = event.text;
  lid.appendChild(span);
  lid.appendChild(button);
  lid.appendChild(moveBTN);
  doneList.appendChild(lid);
}

function showingList(savedInput) {
  const li = document.createElement("li");
  li.id = savedInput.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  const moveBTN = document.createElement("button");
  span.innerText = savedInput.text;
  button.innerText = "remove";
  moveBTN.innerText = "move";
  button.addEventListener("click", removeList);
  moveBTN.addEventListener("click", drawingDone);
  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(moveBTN);
  todolist.appendChild(li);
}

function drawingDone(event) {
  const li = event.target.parentNode;
  const span = li.firstChild;
  const texts = span.textContent;
  const doneObj = {
    text: texts,
    id: Math.floor(Math.random() * 100),
  };
  donArrey.push(doneObj);
  removeList(event);
  showingDoneList(doneObj);
  saveDone();
}

function drawingDo(event) {
  const li = event.target.parentNode;
  const span = li.firstChild;
  const texts = span.textContent;
  const doObj = {
    text: texts,
    id: Date.now(),
  };
  arrey.push(doObj);
  removeDoneList(event);
  showingList(doObj);
  saveList();
}

function submitTodoList(event) {
  event.preventDefault();
  const savedInput = todoInput.value;
  todoInput.value = "";
  const savedInputObj = {
    text: savedInput,
    id: Date.now(),
  };
  arrey.push(savedInputObj);
  showingList(savedInputObj);
  saveList();
}

todoForm.addEventListener("submit", submitTodoList);

const savedList = localStorage.getItem("todo");

if (savedList !== null) {
  const aryList = JSON.parse(savedList);
  arrey = aryList;
  aryList.forEach(showingList);
}

const doneSaved = localStorage.getItem("todone");

if (doneSaved !== null) {
  const aryList = JSON.parse(doneSaved);
  donArrey = aryList;
  donArrey.forEach(showingDoneList);
}
