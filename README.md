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
- FrontEnd
• React com Vite: Construção e organização da interface.
• TailwindCSS: Estilização rápida e responsiva.
• Shadcn: Gerenciamento de modais e componentes UI avançados.

- BackEnd
• Node.js com Express: Servidor e API RESTful.
• PostgreSQL: Banco de dados relacional para armazenamento de informações.

- Outras Ferramentas
• Axios: Comunicação entre FrontEnd e BackEnd.
• Radix UI: Gerenciamento de acessibilidade e modais.
• Biome: Padrões de código.

# Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
• Node.js (versão 16 ou superior)
• PostgreSQL (versão 14 ou superior)
• Git

# Instalação
1. Clone o Repositório
```
git clone https://github.com/altcomvis/scenario1.git
  cd scenario1
```
2. Configuração do BackEnd
- Acesse o diretório do BackEnd:
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

3. Configuração do FrontEnd
- Acesse o diretório do FrontEnd:
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
Acesse o FrontEnd pelo navegador:
• URL: http://localhost:5173
• Adicione, edite ou exclua pedidos diretamente pela interface.

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
1. Listar Pedidos
• Método: GET
• URL: /pedidos
• Descrição: Retorna todos os pedidos cadastrados.

2. Adicionar Pedido
• Método: POST
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

3. Editar Pedido
• Método: PUT
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

4. Excluir Pedido
• Método: DELETE
URL: 
```
/pedidos/:id
```
# Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

