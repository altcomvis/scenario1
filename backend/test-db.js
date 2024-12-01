const pool = require('./src/models/db');

pool.query('SELECT * FROM pedidos', (err, result) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Dados retornados:', result.rows);
    }
});
