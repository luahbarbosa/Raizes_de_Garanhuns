const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: 'Ponto turístico',
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/relogio_flores.jpg'),
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
    openingHours: ' Ele abre de segunda a sexta, das 05h às 22h, e aos sábados, domingos e feriados, das 05h às 21h.',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/euclides_dourado.jpg'),
    summary:
      'Área verde destinada à convivência, caminhada, lazer e atividades esportivas.',
    description:
      'O Parque Euclides Dourado é uma importante área de lazer da cidade. O local possui espaços arborizados, pistas para caminhada, equipamentos esportivos e áreas utilizadas para atividades culturais e recreativas.'
  },
  {
    id: '3',
    name: 'Parque Ruber van der Linden',
    category: 'Parque natural',
    neighborhood: 'Santo Antônio',
    address: 'Rua Manoel Clemente, Centro, Garanhuns',
    openingHours: 'Ele funciona todos os dias, das 08h às 17h ',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/ruber_van_der_linden.jpg'),
    summary:
      'Parque conhecido popularmente como Pau Pombo, com vegetação e espaços de contemplação.',
    description:
      'O Parque Ruber van der Linden, conhecido como Pau Pombo, é uma área de preservação localizada na região central de Garanhuns. O ambiente possui vegetação, trilhas, espaços para descanso e contato com a natureza.'
  },
  {
    id: '4',
    name: 'Castelo de João Capão',
    category: 'Construção histórica',
    neighborhood: 'Dom Thiago Posman',
    address: ' Rua Marcos Antônio de Andrade Costa Junior - Dom Thiago Posman, Garanhuns ',
    openingHours: 'Incorreto. O local adota horários fixos regulares na maior parte dos dias, abrindo geralmente das 09h30 às 16h00',
    admission: 'É cobrada uma taxa de manutenção simbólica por pessoa (geralmente entre R$ 2,00 e R$ 3,00)',
    image: require('../../assets/images/castelo_joao_capao.jpg'),
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
    address: 'Av. Afonso Pena, 85 - Santo Antônio, Garanhuns  ',
    openingHours: 'Conforme a programação cultural',
    admission: 'Entrada gratuita para exposições',
    image: require('../../assets/images/centro_cultural.jpg'),
    summary:
      'Espaço destinado à realização de exposições, apresentações e atividades culturais.',
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O space recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: 'Turismo religioso',
    neighborhood: 'Massaranduba',
    address: 'Rua Antônio Maria - Massaranduba, Garanhuns',
    openingHours: 'Visitação conforme as atividades religiosas, o portão do local costuma ficar aberto diariamente das 06h30 às 17h para turistas e fiéis',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/santuario_mae_rainha.jpg'),
    summary:
      'Local de visitação religiosa situado em uma área elevada da cidade.',
    description:
      'O Santuário Mãe Rainha é um espaço de oração, contemplação e turismo religioso. Sua localização também proporciona uma visão privilegiada de diferentes áreas da cidade.'
  },
  {
    id: '7',
    name: 'Praça Souto Filho (Fonte Luminosa)',
    category: 'Ponto turístico / Lazer',
    neighborhood: 'Heliópolis',
    address: ' Praça Souto Filho, entre as ruas Siqueira Campos e Dr. José Mariano, Garanhuns',
    openingHours: 'Espaço público aberto 24h (show de luzes e águas geralmente à noite)',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/fonte_luminosa.jpg'),
    summary:
      'Charmosa praça arborizada famosa por sua fonte que mistura luzes, música e coreografia de águas.',
    description:
      'A Praça Souto Filho, popularmente conhecida como Praça da Fonte Luminosa, é um dos principais cartões-postais de Garanhuns. O local é ideal para passeios em família, fotos e contemplação, destacando-se pelo espetáculo noturno das águas dançantes e coloridas.'
  },
  {
    id: '8',
    name: 'Mirante Cristo do Magano',
    category: 'Turismo religioso',
    neighborhood: 'Magano',
    address: 'Morro do Magano, Garanhuns',
    openingHours: 'Acesso livre (ao ar livre), recomendável a visitação durante o dia. Nota: O local encontra-se temporariamente fechado ou com acessos restritos devido a obras de requalificação.',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/cristo_magano.jpg'),
    summary:
      'Monumento religioso imponente e o ponto mais alto de Garanhuns, oferecendo uma vista panorâmica de 360 graus da região.',
    description:
      'Localizado a 1.030 metros de altitude no topo do Morro do Magano, o Mirante abriga uma estátua do Cristo crucificado com mais de 15 metros de altura, esculpida pelo artista plástico Renato Pantaleão em 1954. É considerado um dos pontos mais altos de Pernambuco, atraindo visitantes pela sua importância histórica, religiosa e pela belíssima vista das sete colinas da cidade.'
  },
  {
    id: '9',
    name: 'Mosteiro de São Bento',
    category: 'Turismo religioso / Histórico',
    neighborhood: 'São José',
    address: 'Praça Mosteiro de São Bento, 223, São José, Garanhuns - PE',
    openingHours: 'Segunda a sexta-feira, das 10h às 12h e das 13h às 17h; sábados, das 08h às 12h e das 14h às 17h; domingos, das 14h às 15h50 e a partir das 17h20.',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/mosteiro_sao_bento.jpg'),
    summary:
      'Mosteiro beneditino fundado em 1940, conhecido pela sua arquitetura em tijolos aparentes, canto gregoriano e licores artesanais.',
    description:
      'O Mosteiro de São Bento é um marco histórico, cultural e espiritual em Garanhuns. O complexo inclui uma bela capela projetada com tijolos aparentes que remetem à arquitetura medieval e conta com obras sacras de Cláudio Pastro. Os monges beneditinos mantêm a vida de oração e trabalho (ora et labora), fabricando licores, pães e o biscoito Bricelet na lojinha artesanal aberta a visitantes.'
  },
  {
    id: '10',
    name: 'Vinícola Vale das Colinas',
    category: 'Enoturismo / Turismo rural',
    neighborhood: 'Zona Rural',
    address: 'Fazenda Bom Destino, Zona Rural, Garanhuns - PE',
    openingHours: 'Sextas, das 12h às 18h; sábados, domingos e feriados, das 10h às 18h (aberto a partir das quintas nos meses de janeiro, julho, novembro e dezembro).',
    admission: 'R$ 50,00 por adulto (R$ 25,00 para estudantes e idosos; menores acompanhados são isentos)',
    image: require('../../assets/images/vinicola.jpg'),
    summary:
      'A primeira vinícola boutique de Garanhuns, com cultivo de uvas finas europeias em clima de altitude.',
    description:
      'A Vinícola Vale das Colinas é pioneira no cultivo de uvas viníferas no Agreste de Pernambuco. A propriedade oferece visitas guiadas pelos vinhedos com explicações sobre o processo de produção de vinhos de inverno de alta qualidade, degustações orientadas em um chalé aconchegante, lojinha de frios artesanais e áreas de piquenique ao ar livre.'
  },
  {
    id: '11',
    name: 'Igreja Matriz de Santo Antônio',
    category: 'Turismo religioso / Arquitetura',
    neighborhood: 'Centro',
    address: 'Avenida Santo Antônio, Centro, Garanhuns - PE',
    openingHours: 'Diariamente, das 08h às 12h e das 14h às 18h (visitação fora dos horários das celebrações).',
    admission: 'Entrada gratuita',
    image: require('../../assets/images/igreja_santo_antonio.jpg'),
    summary:
      'Catedral histórica no centro da cidade, dedicada ao padroeiro de Garanhuns, com bela fachada de estilo arquitetônico marcante.',
    description:
      'A Igreja Matriz de Santo Antônio (Catedral de Garanhuns) é o principal templo católico da cidade. Localizada no coração do centro histórico, destaca-se por sua imponente fachada e interior decorado que atrai fiéis e admiradores de arte e arquitetura religiosa. É palco de importantes festividades e celebrações da Diocese de Garanhuns.'
  }
];

export default places;
