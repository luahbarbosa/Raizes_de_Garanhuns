# Instruções para realização do Projeto Final

## Sumário

- [Organização do grupo](#organização-do-grupo)
- [Requisitos obrigatórios](#requisitos-obrigatórios)
- [Personalização](#personalização)
- [Entrega](#entrega)
- [Avaliação](#avaliação)
- [Orientação final](#orientação-final)
- [Projeto Final — Programação em Dispositivos Móveis](#projeto-final--programação-em-dispositivos-móveis)
  - [1. Descrição do projeto](#1-descrição-do-projeto)
  - [2. Objetivos de aprendizagem](#2-objetivos-de-aprendizagem)
  - [3. Requisitos funcionais](#3-requisitos-funcionais)
  - [4. Requisitos não funcionais](#4-requisitos-não-funcionais)
  - [5. Resultado esperado](#5-resultado-esperado)
  - [6. Criação do projeto](#6-criação-do-projeto)
  - [7. Organização das pastas](#7-organização-das-pastas)
  - [8. Cadastro dos dados](#8-cadastro-dos-dados)
  - [9. Configuração da navegação](#9-configuração-da-navegação)
  - [10. Construção do componente de cartão](#10-construção-do-componente-de-cartão)
  - [11. Construção da tela inicial](#11-construção-da-tela-inicial)
  - [12. Entendendo a tela inicial](#12-entendendo-a-tela-inicial)
  - [13. Construção da tela de detalhes](#13-construção-da-tela-de-detalhes)
  - [14. Recuperação dos parâmetros](#14-recuperação-dos-parâmetros)
  - [15. Execução e testes](#15-execução-e-testes)
  - [16. Erros comuns e soluções](#16-erros-comuns-e-soluções)
  - [17. Requisitos mínimos para entrega](#17-requisitos-mínimos-para-entrega)
  - [18. Personalização obrigatória](#18-personalização-obrigatória)
  - [19. Entregáveis](#19-entregáveis)
  - [20. Modelo de README](#20-modelo-de-readme)
  - [21. Critérios de avaliação](#21-critérios-de-avaliação)
  - [22. Descontos](#22-descontos)
  - [23. Desafio opcional](#23-desafio-opcional)
  - [24. Checklist final do estudante](#24-checklist-final-do-estudante)

---

O Projeto Final deverá ser desenvolvido, preferencialmente com React Native e Expo.

Cada grupo deverá construir o aplicativo apresentado neste material, seguindo as etapas, os códigos e as orientações descritas no projeto.

O objetivo do trabalho é consolidar os conhecimentos estudados na disciplina, especialmente:

- Criação de interfaces com React Native
- Uso de componentes
- Utilização de estados
- Listagem com FlatList
- Pesquisa e filtragem
- Navegação entre telas
- Passagem de parâmetros
- Estilização e organização do projeto

## Organização do grupo

Todos os integrantes deverão participar do desenvolvimento.

O grupo poderá dividir as atividades entre:

- Configuração inicial do projeto
- Criação da tela principal
- Desenvolvimento dos componentes
- Implementação da pesquisa
- Construção da tela de detalhes
- Testes, documentação e apresentação

Mesmo com a divisão das tarefas, todos deverão conhecer o funcionamento geral do aplicativo.

## Requisitos obrigatórios

O aplicativo deverá apresentar:

- Tela inicial
- Lista de locais utilizando FlatList
- Campo de pesquisa
- Indicador de carregamento
- Mensagem quando nenhum resultado for encontrado
- Componente reutilizável para os cartões
- Navegação para uma tela de detalhes
- Passagem de dados entre as telas
- Pelo menos oito locais cadastrados
- Personalização visual
- Pelo menos um novo campo criado pelo grupo

O novo campo deverá aparecer na tela de detalhes.

## Personalização

O projeto não deverá ser entregue exatamente igual ao exemplo.

Cada grupo deverá:

- Escolher um nome para o aplicativo
- Alterar cores e elementos visuais
- Modificar o texto de apresentação
- Cadastrar novos locais
- Utilizar imagens adequadas
- Adicionar uma informação própria, como acessibilidade, entrada, telefone, estacionamento ou horário recomendado

## Entrega

O grupo deverá entregar:

- Pasta do projeto compactada em .zip
- Link do repositório no GitHub
- Arquivo README.md
- Vídeo curto demonstrando o funcionamento do aplicativo
- Identificação dos integrantes e descrição das atividades realizadas

A pasta node_modules não deverá ser incluída no arquivo compactado.

## Avaliação

A avaliação considerará:

- Funcionamento do aplicativo
- Organização do código
- Uso correto dos conteúdos estudados
- Navegação entre as telas
- Pesquisa e listagem
- Tela de detalhes
- Personalização
- Participação dos integrantes
- Apresentação e documentação

A nota poderá ser diferenciada entre os integrantes caso seja constatada falta de participação ou desconhecimento do projeto.

## Orientação final

Os códigos apresentados no material poderão ser utilizados como base, mas o grupo deverá compreender, adaptar, testar e personalizar a solução.

Todos os integrantes poderão ser solicitados a explicar partes do código e demonstrar o funcionamento do aplicativo durante a avaliação.

---

# Projeto Final — Programação em Dispositivos Móveis

## Aplicativo "Conheça Garanhuns"

Com base nos conteúdos apresentados no material, o projeto final trabalhará os mesmos fundamentos utilizados na construção do aplicativo de blog: organização em componentes, estados, carregamento de dados, FlatList, navegação entre telas, passagem de parâmetros, estilização e tela de detalhes.

O projeto proposto é simples, possui escopo bem delimitado e pode ser desenvolvido integralmente pelos estudantes sem a necessidade de construção de uma API própria.

## 1. Descrição do projeto

O estudante deverá desenvolver um aplicativo móvel chamado **Conheça Garanhuns**.

O aplicativo apresentará uma lista de pontos turísticos, culturais ou naturais da cidade de Garanhuns. Ao selecionar um item da lista, o usuário será direcionado para uma segunda tela, contendo informações detalhadas sobre o local.

O aplicativo possuirá duas telas principais:

### Tela inicial

- Título do aplicativo
- Campo de pesquisa
- Lista dos locais cadastrados
- Imagem, nome, categoria e pequeno resumo
- Indicador de carregamento
- Mensagem quando nenhum local for encontrado

### Tela de detalhes

- Imagem do local
- Nome
- Categoria
- Endereço
- Horário de funcionamento
- Descrição completa
- Botão para voltar à tela inicial

## 2. Objetivos de aprendizagem

Ao concluir o projeto, o estudante deverá demonstrar que sabe:

- Criar um projeto com React Native e Expo
- Organizar um aplicativo em pastas
- Criar componentes reutilizáveis
- Utilizar View, Text, Image, FlatList, TextInput, Pressable e ActivityIndicator
- Trabalhar com os Hooks useState, useEffect e useMemo
- Exibir uma coleção de objetos em uma lista
- Implementar pesquisa e filtragem
- Configurar navegação entre telas
- Enviar dados de uma tela para outra
- Recuperar parâmetros recebidos pela rota
- Aplicar estilos com StyleSheet
- Tratar estados de carregamento e lista vazia

## 3. Requisitos funcionais

### RF01 — Listar locais

O aplicativo deverá apresentar uma lista de locais turísticos, culturais ou naturais.

### RF02 — Exibir informações resumidas

Cada item da lista deverá mostrar:

- Imagem
- Nome
- Categoria
- Resumo
- Bairro ou endereço resumido

### RF03 — Pesquisar locais

O usuário deverá conseguir pesquisar pelo nome, categoria ou bairro.

### RF04 — Exibir detalhes

Ao tocar em um item, o aplicativo deverá abrir uma nova tela contendo todas as informações do local.

### RF05 — Informar carregamento

Enquanto os dados estiverem sendo carregados, o aplicativo deverá mostrar um ActivityIndicator.

### RF06 — Informar pesquisa sem resultado

Caso a pesquisa não encontre nenhum local, o aplicativo deverá apresentar uma mensagem informativa.

### RF07 — Permitir retorno

Na tela de detalhes, o usuário deverá conseguir retornar à tela inicial.

## 4. Requisitos não funcionais

- O projeto deverá ser desenvolvido com React Native e Expo
- O código deverá ser organizado em componentes, páginas e arquivos de dados
- Os nomes de variáveis e funções deverão ser compreensíveis
- O aplicativo deverá funcionar sem uma API externa
- A interface deverá ser legível e adequada para dispositivos móveis
- O aplicativo não deverá apresentar erros no terminal durante sua execução

## 5. Resultado esperado

A tela inicial deverá apresentar aproximadamente esta organização:

```
┌─────────────────────────────────┐
│ CONHEÇA GARANHUNS               │
│ Descubra lugares da cidade      │
│                                 │
│ [ Pesquisar um local...       ] │
│                                 │
│ ┌─────────────────────────────┐ │
│ │          IMAGEM             │ │
│ │ Relógio das Flores          │ │
│ │ Ponto turístico             │ │
│ │ Heliópolis                  │ │
│ │ Conheça um dos principais...│ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │          IMAGEM             │ │
│ │ Parque Euclides Dourado     │ │
│ │ Parque urbano               │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

A tela de detalhes deverá ter esta organização:

```
┌─────────────────────────────────┐
│ ← Detalhes do local             │
│                                 │
│             IMAGEM              │
│                                 │
│ Relógio das Flores              │
│ Ponto turístico                 │
│                                 │
│ Endereço                        │
│ Praça Tavares Correia           │
│                                 │
│ Horário                         │
│ Espaço público                  │
│                                 │
│ Sobre o local                   │
│ Descrição completa...           │
└─────────────────────────────────┘
```

## 6. Criação do projeto

Abra o terminal e execute:

```bash
npx create-expo-app ConhecaGaranhuns
```

Entre na pasta criada:

```bash
cd ConhecaGaranhuns
```

Instale as bibliotecas de navegação:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

Instale as dependências utilizadas pela navegação:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

Execute o projeto:

```bash
npx expo start
```

No terminal será apresentado um QR Code. O estudante poderá executar o projeto:

- No aplicativo Expo Go
- Em um emulador Android
- Em um simulador iOS
- No navegador, pressionando a tecla **w**

## 7. Organização das pastas

Na raiz do projeto, crie a seguinte estrutura:

```
ConhecaGaranhuns
│
├── App.js
│
└── src
    ├── components
    │   └── PlaceCard
    │       └── index.js
    │
    ├── data
    │   └── places.js
    │
    └── pages
        ├── Home
        │   └── index.js
        │
        └── Details
            └── index.js
```

A função de cada pasta:

| Pasta | Função |
|-------|--------|
| components | Guardar componentes reutilizáveis |
| data | Guardar os dados utilizados pelo aplicativo |
| pages | Guardar as telas |
| Home | Tela com pesquisa e listagem |
| Details | Tela com todas as informações do local |

## 8. Cadastro dos dados

Crie o arquivo: `src/data/places.js`

Adicione o código:

```javascript
const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: 'Ponto turístico',
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
    openingHours: 'Espaço público com visitação livre',
    image: 'https://picsum.photos/seed/relogio-flores/900/600',
    summary:
      'Um dos principais cartões-postais de Garanhuns, localizado no bairro de Heliópolis.',
    description:
      'O Relógio das Flores é um dos locais mais conhecidos de Garanhuns. O espaço combina jardinagem ornamental, paisagismo e um relógio instalado em uma estrutura decorada com flores. É bastante visitado por moradores e turistas, principalmente durante os eventos realizados na cidade.'
  },
  {
    id: '2',
    name: 'Parque Euclides Dourado',
    category: 'Parque urbano',
    neighborhood: 'Heliópolis',
    address: 'Avenida Júlio Brasileiro, Heliópolis, Garanhuns',
    openingHours: 'Consulte os horários definidos pela administração local',
    image: 'https://picsum.photos/seed/parque-euclides/900/600',
    summary:
      'Área verde destinada à convivência, caminhada, lazer e atividades esportivas.',
    description:
      'O Parque Euclides Dourado é uma importante área de lazer da cidade. O local possui espaços arborizados, pistas para caminhada, equipamentos esportivos e áreas utilizadas para atividades culturais e recreativas.'
  },
  {
    id: '3',
    name: 'Parque Ruber van der Linden',
    category: 'Parque natural',
    neighborhood: 'Centro',
    address: 'Rua Manoel Clemente, Centro, Garanhuns',
    openingHours: 'Consulte os horários definidos pela administração local',
    image: 'https://picsum.photos/seed/pau-pombo/900/600',
    summary:
      'Parque conhecido popularmente como Pau Pombo, com vegetação e espaços de contemplação.',
    description:
      'O Parque Ruber van der Linden, conhecido como Pau Pombo, é uma área de preservação localizada na região central de Garanhuns. O ambiente possui vegetação, trilhas, espaços para descanso e contato com a natureza.'
  },
  {
    id: '4',
    name: 'Castelo de João Capão',
    category: 'Construção histórica',
    neighborhood: 'Heliópolis',
    address: 'Avenida Caruaru, Heliópolis, Garanhuns',
    openingHours: 'Visitação conforme disponibilidade do espaço',
    image: 'https://picsum.photos/seed/castelo-capao/900/600',
    summary:
      'Construção singular que se tornou uma curiosidade arquitetônica e cultural da cidade.',
    description:
      'O Castelo de João Capão é uma construção idealizada por João Ferreira, conhecido como João Capão. Sua arquitetura inspirada em castelos tornou o imóvel uma atração curiosa e bastante conhecida entre os visitantes.'
  },
  {
    id: '5',
    name: 'Centro Cultural Alfredo Leite Cavalcanti',
    category: 'Cultura',
    neighborhood: 'Centro',
    address: 'Praça Dom Moura, Centro, Garanhuns',
    openingHours: 'Conforme a programação cultural',
    image: 'https://picsum.photos/seed/centro-cultural/900/600',
    summary:
      'Espaço destinado à realização de exposições, apresentações e atividades culturais.',
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O espaço recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: 'Turismo religioso',
    neighborhood: 'Magano',
    address: 'Região do Magano, Garanhuns',
    openingHours: 'Visitação conforme as atividades religiosas',
    image: 'https://picsum.photos/seed/mae-rainha/900/600',
    summary:
      'Local de visitação religiosa situado em uma área elevada da cidade.',
    description:
      'O Santuário Mãe Rainha é um espaço de oração, contemplação e turismo religioso. Sua localização também proporciona uma visão privilegiada de diferentes áreas da cidade.'
  }
];

export default places;
```

### Entendendo o arquivo

Cada objeto representa um local. Exemplo:

```javascript
{
  id: '1',
  name: 'Relógio das Flores',
  category: 'Ponto turístico'
}
```

- O campo `id` identifica o item de maneira única. Ele será utilizado pelo FlatList.
- O campo `name` guarda o nome do local.
- O campo `image` guarda o endereço de uma imagem da internet.
- O campo `description` será apresentado apenas na tela de detalhes.

## 9. Configuração da navegação

Substitua o conteúdo do arquivo `App.js` pelo código abaixo:

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Details from './src/pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#174d38'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Conheça Garanhuns'
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes do local'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Explicação

O `NavigationContainer` controla a navegação de todo o aplicativo:

```javascript
<NavigationContainer>
```

O `Stack.Navigator` representa a pilha de telas:

```javascript
<Stack.Navigator>
```

Cada `Stack.Screen` registra uma tela:

```javascript
<Stack.Screen
  name="Home"
  component={Home}
/>
```

O nome usado na navegação deverá ser exatamente o mesmo informado em `name`. Portanto, para abrir a tela de detalhes, será utilizado:

```javascript
navigation.navigate('Details');
```

## 10. Construção do componente de cartão

Crie o arquivo: `src/components/PlaceCard/index.js`

Adicione o seguinte código:

```javascript
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function PlaceCard({ place, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{place.category}</Text>
        </View>

        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.neighborhood}>
          Bairro: {place.neighborhood}
        </Text>

        <Text style={styles.summary} numberOfLines={3}>
          {place.summary}
        </Text>

        <Text style={styles.detailsText}>
          Toque para ver os detalhes
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4
  },

  cardPressed: {
    opacity: 0.75
  },

  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#d9d9d9'
  },

  content: {
    padding: 16
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#dcefe5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 10
  },

  category: {
    color: '#174d38',
    fontSize: 12,
    fontWeight: '700'
  },

  name: {
    color: '#222222',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5
  },

  neighborhood: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 10
  },

  summary: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 22
  },

  detailsText: {
    color: '#174d38',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14
  }
});
```

### Por que criar um componente?

Sem o componente, todo o código do cartão teria que ser escrito dentro do FlatList. O componente permite utilizar:

```javascript
<PlaceCard
  place={item}
  onPress={() => abrirDetalhes(item)}
/>
```

Assim, a página fica menor e mais organizada.

## 11. Construção da tela inicial

Crie o arquivo: `src/pages/Home/index.js`

Adicione o código:

```javascript
import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import PlaceCard from '../../components/PlaceCard';
import placesData from '../../data/places';

export default function Home({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function loadPlaces() {
    try {
      setIsLoading(true);

      /*
       * O setTimeout simula o tempo necessário para carregar
       * informações de uma API ou de um banco de dados.
       */
      setTimeout(() => {
        setPlaces(placesData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erro ao carregar os locais:', error);

      setPlaces([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPlaces();
  }, []);

  const filteredPlaces = useMemo(() => {
    const normalizedSearch = searchText
      .trim()
      .toLowerCase();

    if (normalizedSearch === '') {
      return places;
    }

    return places.filter((place) => {
      const name = place.name.toLowerCase();
      const category = place.category.toLowerCase();
      const neighborhood = place.neighborhood.toLowerCase();

      return (
        name.includes(normalizedSearch) ||
        category.includes(normalizedSearch) ||
        neighborhood.includes(normalizedSearch)
      );
    });
  }, [places, searchText]);

  function openDetails(place) {
    navigation.navigate('Details', {
      place: place
    });
  }

  function renderPlace({ item }) {
    return (
      <PlaceCard
        place={item}
        onPress={() => openDetails(item)}
      />
    );
  }

  function renderEmptyList() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          Nenhum local encontrado
        </Text>

        <Text style={styles.emptyMessage}>
          Verifique o texto pesquisado e tente novamente.
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#174d38"
        />

        <Text style={styles.loadingText}>
          Carregando locais...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.introduction}>
        <Text style={styles.title}>
          Descubra Garanhuns
        </Text>

        <Text style={styles.subtitle}>
          Conheça alguns dos espaços turísticos,
          culturais e naturais da cidade.
        </Text>
      </View>

      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Pesquisar por nome, categoria ou bairro"
        placeholderTextColor="#777777"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />

      <Text style={styles.resultText}>
        {filteredPlaces.length}{' '}
        {filteredPlaces.length === 1
          ? 'local encontrado'
          : 'locais encontrados'}
      </Text>

      <FlatList
        data={filteredPlaces}
        renderItem={renderPlace}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={
          filteredPlaces.length === 0
            ? styles.emptyList
            : styles.list
        }
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f2',
    paddingHorizontal: 16
  },

  introduction: {
    paddingTop: 20,
    paddingBottom: 16
  },

  title: {
    color: '#174d38',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6
  },

  subtitle: {
    color: '#4f5b55',
    fontSize: 15,
    lineHeight: 22
  },

  input: {
    backgroundColor: '#ffffff',
    borderColor: '#bfd3c9',
    borderWidth: 1,
    borderRadius: 12,
    color: '#222222',
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 13
  },

  resultText: {
    color: '#5a655f',
    fontSize: 13,
    marginVertical: 12
  },

  list: {
    paddingBottom: 24
  },

  emptyList: {
    flexGrow: 1
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f4f2'
  },

  loadingText: {
    color: '#174d38',
    fontSize: 15,
    marginTop: 12
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },

  emptyTitle: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },

  emptyMessage: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center'
  }
});
```

## 12. Entendendo a tela inicial

### 12.1 Estados

O estado `places` armazena a lista:

```javascript
const [places, setPlaces] = useState([]);
```

O estado `searchText` armazena o que foi digitado:

```javascript
const [searchText, setSearchText] = useState('');
```

O estado `isLoading` informa se os dados estão sendo carregados:

```javascript
const [isLoading, setIsLoading] = useState(true);
```

### 12.2 Carregamento dos dados

A função atribui o conteúdo de `placesData` ao estado:

```javascript
setPlaces(placesData);
```

O `setTimeout` simula um carregamento:

```javascript
setTimeout(() => {
  setPlaces(placesData);
  setIsLoading(false);
}, 1000);
```

Em um aplicativo real, esse trecho poderia ser substituído por uma chamada com `fetch`.

### 12.3 useEffect

O `useEffect` executa `loadPlaces` quando a tela é carregada:

```javascript
useEffect(() => {
  loadPlaces();
}, []);
```

O array vazio indica que o código deverá ser executado apenas na primeira montagem da tela.

### 12.4 Pesquisa

A pesquisa compara o texto informado com:

- Nome
- Categoria
- Bairro

```javascript
return (
  name.includes(normalizedSearch) ||
  category.includes(normalizedSearch) ||
  neighborhood.includes(normalizedSearch)
);
```

### 12.5 FlatList

O `FlatList` recebe os dados filtrados:

```javascript
data={filteredPlaces}
```

A função responsável por mostrar cada item é:

```javascript
renderItem={renderPlace}
```

O identificador único é:

```javascript
keyExtractor={(item) => item.id}
```

A mensagem de lista vazia é indicada por:

```javascript
ListEmptyComponent={renderEmptyList}
```

### 12.6 Navegação

A função recebe o local selecionado:

```javascript
function openDetails(place) {
```

Em seguida, abre a tela `Details` e envia o objeto:

```javascript
navigation.navigate('Details', {
  place: place
});
```

Também seria possível utilizar a forma reduzida:

```javascript
navigation.navigate('Details', {
  place
});
```

## 13. Construção da tela de detalhes

Crie o arquivo: `src/pages/Details/index.js`

Adicione:

```javascript
import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Details({ route }) {
  const { place } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>
            {place.category}
          </Text>
        </View>

        <Text style={styles.name}>
          {place.name}
        </Text>

        <Text style={styles.neighborhood}>
          Bairro: {place.neighborhood}
        </Text>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            Endereço
          </Text>

          <Text style={styles.informationText}>
            {place.address}
          </Text>
        </View>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            Horário de funcionamento
          </Text>

          <Text style={styles.informationText}>
            {place.openingHours}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Sobre o local
        </Text>

        <Text style={styles.description}>
          {place.description}
        </Text>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>
            Observação
          </Text>

          <Text style={styles.warningText}>
            As informações apresentadas possuem finalidade
            educacional. Horários e condições de visitação
            devem ser confirmados antes da visita.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f2'
  },

  contentContainer: {
    paddingBottom: 30
  },

  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#d9d9d9'
  },

  content: {
    padding: 18
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#dcefe5',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginBottom: 12
  },

  category: {
    color: '#174d38',
    fontSize: 13,
    fontWeight: '700'
  },

  name: {
    color: '#222222',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 7
  },

  neighborhood: {
    color: '#666666',
    fontSize: 15,
    marginBottom: 22
  },

  informationBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12
  },

  informationTitle: {
    color: '#174d38',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },

  informationText: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 22
  },

  sectionTitle: {
    color: '#222222',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 10
  },

  description: {
    color: '#444444',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify'
  },

  warningBox: {
    backgroundColor: '#fff4cf',
    borderRadius: 12,
    marginTop: 22,
    padding: 15
  },

  warningTitle: {
    color: '#755b00',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },

  warningText: {
    color: '#5d4b0c',
    fontSize: 14,
    lineHeight: 21
  }
});
```

## 14. Recuperação dos parâmetros

Na tela inicial, o objeto foi enviado assim:

```javascript
navigation.navigate('Details', {
  place: place
});
```

Na tela de detalhes, ele é recuperado por meio de `route.params`:

```javascript
const { place } = route.params;
```

Depois disso, os campos podem ser utilizados normalmente:

```javascript
<Text>{place.name}</Text>
<Text>{place.address}</Text>
<Text>{place.description}</Text>
```

## 15. Execução e testes

No terminal, execute:

```bash
npx expo start
```

O estudante deverá realizar os testes abaixo.

### Teste 1 — Carregamento

Ao abrir o aplicativo, deverá aparecer:

```
Carregando locais...
```

Depois de aproximadamente um segundo, a lista deverá ser apresentada.

### Teste 2 — Listagem

A tela inicial deverá mostrar todos os locais cadastrados.

### Teste 3 — Pesquisa pelo nome

Digite:

```
Relógio
```

O aplicativo deverá mostrar o Relógio das Flores.

### Teste 4 — Pesquisa pela categoria

Digite:

```
Parque
```

O aplicativo deverá apresentar os itens classificados como parque.

### Teste 5 — Pesquisa pelo bairro

Digite:

```
Heliópolis
```

O aplicativo deverá apresentar os locais cadastrados nesse bairro.

### Teste 6 — Pesquisa sem resultado

Digite:

```
Aeroporto
```

O aplicativo deverá mostrar:

```
Nenhum local encontrado
```

### Teste 7 — Navegação

Toque em um cartão. A tela de detalhes deverá ser aberta.

### Teste 8 — Dados recebidos

Verifique se a tela de detalhes apresenta as informações correspondentes ao item selecionado.

### Teste 9 — Retorno

Utilize o botão de retorno do cabeçalho. A tela inicial deverá continuar funcionando normalmente.

## 16. Erros comuns e soluções

### Erro: módulo de navegação não encontrado

Mensagem semelhante a:

```
Unable to resolve module @react-navigation/native
```

**Solução:**

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

Depois, reinicie o projeto:

```bash
npx expo start -c
```

### Erro: caminho de importação incorreto

Verifique:

```javascript
import PlaceCard from '../../components/PlaceCard';
```

A estrutura deverá ser:

```
src
├── components
│   └── PlaceCard
│       └── index.js
└── pages
    └── Home
        └── index.js
```

Como o arquivo da tela está dentro de `src/pages/Home`, são necessários dois retornos `../../`.

### Erro: a tela de detalhes não abre

Confira se o nome registrado no `App.js` é:

```javascript
name="Details"
```

A navegação deverá usar exatamente o mesmo nome:

```javascript
navigation.navigate('Details', {
  place
});
```

`Details`, `details` e `Detalhes` são nomes diferentes.

### Erro: place está indefinido

Verifique se o objeto foi enviado:

```javascript
navigation.navigate('Details', {
  place
});
```

E recuperado:

```javascript
const { place } = route.params;
```

### Erro: imagens não aparecem

As imagens utilizadas são carregadas da internet. Confirme se:

- O dispositivo está conectado à internet
- O endereço está no campo `image`
- O código utiliza `source={{ uri: place.image }}`

Exemplo correto:

```javascript
<Image
  source={{ uri: place.image }}
  style={styles.image}
/>
```

### Erro: lista não aparece

Confirme se o `FlatList` recebeu:

```javascript
data={filteredPlaces}
```

E se os dados foram atribuídos ao estado:

```javascript
setPlaces(placesData);
```

### Erro: função executada imediatamente no onPress

Forma incorreta:

```javascript
onPress={openDetails(item)}
```

Essa forma executa a função durante a renderização.

Forma correta:

```javascript
onPress={() => openDetails(item)}
```

A função de seta aguarda o toque do usuário.

## 17. Requisitos mínimos para entrega

O projeto somente será considerado completo se possuir:

- Tela inicial
- Tela de detalhes
- Navegação funcionando
- Pelo menos seis locais cadastrados
- FlatList
- Componente reutilizável para os cartões
- Pesquisa por nome, categoria ou bairro
- Indicador de carregamento
- Mensagem de lista vazia
- Passagem de parâmetros entre as telas
- Estilização própria
- Código organizado em pastas
- Ausência de erros de execução

## 18. Personalização obrigatória

Os estudantes poderão utilizar o código fornecido como base, mas deverão realizar as seguintes modificações:

- Cadastrar pelo menos oito locais
- Substituir os textos de exemplo por informações pesquisadas pelo grupo
- Personalizar pelo menos:
  - Duas cores
  - Tamanho de um título
  - Formato dos cartões
  - Texto introdutório
- Adicionar pelo menos um novo campo aos objetos

Exemplos de novos campos:

```javascript
phone: '(87) 0000-0000'
accessibility: 'Possui acesso para pessoas com mobilidade reduzida'
admission: 'Entrada gratuita'
```

O novo campo deverá aparecer na tela de detalhes. Exemplo:

```javascript
<View style={styles.informationBox}>
  <Text style={styles.informationTitle}>
    Entrada
  </Text>

  <Text style={styles.informationText}>
    {place.admission}
  </Text>
</View>
```

## 19. Entregáveis

Cada estudante ou grupo deverá entregar:

- Pasta completa do projeto compactada em .zip
- Link de um repositório GitHub
- Arquivo README.md
- Vídeo de até três minutos mostrando:
  - Abertura do aplicativo
  - Carregamento
  - Listagem
  - Pesquisa
  - Tela de detalhes
  - Retorno à tela inicial
- Relatório breve contendo:
  - Nome dos integrantes
  - Descrição do aplicativo
  - Funcionalidades implementadas
  - Dificuldades encontradas
  - Divisão das atividades

A pasta `node_modules` não deverá ser incluída no arquivo .zip.

## 20. Modelo de README

Crie um arquivo chamado `README.md`. Utilize este modelo:

```markdown
# Conheça Garanhuns

Projeto final da disciplina de Programação em Dispositivos Móveis.

## Integrantes

- Nome do estudante 1
- Nome do estudante 2

## Descrição

O aplicativo apresenta uma lista de pontos turísticos,
culturais e naturais de Garanhuns. O usuário pode pesquisar
os locais e abrir uma tela com informações detalhadas.

## Funcionalidades

- Listagem de locais
- Pesquisa por nome, categoria ou bairro
- Navegação entre telas
- Tela de detalhes
- Indicador de carregamento
- Tratamento de lista vazia

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

## Estrutura

```
src
├── components
├── data
└── pages
```
```

## 21. Critérios de avaliação

| Critério | Pontuação |
|---|---:|
| Criação e execução correta do projeto | 0,5 |
| Organização das pastas e arquivos | 0,5 |
| Tela inicial e apresentação visual | 1,0 |
| Uso correto do `FlatList` | 1,0 |
| Componente reutilizável | 1,0 |
| Pesquisa e filtragem | 1,5 |
| Navegação entre as telas | 1,5 |
| Passagem e recuperação de parâmetros | 1,0 |
| Tela de detalhes | 1,0 |
| Personalização obrigatória | 0,5 |
| README, vídeo e organização da entrega | 0,5 |
| **Total** | **10,0** |

## 22. Descontos

Poderão ser aplicados os seguintes descontos:

| Ocorrência | Desconto |
|---|---:|
| Projeto não executa | até 5,0 pontos |
| Ausência da tela de detalhes | 2,0 pontos |
| Ausência de navegação | 1,5 ponto |
| Ausência de pesquisa | 1,5 ponto |
| Código concentrado em um único arquivo | 1,0 ponto |
| Ausência de personalização | 0,5 ponto |
| Entrega sem README ou vídeo | 0,5 ponto |
| Erros constantes no terminal | até 1,0 ponto |

## 23. Desafio opcional

Os estudantes que concluírem os requisitos obrigatórios poderão adicionar um sistema simples de favoritos.

O recurso poderá utilizar um estado:

```javascript
const [favoriteIds, setFavoriteIds] = useState([]);
```

Função para adicionar ou remover:

```javascript
function toggleFavorite(placeId) {
  setFavoriteIds((currentIds) => {
    const isFavorite = currentIds.includes(placeId);

    if (isFavorite) {
      return currentIds.filter((id) => id !== placeId);
    }

    return [...currentIds, placeId];
  });
}
```

Não é necessário implementar o desafio opcional para obter a nota máxima referente aos requisitos obrigatórios.

## 24. Checklist final do estudante

Antes de enviar, marque cada item:

- [ ] O projeto abre sem apresentar erros
- [ ] As bibliotecas foram instaladas
- [ ] A tela inicial apresenta os locais
- [ ] O indicador de carregamento aparece
- [ ] O campo de pesquisa funciona
- [ ] A mensagem de lista vazia funciona
- [ ] Cada cartão apresenta as informações resumidas
- [ ] Ao tocar no cartão, a tela de detalhes é aberta
- [ ] A tela de detalhes mostra o local selecionado
- [ ] O botão de retorno funciona
- [ ] Foram cadastrados pelo menos oito locais
- [ ] Foi adicionado um novo campo aos objetos
- [ ] As cores e o visual foram personalizados
- [ ] O código está separado em pastas
- [ ] O README foi preenchido
- [ ] O vídeo foi gravado
- [ ] A pasta node_modules foi removida do arquivo ZIP
