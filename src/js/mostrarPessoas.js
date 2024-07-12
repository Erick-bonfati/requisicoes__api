import { conexaoApi } from './conexaoApi.js';

const listaFuncionarios = document.querySelector(".lista__funcionarios")

export default function mostrarFuncionarios(nome, idade, cargo) {
  const funcionario = document.createElement("li");

  funcionario.className = "funcionario__selecionado"
  funcionario.innerHTML =
  `
  <p><strong class="negrito">Nome:</strong> ${nome}</p>
  <p><strong class="negrito">Idade:</strong> ${idade}</p>
  <p><strong class="negrito">Cargo:</strong> ${cargo}</p>
  `

  return funcionario;
}

async function listarFuncionarios() {
  try {
    const listaApi = await conexaoApi.listarPessoas();

    listaApi.forEach(objeto => listaFuncionarios.appendChild(
      mostrarFuncionarios(objeto.nome, objeto.idade, objeto.cargo)
    ))
  } catch {
    listaFuncionarios.innerHTML = `<h2>Não foi possivel carregar a lista de funcionários</h2>`
  }
}

listarFuncionarios();