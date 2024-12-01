const cors = require('cors');
const express = require('express');
const pool = require('./db'); // Certifique-se de que o arquivo db.js está correto

const app = express();

// Configuração de CORS
const corsOptions = {
  origin: 'https://scenario1-lilac.vercel.app', // Substitua pela URL do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

app.use(cors(corsOptions)); // Ativa CORS
app.use(express.json()); // Permite processar JSON no corpo das requisições

// Rotas
app.get('/pedidos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pedidos');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

app.post('/pedidos', async (req, res) => {
  const { vendedor, produto, quantidade, status } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO pedidos (vendedor, produto, quantidade, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [vendedor, produto, quantidade, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao adicionar pedido');
  }
});

app.put('/pedidos/:id', async (req, res) => {
  const { id } = req.params;
  const { vendedor, produto, quantidade, status } = req.body;

  try {
    const result = await pool.query(
      'UPDATE pedidos SET vendedor = $1, produto = $2, quantidade = $3, status = $4 WHERE id = $5 RETURNING *',
      [vendedor, produto, quantidade, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Pedido não encontrado');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

app.delete('/pedidos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM pedidos WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao excluir pedido');
  }
});

// Porta
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
