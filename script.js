const tarefas = document.querySelector("div#tarefas");
const item = document.querySelector("div.item");

const registrar = document.forms.registro;
registrar.addEventListener("submit", function (e) {
  e.preventDefault();

  if (registrar.tarefa.value.trim().length === 0) {
    return;
  }

  const p = document.createElement("p");
  p.innerText = registrar.tarefa.value.trim();

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      div.classList.add("item-feito");
      p.classList.add("feito");
    } else {
      p.classList.remove("feito");
      div.classList.remove("item-feito");
    }
  });

  const dados = document.createElement("div");
  dados.classList.add("dados");
  dados.append(checkbox, p);

  const remover = document.createElement("button");
  remover.innerText = "Remover";

  remover.addEventListener("click", function () {
    div.remove();
  });

  const div = document.createElement("div");
  div.classList.add("item");
  div.append(dados, remover);

  tarefas.appendChild(div);
  registrar.tarefa.value = "";
});
