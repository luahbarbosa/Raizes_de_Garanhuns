import { CATEGORIES } from "../constants/categories";

const places = [
  {
    id: "1",
    name: "Relógio das Flores",
    category: CATEGORIES.NATURE,
    neighborhood: "Heliópolis",
    address: "Praça Tavares Correia, Heliópolis, Garanhuns",
    openingHours: "Espaço público com visitação livre",
    admission: "Entrada gratuita",
    image: "https://i.pinimg.com/736x/c9/f8/fd/c9f8fd3859db39587d774bdb7a50384b.jpg",
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
    id: "3",
    name: "Parque Ruber van der Linden",
    category: CATEGORIES.NATURE,
    neighborhood: "Centro",
    address: "Rua Manoel Clemente, Centro, Garanhuns",
    openingHours: "Todos os dias, das 08h às 17h",
    admission: "Entrada gratuita",
    image: "https://scontent.fcau17-1.fna.fbcdn.net/v/t39.30808-6/514252664_24286665464290587_8478878259909682945_n.jpg?stp=dst-jpg_tt6&cstp=mx1144x536&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C089Ymud-CwQ7kNvwHZiptr&_nc_oc=AdoA492OO36dVtGA5zSgumoLn-TWlEKqG6MKiwgRsLLYUWei0gcuoAYeUBYgEn94UczqxRCej_QN9YyX-3sLNPFD&_nc_zt=23&_nc_ht=scontent.fcau17-1.fna&_nc_gid=0NksnN07LVnpgqhvke9x2A&_nc_ss=7b289&oh=00_AQA21vk7ERqukBfNCsX7rm-_SjJyh083K_GlnXymJgR5YA&oe=6A646EA9",
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
    id: "5",
    name: "Centro Cultural Alfredo Leite Cavalcanti",
    category: CATEGORIES.CULTURE,
    neighborhood: "Santo Antônio",
    address: "Av. Afonso Pena, 85, Santo Antônio, Garanhuns",
    openingHours: "Conforme a programação cultural",
    admission: "Entrada gratuita para exposições",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysBgChYeapkJ5LpwWgiHPIZ1yite7xlZ5aQDQx4_rfw&s=10",
    summary:
      "Espaço destinado à realização de exposições, apresentações e atividades culturais.",
    description:
      "O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O espaço recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.",
    accessibility: "Prédio com rampa de acesso e elevador. Banheiros acessíveis disponíveis.",
  },
  {
    id: "6",
    name: "Santuário Mãe Rainha",
    category: CATEGORIES.RELIGION,
    neighborhood: "Massaranduba",
    address: "Rua Antônio Maria, Massaranduba, Garanhuns",
    openingHours: "Diariamente das 06h30 às 17h",
    admission: "Entrada gratuita",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp1ZnN_hyv3gtq0W1dCGxFocZgksF39Y3lYbLStReDw&s=10",
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
    id: "8",
    name: "Mercado Municipal",
    category: CATEGORIES.GASTRONOMY,
    neighborhood: "Centro",
    address: "Av. Barreto de Menezes, Centro, Garanhuns",
    openingHours: "Segunda a sábado, das 06h às 17h",
    admission: "Entrada gratuita",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=600&fit=crop",
    summary:
      "Espaço tradicional com diverse opções de gastronomia regional e produtos locais.",
    description:
      "O Mercado Municipal de Garanhuns é um ponto de encontro para quem deseja conhecer a culinária local. O local oferece pratos típicos do Agreste pernambucano, frutas, temperos e uma experiência cultural marcante.",
    accessibility: "Entrada ampla com piso nivelado. Corredores acessíveis para cadeirantes.",
  },
];

export default places;
