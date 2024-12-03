# Queque Cupcakes - Aplicação E-Commerce
# Descrição do Projeto
O Queque Cupcakes é uma aplicação de e-commerce desenvolvida para simular o fluxo de compra de produtos (cupcakes) em um ambiente digital. Este projeto tem como objetivo oferecer uma experiência intuitiva e funcional para o usuário, permitindo selecionar produtos, adicioná-los ao carrinho, realizar o pagamento e definir uma opção de entrega.<br><br>

A aplicação foi construída com foco em boas práticas de desenvolvimento web moderno, utilizando ferramentas, bibliotecas e frameworks atuais para um design responsivo e interatividade avançada.<br>

# Funcionalidades
- Página de Galeria:<br>
Exibe uma lista de produtos (cupcakes) com seus respectivos preços, imagens e descrições.<br>
Opção de adicionar produtos ao carrinho.<br>
- Carrinho de Compras:<br>
Visualização dos itens selecionados.<br>
Remoção de itens do carrinho.<br>
Cálculo automático do valor total.<br>
- Pagamento:<br>
Formulário para pagamento com cartão.<br>
Opção de pagamento via PIX com exibição de QR Code.<br>
Dialogs (modais) informativos sobre o status do pagamento.<br>
- Entrega:<br>
Escolha do método de entrega (PAC, Sedex Expressa ou Sedex 10).<br>
Cálculo automático do valor de entrega.<br>
Confirmação de entrega com modais interativos.<br>
- Fluxo Completo:<br>
Navegação intuitiva entre as etapas: Galeria → Pagamento → Entrega.<br>
Retorno à página inicial ao finalizar o processo.<br>

# Tecnologias Utilizadas
- Frontend<br>
React.js com TypeScript: Framework para criação de interfaces modernas e reativas.<br>
ShadCN: Biblioteca para componentes UI reutilizáveis.<br>
Axios: Para comunicação com APIs externas.<br>
TailwindCSS: Estilização responsiva e altamente customizável.<br>
- Componentes<br>
Dialogs (ShadCN): Para exibição de modais interativos.<br>
Button, Input (ShadCN): Componentes reutilizáveis para interações.<br>
RadioGroup: Escolha de opções no fluxo de entrega.<br>
# Instalação e Execução
- Pré-requisitos<br>
Node.js versão 18.x ou superior.<br>
Gerenciador de pacotes: NPM ou Yarn.<br>
- Passos<br>
Clone o repositório:
```
git clone https://github.com/altcomvis/scenario1.git
```
Entre no diretório do projeto:
```
cd scenario1
```
Instale as dependências:
```
npm install
```
Configure a URL da API:<br>
Renomeie o arquivo .env.example para .env.<br>
Substitua o valor da variável VITE_API_URL pela URL da sua API.<br>
Execute o projeto:
```
npm run dev
```
# Estrutura de Diretórios
```
src/
├── components/
│   ├── Header.tsx
│   ├── Galeria.tsx
│   ├── Pagamento.tsx
│   ├── Entrega.tsx
│   ├── Resumo.tsx
│   └── ui/         # Componentes reutilizáveis do ShadCN
├── assets/         # Imagens e recursos estáticos
├── App.tsx         # Arquivo principal
├── index.tsx       # Ponto de entrada da aplicação
```
# Fluxo da Aplicação
Galeria: O usuário visualiza os produtos e adiciona ao carrinho.<br>
Carrinho: Ao clicar no ícone do carrinho, o usuário pode revisar os itens selecionados.<br>
Pagamento: O usuário escolhe entre pagar com cartão ou PIX. Modais interativos confirmam o pagamento.<br>
Entrega: O usuário seleciona o método de entrega e conclui o pedido.<br>
Finalização: A aplicação retorna à Galeria após a confirmação.<br>

# Contribuição
Faça um fork do projeto.<br>
Crie um branch para sua feature: git checkout -b minha-feature.<br>
Faça as alterações e adicione commits: git commit -m 'Minha nova feature'.<br>
Envie o branch para o repositório: git push origin minha-feature.<br>
Abra um Pull Request explicando as mudanças.<br>

# Licença
Este projeto está licenciado sob a MIT License.

# Autor
Desenvolvido por Allan Teixeira.<br>
Entre em contato para dúvidas ou colaborações! 😊
