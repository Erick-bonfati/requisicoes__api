import { conexaoApi } from "./conexaoApi.js"
const erroInput = document.querySelector(".erro__input")
const formulario = document.getElementById("form__funcionario");
const nomeInput = document.querySelector(".nome__form");
const idadeInput = document.querySelector(".idade__form");
const cargoInput = document.querySelector(".cargo__form");

async function criarNovoFuncionario(e) {
  e.preventDefault();

  const nome = nomeInput.value;
  const idade = idadeInput.value;
  const cargo = cargoInput.value;

  try {
    await conexaoApi.criarFuncionario(nome, idade, cargo)

    window.location.href = "../pages/envioConcluido.html"

  } catch(error){
    console.error(`Não foi possível criar um novo funcionário: ${error}`)
  }
}

formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  let temErro = false;

  if (nomeInput.value === '') {
    erroInput.classList.add("active")
    nomeInput.classList.add("nome__form__error")
    temErro = true;
  }
  if (idadeInput.value === '') {
    erroInput.classList.add("active")
    idadeInput.classList.add("idade__form__error")
    temErro = true;
  }
  if (cargoInput.value === '') {
    erroInput.classList.add("active")
    cargoInput.classList.add("cargo__form__error")
    temErro = true;
  }

  if (!temErro) {
    criarNovoFuncionario(evento);
  }
});

// Função para remover a classe de erro de um campo específico
const removerErro = (input, erroClass) => {
  input.classList.remove(erroClass);
  if (nomeInput.value !== '' && idadeInput.value !== '' && cargoInput.value !== '') {
    erroInput.classList.remove("active");
  }
};

// Adicionar eventos de input para remover a classe de erro quando o usuário começar a digitar
nomeInput.addEventListener("input", () => removerErro(nomeInput, "nome__form__error"));
idadeInput.addEventListener("input", () => removerErro(idadeInput, "idade__form__error"));
cargoInput.addEventListener("input", () => removerErro(cargoInput, "cargo__form__error"));