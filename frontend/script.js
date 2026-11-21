const API_URL = 'https://espaco-mulher.onrender.com';

document.getElementById('form-agendamento').addEventListener('submit', async (event) => {
  event.preventDefault();

  const dados = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    servico: document.getElementById('servico').value,
    data: document.getElementById('data').value
  };

  try {
    const resposta = await fetch(`${API_URL}/agendar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    document.getElementById('mensagem-resposta').innerText = resultado.mensagem;
    event.target.reset();
  } catch (erro) {
    document.getElementById('mensagem-resposta').innerText = 'Erro ao conectar com o servidor.';
  }
});
