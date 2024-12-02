const express = require('express');
const pool = require('../db');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/pedidos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pedidos');
        res.status(200).json(result.rows); 
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
