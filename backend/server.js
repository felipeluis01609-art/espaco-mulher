const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const agendamentos = [];

app.post('/agendar', (req, res) => {
  const { nome, telefone, servico, data } = req.body;

  const novoPedido = {
    id: agendamentos.length + 1,
    nome,
    telefone,
    servico,
    data,
    criadoEm: new Date().toLocaleString('pt-BR')
  };

  agendamentos.push(novoPedido);
  console.log('Novo agendamento recebido:', novoPedido);

  res.json({
    mensagem: `Obrigada, ${nome}! Recebemos seu pedido para ${servico} no dia ${data}.`
  });
});

app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando! Acesse http://localhost:${PORT}`);
});
