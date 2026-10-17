/*
  Dados do portfolio.
  Para adicionar imagens: coloque os arquivos em assets/projetos/<slug>/
  e liste os nomes em "images" do projeto correspondente.
  "banner" define a imagem usada no carrossel do topo (se vazio, usa a primeira de "images").
  "portrait: true" para prints de celular: a capa não é cortada e o projeto fica fora do carrossel.
*/

const PROFILE = {
  name: "Gabriel",
  brand: "ebagabe.dev",
  role: "Desenvolvedor Full Stack",
  since: 2023,
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
  { title: "Aplicativos", text: "Apps mobile e web apps com Flutter, Capacitor e Vue, publicados e prontos para uso." },
  { title: "E-commerce", text: "Lojas virtuais completas, com catálogo, carrinho, pagamentos e painel administrativo." },
  { title: "Sistemas sob medida", text: "ERPs, painéis e sistemas internos pensados para o fluxo real da sua empresa." },
  { title: "Integração de IA", text: "Assistentes, automações e integrações com modelos de IA via MCP e APIs." },
  { title: "Infraestrutura", text: "Deploy, servidores, domínios, CI/CD e ambiente estável para o seu projeto." },
  { title: "Manutenção e alocação", text: "Correções, evolução de sistemas existentes ou atuação como desenvolvedor no seu time." }
];

const PROJECTS = [
  {
    slug: "lojalves",
    name: "Lojalves",
    category: "pessoal",
    summary: "E-commerce para Maceió/AL com venda de roupas, tecnologia e mais.",
    stack: [".NET", "React"],
    links: [{ label: "lojalves.com.br", url: "https://lojalves.com.br" }],
    banner: "lojalves-1.png",
    images: [
      "lojalves-1.png",
      "lojalves-2.png",
      "lojalves-3.png"
    ]
  },
  {
    slug: "conectavidas",
    name: "ConectaVidas",
    category: "pessoal",
    summary: "Sistema de telemedicina veterinária e humana, com atendimento online e gestão de consultas.",
    stack: ["Vue", ".NET"],
    links: [{ label: "conectavidasmed.com.br", url: "https://conectavidasmed.com.br" }],
    banner: "conectavidas-1.png",
    images: [
      "conectavidas-1.png",
      "conectavidas-2.png",
      "conectavidas-3.png",
      "conectavidas-4.png"
    ]
  },
  {
    slug: "eleicoes-2026",
    name: "Eleições 2026",
    category: "pessoal",
    summary: "Acompanhamento de votos em tempo real, consumindo dados diretamente do TSE.",
    stack: ["React", "TypeScript"],
    links: [{ label: "eleicoes.ghalves.com", url: "https://eleicoes.ghalves.com" }],
    banner: "eleicoes-2026-1.png",
    images: [
      "eleicoes-2026-1.png",
      "eleicoes-2026-2.png",
      "eleicoes-2026-3.png"
    ]
  },
  {
    slug: "roadmap",
    name: "Roadmap",
    category: "pessoal",
    summary: "Site de roadmaps de estudo, com trilhas organizadas e acompanhamento de progresso.",
    stack: ["React", "TypeScript"],
    links: [{ label: "roadmap.ghalves.com", url: "https://roadmap.ghalves.com" }],
    banner: "roadmap-1.png",
    images: [
      "roadmap-1.png",
      "roadmap-2.png",
      "roadmap-3.png"
    ]
  },
  {
    slug: "finapp",
    name: "Finapp",
    category: "pessoal",
    summary: "App de finanças pessoais para controle de receitas, despesas e gerenciamento de dívidas.",
    stack: ["Flutter", "SQLite"],
    links: [{ label: "GitHub", url: "https://github.com/eebagabe/finapp" }],
    portrait: true,
    banner: "finapp-1.jpg",
    images: [
      "finapp-1.jpg",
      "finapp-2.jpg",
      "finapp-3.jpg"
    ]
  },
  {
    slug: "windows-rec",
    name: "Windows-Rec",
    category: "pessoal",
    summary: "Gravador de tela e gameplay nativo para Windows, com atalho global (F9) e encoding por hardware via NVIDIA NVENC.",
    stack: ["Rust", "Windows"],
    links: [{ label: "GitHub", url: "https://github.com/eebagabe/windows-rec" }],
    banner: "windows-rec-1.png",
    images: [
      "windows-rec-1.png"
    ]
  },
  {
    slug: "ginastica-do-cerebro",
    name: "Ginástica do Cérebro",
    category: "empresa",
    summary: "Sistema de franquias e matriz educacional com gateway de pagamentos (ASAAS) e emissão de nota fiscal.",
    stack: ["Laravel", "Vue", "ASAAS", "NF-e"],
    links: [],
    banner: "ginastica-do-cerebro-1.png",
    images: [
      "ginastica-do-cerebro-1.png",
      "ginastica-do-cerebro-2.png",
      "ginastica-do-cerebro-3.png",
      "ginastica-do-cerebro-4.png"
    ]
  },
  {
    slug: "cotacao-chines",
    name: "Sistema de Cotação Chinês",
    category: "empresa",
    summary: "China Quotation System: gestão de clientes, produtos, loja da fábrica, orçamentos e câmbio para importação.",
    stack: ["Laravel", "Vue"],
    links: [],
    banner: "cotacao-chines-2.png",
    images: [
      "cotacao-chines-1.png",
      "cotacao-chines-2.png",
      "cotacao-chines-3.png"
    ]
  }
];
