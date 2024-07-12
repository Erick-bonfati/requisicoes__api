
async function listarPessoas() {
    const respostaJson = await fetch("http://localhost:3000/pessoas")
    const respostaConvertida = await respostaJson.json();

    return respostaConvertida;
}

async function criarFuncionario(nome, idade, cargo) {
  const conexaoJson = await fetch("http://localhost:3000/pessoas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    
    body: JSON.stringify({
      nome: nome,
      idade: idade,
      cargo: cargo
    })
  })

  if(!conexaoJson.ok) {
    throw new Error("Não foi possível criar um nova funcionario");
  }

  const conexaoConvertida = await conexaoJson.json();

  return conexaoJson;
}

export const conexaoApi = {
  listarPessoas,
  criarFuncionario
}