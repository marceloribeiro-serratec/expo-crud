# Expo CRUD

Aplicativo mobile desenvolvido com React Native e Expo para demonstrar um CRUD completo de itens, com navegação entre telas, formulário com modo de edição e listagem dinâmica com ações de editar e excluir.

O projeto foi pensado para ser uma vitrine técnica objetiva: estrutura simples, componentes reutilizáveis e fluxo de uso claro, sem depender de backend ou bibliotecas desnecessárias.

## Visão geral

A aplicação começa em uma tela de boas-vindas e leva o usuário para a área principal de gerenciamento. No CRUD, é possível cadastrar itens com nome e descrição, atualizar registros existentes e remover itens da lista.

## Destaques técnicos

- Construído com Expo e React Native, priorizando produtividade e portabilidade.
- Navegação implementada com React Navigation e stack navigator.
- Componentização do fluxo em telas e componentes reutilizáveis.
- Formulário com estado controlado e sincronização automática ao entrar e sair do modo de edição.
- Lista renderizada com `FlatList`, preparada para crescimento sem perder organização.
- Estrutura com TypeScript, trazendo tipagem para o modelo de item e para os eventos principais.
- Interface limpa e direta, com foco em usabilidade e leitura rápida.

## Stack utilizada

- Expo 54
- React 19
- React Native 0.81
- TypeScript
- React Navigation

## Funcionalidades

- Tela inicial com chamada para o fluxo principal.
- Cadastro de itens com nome obrigatório e descrição opcional.
- Edição de itens já cadastrados.
- Exclusão de itens da lista.
- Estados de formulário para criação e edição.
- Feedback visual quando não há itens cadastrados.
- Botões reutilizáveis com variações de estilo.

## Estrutura do projeto

```text
app.json
App.tsx
index.ts
src/
  components/
    CustomButton.tsx
    ItemCard.tsx
    ItemForm.tsx
  screens/
    CrudScreen.tsx
    WelcomeScreen.tsx
  types/
    index.ts
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Se preferir abrir diretamente em uma plataforma específica:

```bash
npm run android
npm run ios
npm run web
```

## Aprendizados do projeto

Este projeto é um bom exemplo de domínio dos fundamentos de front-end mobile, porque reúne organização de componentes, gerenciamento de estado, navegação entre telas e manipulação de listas em um fluxo real de aplicação.

Também evidencia uma base sólida para evoluir o app com persistência de dados, validações mais robustas e integração com API no futuro.

## Próximos passos possíveis

- Persistir os itens em armazenamento local.
- Conectar o CRUD a uma API.
- Adicionar validação de formulário mais completa.
- Incluir testes para componentes e fluxos principais.

## Autor

Projeto desenvolvido para fins de estudo e demonstração de habilidades em desenvolvimento mobile com React Native e Expo.
