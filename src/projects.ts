export type Shot = { src: string; alt: string; kind: "desktop" | "mobile" };

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  link?: string;
  tag?: string;
  shots: Shot[];
};

function shots(slug: string, name: string, desktop: string[], mobile: string[]): Shot[] {
  return [
    ...desktop.map((alt, i) => ({ src: `/projetos/${slug}/${slug}-${i + 1}.webp`, alt: `${name}: ${alt}`, kind: "desktop" as const })),
    ...mobile.map((alt, i) => ({ src: `/projetos/${slug}/${slug}-mobile-${i + 1}.webp`, alt: `${name} no celular: ${alt}`, kind: "mobile" as const })),
  ];
}

export const PROJECTS: Project[] = [
  {
    slug: "conectavidas",
    name: "ConectaVidas",
    description: "Plataforma de telemedicina humana e veterinária que reúne teleconsultas, planos de assinatura e videoaulas.",
    stack: ["Vue", "Laravel"],
    link: "https://conectavidasmed.com.br",
    shots: shots("conectavidas", "ConectaVidas", ["página inicial", "serviços oferecidos", "planos de assinatura"], ["página inicial", "planos de assinatura"]),
  },
  {
    slug: "lojalves",
    name: "AlveStore (Lojalves)",
    description: "E-commerce com catálogo por categorias, carrinho e finalização do pedido pelo WhatsApp.",
    stack: [".NET", "React"],
    tag: "Em testes",
    shots: shots("lojalves", "AlveStore", ["catálogo", "página de produto", "carrinho com pedido pelo WhatsApp"], ["catálogo", "página de produto"]),
  },
  {
    slug: "sulminas",
    name: "SulMinas Laticínios",
    description: "Site para indústria de laticínios que apresenta o catálogo e recebe propostas comerciais por formulário.",
    stack: ["React"],
    link: "https://sulminaslanding-chi.vercel.app",
    tag: "Cliente",
    shots: shots("sulminas", "SulMinas Laticínios", ["página inicial com formulário de proposta", "destaques de produtos", "catálogo de produtos"], ["página inicial", "catálogo de produtos"]),
  },
  {
    slug: "roadmap",
    name: "Roadmap",
    description: "Plataforma de estudos em tecnologia com trilhas semanais, apostilas e progresso salvo.",
    stack: ["React", "TypeScript"],
    link: "https://roadmap.ghalves.com",
    shots: shots("roadmap", "Roadmap", ["trilhas disponíveis", "trilha Java Backend", "mapa da trilha React"], ["trilhas disponíveis", "trilha Java Backend"]),
  },
];
