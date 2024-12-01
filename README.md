# Gerenciamento de Pedidos - Situação Problema 1

Este projeto foi desenvolvido como solução para a Situação Problema 1 
no contexto do Projeto Integrador Transdisciplinar em Engenharia de Software II. 
Ele permite o gerenciamento de pedidos, incluindo funcionalidades para adicionar, 
editar e excluir pedidos.


Tabela de Conteúdos
- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Pré-requisitos
- Instalação
- Uso
- Estrutura de Arquivos
- Endpoints da API
- Licença


# Visão Geral
O sistema permite que usuários possam gerenciar pedidos de forma intuitiva e eficiente. Com ele, é possível:

- Cadastrar novos pedidos.
- Atualizar informações dos pedidos existentes.
- Excluir pedidos indesejados.
- Visualizar a lista de pedidos em uma interface amigável.
- O objetivo principal é demonstrar a integração entre o FrontEnd (React) e o BackEnd (Node.js com PostgreSQL).

# Funcionalidades
- Adicionar Pedidos: Insira dados como vendedor, produto, quantidade e status.
- Editar Pedidos: Atualize as informações dos pedidos diretamente na interface.
- Excluir Pedidos: Remova pedidos da lista com facilidade.
- Interface Responsiva: Totalmente adaptada para dispositivos móveis e desktops.

# Tecnologias Utilizadas
- FrontEnd<br>
React com Vite: Construção e organização da interface.<br>
TailwindCSS: Estilização rápida e responsiva.<br>
Shadcn: Gerenciamento de modais e componentes UI avançados.<br>

- BackEnd<br>
Node.js com Express: Servidor e API RESTful.<br>
PostgreSQL: Banco de dados relacional para armazenamento de informações.<br>

- Outras Ferramentas<br>
Axios: Comunicação entre FrontEnd e BackEnd.<br>
Radix UI: Gerenciamento de acessibilidade e modais.<br>
Biome: Padrões de código.<br>

# Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:<br>
Node.js (versão 16 ou superior)<br>
PostgreSQL (versão 14 ou superior)<br>
Git<br>

# Instalação
1. Clone o Repositório
```
git clone https://github.com/altcomvis/scenario1.git
cd scenario1
```
2. Configuração do BackEnd<br><br>
Acesse o diretório do BackEnd:
```
  cd backend
```
Instale as dependências:
```
npm install
```
Crie o banco de dados no PostgreSQL:
```
CREATE DATABASE pedidos;
```

Configure o arquivo .env:
```
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=postgres
  DB_PASSWORD=sua_senha
  DB_NAME=pedidos
```
Inicie o servidor:
```
npm run dev
```

3. Configuração do FrontEnd<br><br>
Acesse o diretório do FrontEnd:
```
cd frontend
```

Instale as dependências:
```
npm install
```

Configure o arquivo .env:
```
VITE_API_URL=http://localhost:3000
```

Inicie o FrontEnd:
```
npm run dev
```

# Uso
Acesse o FrontEnd pelo navegador:<br>
• URL: http://localhost:5173<br>
• Adicione, edite ou exclua pedidos diretamente pela interface.<br>

Estrutura de Arquivos:
```
├── backend
│   ├── db.js                     # Configuração da conexão com PostgreSQL
│   ├── server.js                 # Arquivo principal do servidor
│   ├── routes
│   │   └── pedidos.js            # Endpoints relacionados aos pedidos
│   └── .env                      # Configurações sensíveis do banco
├── frontend
│   ├── src
│   │   ├── App.tsx               # Componente principal
│   │   ├── components
│   │   │   ├── add-pedido.tsx     # Formulário de adição
│   │   │   ├── edit-pedido.tsx    # Formulário de edição
│   │   └── index.css              # Estilização global
│   └── .env                       # Configurações de ambiente do FrontEnd
```
# Endpoints da API
1. Listar Pedidos<br>
• Método: GET<br>
• URL: /pedidos<br>
• Descrição: Retorna todos os pedidos cadastrados.<br>

2. Adicionar Pedido<br>
• Método: POST<br>
URL: 
```
/pedidos
```
Body:
```
{
  "vendedor": "João",
  "produto": "Caneta",
  "quantidade": 10,
  "status": "pendente"
}
```

3. Editar Pedido<br>
• Método: PUT<br>
URL: 
```
/pedidos/:id
```
Body:
```
{
  "vendedor": "Maria",
  "produto": "Lápis",
  "quantidade": 20,
  "status": "aprovado"
}
```

4. Excluir Pedido<br>
• Método: DELETE<br>
URL: 
```
/pedidos/:id
```
# Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

