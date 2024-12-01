CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    vendedor VARCHAR(255) NOT NULL,
    produto VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    status VARCHAR(50) DEFAULT 'pendente',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);