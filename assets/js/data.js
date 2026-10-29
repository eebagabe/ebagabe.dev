/*
  Dados do portfolio.
  Para adicionar imagens: coloque os arquivos em assets/projetos/<slug>/
  e liste os nomes em "images" (prints desktop) e "mobile" (prints de celular).
  A primeira imagem de "images" é a capa do card.
  "category": "pessoal", "cliente" ou "empresa" (empresa = privado, sem link).
*/

const PROFILE = {
  name: "Gabriel",
  brand: "ebagabe.dev",
  role: "Desenvolvedor Full Stack",
  since: 2023,
  github: "https://github.com/eebagabe",
  instagram: "https://instagram.com/ebagabe.dev",
  whatsapp: "5582993506973",
  whatsappLabel: "+55 82 99350-6973",
  bio: [
    "Desenvolvo software desde 2023, construindo sistemas web, aplicativos mobile e ferramentas desktop do zero até a produção.",
    "Trabalho com produtos reais: ERPs, e-commerce, telemedicina, gestão financeira com inteligência artificial e sistemas em tempo real. Gosto de código limpo, interfaces simples e entregas que resolvem o problema do cliente."
  ],
  stack: [
    "Laravel", "Vue", "React", "TypeScript", ".NET", "Flutter",
    "Rust", "Capacitor", "SQLite", "MySQL", "Docker", "MCP / IA"
  ]
};

const SERVICES = [
  { title: "Sites e landing pages", text: "Páginas rápidas e bonitas, pensadas para transformar visitas em contatos e vendas." },
  { title: "E-commerce", text: "Lojas virtuais completas, com catálogo, carrinho, pagamentos e painel administrativo." },
  { title: "Sistemas sob medida", text: "ERPs, painéis e sistemas internos pensados para o fluxo real da sua empresa." },
  { title: "Aplicativos", text: "Apps mobile e web apps com Flutter, Capacitor e Vue, publicados e prontos para uso." },
  { title: "Integração de IA", text: "Assistentes, automações e integrações com modelos de IA via MCP e APIs." },
  { title: "Manutenção e infraestrutura", text: "Deploy, servidores, domínios, correções e evolução de sistemas existentes." }
];

const PROJECTS = [
  {
    slug: "lojalves",
    name: "AlveStore",
    category: "pessoal",
    summary: "E-commerce para Maceió/AL com catálogo por categorias, carrinho e pedido finalizado direto pelo WhatsApp.",
    stack: [".NET", "React"],
    links: [{ label: "lojalves.com.br", url: "https://lojalves.com.br" }],
    images: ["lojalves-1.webp", "lojalves-2.webp", "lojalves-3.webp"],
    mobile: ["lojalves-mobile-1.webp", "lojalves-mobile-2.webp", "lojalves-mobile-3.webp"]
  },
  {
    slug: "conectavidas",
    name: "ConectaVidas",
    category: "pessoal",
    summary: "Plataforma de telemedicina veterinária e humana, com planos de assinatura, teleconsultas e videoaulas.",
    stack: ["Vue", ".NET"],
    links: [{ label: "conectavidasmed.com.br", url: "https://conectavidasmed.com.br" }],
    images: ["conectavidas-1.webp", "conectavidas-2.webp", "conectavidas-3.webp", "conectavidas-4.webp"],
    mobile: ["conectavidas-mobile-1.webp"]
  },
  {
    slug: "sulminas",
    name: "SulMinas Laticínios",
    category: "cliente",
    summary: "Landing page para indústria de laticínios, com catálogo de produtos, clientes atendidos e formulário de proposta.",
    stack: ["React"],
    links: [{ label: "Ver site", url: "https://sulminaslanding-chi.vercel.app" }],
    images: ["sulminas-1.webp", "sulminas-2.webp", "sulminas-3.webp", "sulminas-4.webp"],
    mobile: ["sulminas-mobile-1.webp"]
  },
  {
    slug: "roadmap",
    name: "Roadmap",
    category: "pessoal",
    summary: "Trilhas de estudo semana a semana (Java, React, QA, Dados e mais), com apostilas e progresso salvo.",
    stack: ["React", "TypeScript"],
    links: [{ label: "roadmap.ghalves.com", url: "https://roadmap.ghalves.com" }],
    images: ["roadmap-1.webp", "roadmap-2.webp", "roadmap-3.webp"],
    mobile: ["roadmap-mobile-1.webp", "roadmap-mobile-2.webp"]
  }
];
