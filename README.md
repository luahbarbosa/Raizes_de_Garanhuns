# Raízes de Garanhuns

Projeto final da disciplina de Programação em Dispositivos Móveis.

## Integrantes

- Debora Gomes
- Jamille Galdino
- Luana Bezerra

## Descrição

O aplicativo apresenta um roteiro afetivo com locais turísticos, culturais,
naturais e religiosos de Garanhuns. O usuário pode pesquisar os locais por
nome, categoria ou bairro e abrir uma tela com informações detalhadas de
cada um, incluindo endereço, horário de funcionamento, condições de entrada
e informações de acessibilidade.

## Funcionalidades

- Listagem de locais com `FlatList`
- Pesquisa por nome, categoria ou bairro
- Filtro por categorias (Tudo, História, Natureza, Cultura, Gastronomia, Religião)
- Navegação entre telas (Home → Details)
- Passagem e recuperação de parâmetros entre telas
- Tela de detalhes com informações completas via `InfoCard`
- Indicador de carregamento (`ActivityIndicator`)
- Tratamento de lista vazia (`EmptyState`)
- Campos personalizados: Acessibilidade e Entrada

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
│   ├── CategoryFilter
│   ├── EmptyState
│   ├── InfoCard
│   ├── Loading
│   ├── PlaceCard
│   └── SearchBar
├── constants
│   └── categories.js
├── data
│   └── places.js
├── navigation
│   └── index.js
└── screens
    ├── Details
    └── Home
```

## Dificuldades encontradas

- Organizar o sistema de categorias com cores dinâmicas por categoria
- Implementar o layout da tela de detalhes com Hero image e gradiente
- Integrar filtro de categorias com pesquisa por texto simultaneamente

## Divisão das atividades

- Debora Gomes: Estrutura do projeto, dados e navegação
- Jamille Galdino: Tela Home, SearchBar e CategoryFilter
- Luana Bezerra: Tela Details, InfoCard e componentes auxiliares
