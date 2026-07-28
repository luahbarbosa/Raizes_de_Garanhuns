import { CATEGORIES } from "../constants/categories";

const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: CATEGORIES.HISTORY,
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/WalberMoura_RelogioDasFlores_Garanhuns_PE.jpg',
    summary:
      "Um dos principais cartões-postais de Garanhuns, localizado no bairro de Heliópolis.",
    description:
      "O Relógio das Flores é um dos locais mais conhecidos de Garanhuns. O espaço combina jardinagem ornamental, paisagismo e um relógio instalado em uma estrutura decorada com flores. É bastante visitado por moradores e turistas, principalmente durante os eventos realizados na cidade.",
    accessibility: "Piso acesso livre, sem degraus na entrada principal. Calçadas pavimentadas ao redor.",
  },
  {
    id: "2",
    name: "Parque Euclides Dourado",
    category: CATEGORIES.NATURE,
    neighborhood: "Heliópolis",
    address: "Avenida Júlio Brasileiro, Heliópolis, Garanhuns",
    openingHours: "Segunda a sexta, das 05h às 22h. Sábados, domingos e feriados, das 05h às 21h.",
    admission: "Entrada gratuita",
    image: "https://jbnoticia.com/wp-content/uploads/2021/02/152051878_417806059315952_7352493385454187806_n-1-1024x770.jpg",
    summary:
      "Área verde destinada à convivência, caminhada, lazer e atividades esportivas.",
    description:
      "O Parque Euclides Dourado é uma importante área de lazer da cidade. O local possui espaços arborizados, pistas para caminhada, equipamentos esportivos e áreas utilizadas para atividades culturais e recreativas.",
    accessibility: "Trilhas pavimentadas e rampas de acesso em algumas áreas do parque.",
  },
  {
    id: '3',
    name: 'Parque Ruber van der Linden',
    category: CATEGORIES.NATURE,
    neighborhood: 'Santo Antônio',
    address: 'Rua Manoel Clemente, Centro, Garanhuns',
    openingHours: 'Ele funciona todos os dias, das 08h às 17h ',
    admission: 'Entrada gratuita',
    image: 'https://garanhunstour.com.br/wp-content/uploads/2024/01/IMG_4973-2-1024x683.jpg',
    summary:
      "Parque conhecido popularmente como Pau Pombo, com vegetação e espaços de contemplação.",
    description:
      "O Parque Ruber van der Linden, conhecido como Pau Pombo, é uma área de preservação localizada na região central de Garanhuns. O ambiente possui vegetação, trilhas, espaços para descanso e contato com a natureza.",
    accessibility: "Trilhas naturais com terreno irregular. Acessibilidade limitada para cadeirantes.",
  },
  {
    id: "4",
    name: "Castelo de João Capão",
    category: CATEGORIES.HISTORY,
    neighborhood: "Dom Thiago Posman",
    address: "Rua Marcos Antônio de Andrade Costa Junior, Dom Thiago Posman, Garanhuns",
    openingHours: "Das 09h30 às 16h00",
    admission: "Taxa simbólica de R$ 2,00 a R$ 3,00 por pessoa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQywNbLP5nXbjO_xV32mz7b9S5-a5NZlB0dyP4s7ecANvAzUL-8DOMrfw&s=10",
    summary:
      "Construção singular que se tornou uma curiosidade arquitetônica e cultural da cidade.",
    description:
      "O Castelo de João Capão é uma construção idealizada por João Ferreira, conhecido como João Capão. Sua arquitetura inspirada em castelos tornou o imóvel uma atração curiosa e bastante conhecida entre os visitantes.",
    accessibility: "Acesso por escada. Não possui rampa para cadeirantes.",
  },
  {
    id: '5',
    name: 'Centro Cultural Alfredo Leite Cavalcanti',
    category: CATEGORIES.CULTURE,
    neighborhood: 'Centro',
    address: 'Av. Afonso Pena, 85 - Santo Antônio, Garanhuns  ',
    openingHours: 'Conforme a programação cultural',
    admission: 'Entrada gratuita para exposições',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Centro_Cultural_-_Garanhuns%2C_Pernambuco%2C_Brasil_%288641288151%29.jpg',
    summary:
      "Espaço destinado à realização de exposições, apresentações e atividades culturais.",
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O space recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: CATEGORIES.RELIGION,
    neighborhood: 'Massaranduba',
    address: 'Rua Antônio Maria - Massaranduba, Garanhuns',
    openingHours: 'Visitação conforme as atividades religiosas, o portão do local costuma ficar aberto diariamente das 06h30 às 17h para turistas e fiéis',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/WalberMoura_SantuarioMaeRainha_Garanhuns_PE_03.jpg',
    summary:
      "Local de visitação religiosa situado em uma área elevada da cidade.",
    description:
      "O Santuário Mãe Rainha é um espaço de oração, contemplação e turismo religioso. Sua localização também proporciona uma visão privilegiada de diferentes áreas da cidade.",
    accessibility: "Acesso por rampa até a entrada principal. Terreno inclinado no entorno.",
  },
  {
    id: "7",
    name: "Praça Souto Filho",
    category: CATEGORIES.NATURE,
    neighborhood: "Heliópolis",
    address: "Praça Souto Filho, Heliópolis, Garanhuns",
    openingHours: "Espaço público aberto 24h",
    admission: "Entrada gratuita",
    image: "https://garanhunstour.com.br/wp-content/uploads/2024/01/FONTE-LUMINOSA-35-ANOS-THOMAS-RAVELLY-2-1000x600-1.jpeg",
    summary:
      "Charmosa praça arborizada famosa por sua fonte que mistura luzes, música e coreografia de águas.",
    description:
      "A Praça Souto Filho, popularmente conhecida como Praça da Fonte Luminosa, é um dos principais cartões-postais de Garanhuns. O local é ideal para passeios em família, fotos e contemplação, destacando-se pelo espetáculo noturno das águas dançantes e coloridas.",
    accessibility: "Piso plano e pavimentado. Acesso livre para cadeirantes e carrinhos de bebê.",
  },
  {
    id: '8',
    name: 'Mirante Cristo do Magano',
    category: CATEGORIES.RELIGION,
    neighborhood: 'Magano',
    address: 'Morro do Magano, Garanhuns',
    openingHours: 'Acesso livre (ao ar livre), recomendável a visitação durante o dia. Nota: O local encontra-se temporariamente fechado ou com acessos restritos devido a obras de requalificação.',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Cristo_do_Magano_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    summary:
      "Espaço tradicional com diverse opções de gastronomia regional e produtos locais.",
    description:
      'Localizado a 1.030 metros de altitude no topo do Morro do Magano, o Mirante abriga uma estátua do Cristo crucificado com mais de 15 metros de altura, esculpida pelo artista plástico Renato Pantaleão em 1954. É considerado um dos pontos mais altos de Pernambuco, atraindo visitantes pela sua importância histórica, religiosa e pela belíssima vista das sete colinas da cidade.'
  },
  {
    id: '9',
    name: 'Mosteiro de São Bento',
    category: CATEGORIES.RELIGION,
    neighborhood: 'São José',
    address: 'Praça Mosteiro de São Bento, 223, São José, Garanhuns - PE',
    openingHours: 'Segunda a sexta-feira, das 10h às 12h e das 13h às 17h; sábados, das 08h às 12h e das 14h às 17h; domingos, das 14h às 15h50 e a partir das 17h20.',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/BRUNO_LIMA_MOSTEIRO_DE_S%C3%83O_BENTO_GARANHUNS_PE_%2840013240995%29.jpg',
    summary:
      'Mosteiro beneditino fundado em 1940, conhecido pela sua arquitetura em tijolos aparentes, canto gregoriano e licores artesanais.',
    description:
      'O Mosteiro de São Bento é um marco histórico, cultural e espiritual em Garanhuns. O complexo inclui uma bela capela projetada com tijolos aparentes que remetem à arquitetura medieval e conta com obras sacras de Cláudio Pastro. Os monges beneditinos mantêm a vida de oração e trabalho (ora et labora), fabricando licores, pães e o biscoito Bricelet na lojinha artesanal aberta a visitantes.'
  },
  {
    id: '10',
    name: 'Vinícola Vale das Colinas',
    category: CATEGORIES.GASTRONOMY,
    neighborhood: 'Zona Rural',
    address: 'Fazenda Bom Destino, Zona Rural, Garanhuns - PE',
    openingHours: 'Sextas, das 12h às 18h; sábados, domingos e feriados, das 10h às 18h (aberto a partir das quintas nos meses de janeiro, julho, novembro e dezembro).',
    admission: 'R$ 50,00 por adulto (R$ 25,00 para estudantes e idosos; menores acompanhados são isentos)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Grape_Vineyard.jpg',
    summary:
      'A primeira vinícola boutique de Garanhuns, com cultivo de uvas finas europeias em clima de altitude.',
    description:
      'A Vinícola Vale das Colinas é pioneira no cultivo de uvas viníferas no Agreste de Pernambuco. A propriedade oferece visitas guiadas pelos vinhedos com explicações sobre o processo de produção de vinhos de inverno de alta qualidade, degustações orientadas em um chalé aconchegante, lojinha de frios artesanais e áreas de piquenique ao ar livre.'
  },
  {
    id: '11',
    name: 'Igreja Matriz de Santo Antônio',
    category: CATEGORIES.RELIGION,
    neighborhood: 'Centro',
    address: 'Avenida Santo Antônio, Centro, Garanhuns - PE',
    openingHours: 'Diariamente, das 08h às 12h e das 14h às 18h (visitação fora dos horários das celebrações).',
    admission: 'Entrada gratuita',
    image: 'https://garanhunstour.com.br/wp-content/uploads/2024/01/Catedral-768x576.jpg',
    summary:
      'Catedral histórica no centro da cidade, dedicada ao padroeiro de Garanhuns, com bela fachada de estilo arquitetônico marcante.',
    description:
      'A Igreja Matriz de Santo Antônio (Catedral de Garanhuns) é o principal templo católico da cidade. Localizada no coração do centro histórico, destaca-se por sua imponente fachada e interior decorado que atrai fiéis e admiradores de arte e arquitetura religiosa. É palco de importantes festividades e celebrações da Diocese de Garanhuns.'
  }
];

export default places;
