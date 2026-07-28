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

Durante o desenvolvimento do projeto, as principais dificuldades enfrentadas pelo grupo foram:

1. **Configuração da Navegação e Parâmetros**: Configurar o fluxo de navegação baseado em pilha (Stack Navigation) e garantir a passagem correta do objeto de dados do ponto turístico selecionado da tela inicial (`Home`) para a tela de detalhes (`Details`), sendo recuperado de forma consistente via `route.params`.
2. **Filtragem e Desempenho Reativos**: Implementar a busca reativa simultaneamente por três critérios diferentes (nome, categoria e bairro) e assegurar que a interface respondesse de forma otimizada usando `useMemo`, inclusive tratando o estado vazio da lista de forma elegante e amigável.
3. **Estilização e Consistência Visual**: Adaptar a estilização para criar uma experiência premium em dispositivos móveis, mantendo a harmonia visual em termos de tipografia, sombras e cores (tema terracota).

## Divisão das atividades

A divisão de tarefas no grupo ocorreu da seguinte forma:

*   **Debora Gomes**: Criação do arquivo de dados centralizado (`places.js`), pesquisa das informações históricas e turísticas reais de Garanhuns e preenchimento detalhado dos campos, incluindo o campo personalizado "Entrada".
*   **Jamille Galdino**: Definição da identidade visual e paleta de cores personalizada, estilização dos cartões interativos (`PlaceCard`) com efeitos visuais de toque e diagramação das caixas de informação na tela de detalhes.
*   **Luana Bezerra**: Configuração do roteamento e navegação com React Navigation em `App.js`, estruturação lógica das telas `Home` e `Details`, e implementação da barra de pesquisa com busca reativa.
