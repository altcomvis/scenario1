const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Arquivo de configuração do banco de dados

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite JSON no corpo das requisições

// Rotas

// 1. Listar produtos
app.get('/api/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produtos');
    const produtos = result.rows.map(produto => ({
      ...produto,
      preco: Number(produto.preco), // Garante que o preço seja um número
    }));
    res.json(produtos);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});


// 2. Adicionar produto ao carrinho
app.post('/api/carrinho', async (req, res) => {
  const { produtoId, quantidade } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO carrinho (produto_id, quantidade) VALUES ($1, $2) RETURNING *',
      [produtoId, quantidade]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao adicionar produto ao carrinho');
  }
});

// 3. Remover produto do carrinho
app.delete('/api/carrinho/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM carrinho WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao remover produto do carrinho');
  }
});

// 4. Confirmar método de entrega
app.post('/api/entrega', async (req, res) => {
  const { metodo, preco } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO entrega (metodo, preco) VALUES ($1, $2) RETURNING *',
      [metodo, preco]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao confirmar entrega');
  }
});

// 5. Simular pagamento
app.post('/api/pagamento', (req, res) => {
  const { nomeCartao, numeroCartao, validade, cvv } = req.body;

  // Simulação: sempre retorna sucesso
  res.status(200).json({ status: 'Pagamento realizado com sucesso' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
