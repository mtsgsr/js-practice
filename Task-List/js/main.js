const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function createLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    if (!inputTarefa.value) return;
    getInput(inputTarefa.value);
  }
});

function clearInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function createDelete(li) {
  li.innerText += " ";
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Apagar";
  btnDelete.setAttribute("class", "apagar");
  li.appendChild(btnDelete);
}

function getInput(texto) {
  const li = createLi();
  li.innerText = texto;
  tarefas.appendChild(li);
  clearInput();
  createDelete(li);
  saveTasks();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  getInput(inputTarefa.value);
});

document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("apagar")) {
    element.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  console.log(listaDeTarefas);
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function addSavedTasks() {
  if (!localStorage.getItem("tarefas")) return;
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    getInput(tarefa);
  }
}

addSavedTasks();
