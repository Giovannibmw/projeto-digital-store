# Digital Store

Este é um projeto de e-commerce desenvolvido com React, React Router e Tailwind CSS que simula uma loja on line focada na venda de produtos de moda, especialmente tênis e acessórios.

## Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **Tailwind CSS**: Utilizado para estilização rápida e responsiva.
- **Axios**: Para requisições HTTP (exemplo em `/src/services/api.js`).
- **React Icons**: Ícones SVG para interface.
- **LocalStorage**: Persistência do carrinho de compras no navegador.

## Funcionalidades

- **Home Page**: Destaques, categorias e produtos em promoção.
- **Listagem de Produtos**: Filtros por categoria, ordenação por preço, busca por nome/categoria.
- **Visualização de Produto**: Página detalhada com seleção de tamanho/cor e botão de adicionar ao carrinho.
- **Carrinho de Compras**: Adição, remoção e visualização dos itens, simulação de finalização de pedido.
- **Categorias**: Página dedicada para navegação por categorias.
- **Persistência do Carrinho**: Itens do carrinho são salvos no LocalStorage.
- **Responsividade**: Layout adaptado para dispositivos móveis e desktop.

## Estrutura de Pastas

- `src/components`: Componentes reutilizáveis (cards, header, footer, etc).
- `src/pages`: Páginas principais do app (home, produtos, categorias, pedidos).
- `src/contexts`: Contexto global para o carrinho.
- `src/data`: Dados mockados dos produtos.
- `src/services`: Configuração de API (exemplo para integração futura).
- `public/`: Imagens e assets estáticos.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse em [http://localhost:5173](http://localhost:5173)


Desenvolvido por Giovanni Barros Moreira