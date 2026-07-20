# Conheça Garanhuns

Projeto final da disciplina de Programação em Dispositivos Móveis.

## Integrantes

- Debora Gomes
- Jamille Galdino
- Luana Bezerra

## Descrição

O aplicativo apresenta um roteiro afetivo com locais turísticos, culturais,
naturais e religiosos de Garanhuns. O usuário pode pesquisar os locais por
nome, categoria ou bairro e abrir uma tela com informações detalhadas de
cada um, incluindo endereço, horário de funcionamento e condições de entrada.

## Funcionalidades

- Listagem de locais com `FlatList`
- Pesquisa por nome, categoria ou bairro
- Navegação entre telas (Home → Details)
- Passagem e recuperação de parâmetros entre telas
- Tela de detalhes com informações completas
- Indicador de carregamento (`ActivityIndicator`)
- Tratamento de lista vazia
- Campo personalizado "Entrada" (`admission`)

## Tecnologias

- JavaScript
- React Native
- Expo
- React Navigation

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npx expo start
```

3. Abra no Expo Go, em um emulador/simulador, ou pressione `w` para
   executar no navegador.

## Estrutura

```
src
├── components
│   └── PlaceCard
├── data
│   └── places.js
└── pages
    ├── Home
    └── Details
```

## Dificuldades encontradas

_(preencher com as dificuldades reais do grupo durante o desenvolvimento)_

## Divisão das atividades

_(preencher com a divisão de tarefas entre os integrantes)_
