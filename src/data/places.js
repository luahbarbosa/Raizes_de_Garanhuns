const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: 'Ponto turístico',
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://i.pinimg.com/736x/c9/f8/fd/c9f8fd3859db39587d774bdb7a50384b.jpg',
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
    image: 'https://jbnoticia.com/wp-content/uploads/2021/02/152051878_417806059315952_7352493385454187806_n-1-1024x770.jpg',
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
    image: 'https://scontent.fcau17-1.fna.fbcdn.net/v/t39.30808-6/514252664_24286665464290587_8478878259909682945_n.jpg?stp=dst-jpg_tt6&cstp=mx1144x536&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C089Ymud-CwQ7kNvwHZiptr&_nc_oc=AdoA492OO36dVtGA5zSgumoLn-TWlEKqG6MKiwgRsLLYUWei0gcuoAYeUBYgEn94UczqxRCej_QN9YyX-3sLNPFD&_nc_zt=23&_nc_ht=scontent.fcau17-1.fna&_nc_gid=0NksnN07LVnpgqhvke9x2A&_nc_ss=7b289&oh=00_AQA21vk7ERqukBfNCsX7rm-_SjJyh083K_GlnXymJgR5YA&oe=6A646EA9',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQywNbLP5nXbjO_xV32mz7b9S5-a5NZlB0dyP4s7ecANvAzUL-8DOMrfw&s=10',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysBgChYeapkJ5LpwWgiHPIZ1yite7xlZ5aQDQx4_rfw&s=10',
    summary:
      'Espaço destinado à realização de exposições, apresentações e atividades culturais.',
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O espaço recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: 'Turismo religioso',
    neighborhood: 'Massaranduba',
    address: 'Rua Antônio Maria - Massaranduba, Garanhuns',
    openingHours: 'Visitação conforme as atividades religiosas, o portão do local costuma ficar aberto diariamente das 06h30 às 17h para turistas e fiéis',
    admission: 'Entrada gratuita',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp1ZnN_hyv3gtq0W1dCGxFocZgksF39Y3lYbLStReDw&s=10',
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
    image: 'https://garanhunstour.com.br/wp-content/uploads/2024/01/FONTE-LUMINOSA-35-ANOS-THOMAS-RAVELLY-2-1000x600-1.jpeg',
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
    image: 'https://garanhunstour.com.br/wp-content/uploads/2024/01/1200px-Cristo_do_Magano_-_Garanhuns_Pernambuco_Brasil-768x576.jpg',
    summary:
      'Monumento religioso imponente e o ponto mais alto de Garanhuns, oferecendo uma vista panorâmica de 360 graus da região.',
    description:
      'Localizado a 1.030 metros de altitude no topo do Morro do Magano, o Mirante abriga uma estátua do Cristo crucificado com mais de 15 metros de altura, esculpida pelo artista plástico Renato Pantaleão em 1954. É considerado um dos pontos mais altos de Pernambuco, atraindo visitantes pela sua importância histórica, religiosa e pela belíssima vista das sete colinas da cidade.'
  }
];

export default places;
