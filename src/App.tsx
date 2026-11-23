import { useEffect, useState, type ReactNode } from "react";
import Projects from "./Projects";
import { PHONE_DISPLAY, WHATSAPP_URL } from "./whatsapp";

const LINKEDIN_URL = "https://www.linkedin.com/in/ebagabe/";
const GITHUB_URL = "https://github.com/eebagabe";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#codigo", label: "Código" },
  { href: "#contato", label: "Contato" },
];

const FOCUS = [
  {
    title: "IA aplicada a produtos",
    text: "Integro modelos de linguagem (LLMs) a sistemas reais com Model Context Protocol (MCP), para que a IA execute ações e não apenas responda perguntas.",
  },
  {
    title: "Engenharia de ponta a ponta",
    text: "Trabalho da especificação e modelagem de dados às APIs, interfaces, deploy e sustentação em nuvem.",
  },
  {
    title: "Qualidade e performance",
    text: "Automatizo testes, reviso gargalos de banco e cache e uso agentes de IA para entregar mais rápido.",
  },
];

const SKILLS = [
  { title: "Back-end", items: ["PHP", "Laravel", "Node.js", "NestJS", "APIs REST", "Filas"] },
  { title: "Front-end e mobile", items: ["JavaScript", "TypeScript", "Vue.js", "Nuxt", "React", "Angular", "Tailwind CSS", "Capacitor"] },
  { title: "Banco de dados e cloud", items: ["PostgreSQL", "MySQL", "Modelagem de dados", "AWS", "EC2", "RDS", "S3", "Linux", "Git"] },
  { title: "Inteligência artificial e testes", items: ["LLMs", "Model Context Protocol (MCP)", "Agentes de IA", "Claude Code", "Testes automatizados", "PHPUnit", "Cypress"] },
];

const JOBS = [
  {
    company: "Softpar",
    role: "Desenvolvedor Full Stack · Remoto",
    period: "01/2025 até o momento",
    items: [
      "Desenvolvimento de app mobile (Android e iOS) de finanças pessoais com cerca de 200 usuários ativos, incluindo um assistente de IA via MCP que registra e consulta lançamentos, gera relatórios e define metas por conversa.",
      "Implantação de testes automatizados (PHPUnit e Cypress) em sistemas que dependiam de teste manual, com 100% de cobertura em módulos novos e legados.",
      "Desenvolvimento de plataforma de gestão de franquias que centraliza contratos, matrículas, cobranças e emissão de notas fiscais, com integração a APIs de pagamento e fiscais.",
      "Desenvolvimento de plataforma de locação náutica projetada para alta concorrência, com pagamentos online, notificações e filas.",
      "Otimização de performance com índices SQL, cache e UI otimista, além de modelagem em PostgreSQL e deploy e sustentação na AWS.",
    ],
  },
  {
    company: "Imagine Apps",
    role: "Desenvolvedor Full Stack",
    period: "08/2024 a 01/2025",
    items: ["Desenvolvimento de funcionalidades de uma plataforma para incorporadoras com Angular e NestJS, conectando corretores à venda de unidades e clientes ao acompanhamento da compra."],
  },
  {
    company: "Gajoy",
    role: "Desenvolvedor Full Stack",
    period: "01/2024 a 08/2024",
    items: ["Desenvolvimento de e-commerces e sites institucionais com React e PHP, do levantamento de requisitos com o cliente ao deploy."],
  },
  {
    company: "Doity",
    role: "Desenvolvedor (bolsista)",
    period: "06/2023 a 12/2023",
    items: ["Desenvolvimento em PHP (CakePHP) de plataforma de gestão de eventos, incluindo recursos de CRM."],
  },
];

const REPOS = [
  {
    name: "ai_agent",
    lang: "C# · .NET · Gemini",
    text: "Chat com IA na linha de comando integrado ao Gemini, com funções isoladas para listar, ler e gravar arquivos e testes automatizados.",
  },
  {
    name: "windows-rec",
    lang: "C# · .NET · FFmpeg",
    text: "Gravador de tela para Windows com áudio do sistema e microfone, codificação por GPU e instalador próprio.",
  },
  {
    name: "eleicoes-2026",
    lang: "React · TypeScript",
    text: "Acompanhamento da apuração das Eleições 2026 em tempo real, com dados da API pública do TSE e função serverless de notícias.",
  },
  {
    name: "static_site_generator",
    lang: "C#",
    text: "Gerador de sites estáticos feito do zero, com parser próprio de Markdown para HTML e testes unitários.",
  },
];

function Ext({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function HeroArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-window">
        <div className="art-bar">
          <i /><i /><i />
          <span>conectavidasmed.com.br</span>
        </div>
        <img src="/projetos/conectavidas/conectavidas-1.webp" alt="" width="1440" height="900" />
      </div>
      <img className="art-phone" src="/projetos/roadmap/roadmap-mobile-1.webp" alt="" />
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>

      <header className="header">
        <div className="wrap header-in">
          <a className="logo" href="#topo" aria-label="ebagabe, início">
            ebagabe<span />
          </a>
          <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <Ext className="btn btn-primary btn-sm" href={LINKEDIN_URL}>LinkedIn</Ext>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero grid-bg" id="topo" aria-labelledby="h-hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="eyebrow">Desenvolvedor Full Stack</p>
              <h1 id="h-hero">
                Oi, eu sou <em>Gabriel Alves</em>.
              </h1>
              <p className="lead">
                Construo produtos web e mobile que chegam à produção e aplico inteligência artificial para resolver problemas reais.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#projetos">Ver projetos</a>
                <Ext className="btn btn-ghost" href={GITHUB_URL}>GitHub</Ext>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="section" id="sobre" aria-labelledby="h-sobre">
          <div className="wrap">
            <p className="eyebrow">Sobre mim</p>
            <h2 id="h-sobre">Engenharia de software e IA aplicada.</h2>
            <p className="lead about">
              Sou desenvolvedor full stack com mais de 3 anos de experiência em sistemas web e mobile em produção,
              em áreas como finanças, franquias, mercado imobiliário e eventos. Meu foco é em APIs, pagamentos integrados e inteligência artificial (IA) aplicada.
            </p>
            <ul className="cards focus">
              {FOCUS.map((f) => (
                <li className="card" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section alt" id="competencias" aria-labelledby="h-comp">
          <div className="wrap">
            <h2 id="h-comp">Competências técnicas</h2>
            <ul className="cards cards-4">
              {SKILLS.map((g) => (
                <li className="card" key={g.title}>
                  <h3>{g.title}</h3>
                  <ul className="pstack">
                    {g.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="experiencia" aria-labelledby="h-exp">
          <div className="wrap">
            <h2 id="h-exp">Experiência profissional</h2>
            <ol className="jobs">
              {JOBS.map((j) => (
                <li className="card job" key={j.company}>
                  <div>
                    <h3>{j.company}</h3>
                    <p>{j.role}</p>
                    <p className="job-period">{j.period}</p>
                  </div>
                  <ul>
                    {j.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
            <ul className="cards cards-4">
              <li className="card">
                <h3>Formação</h3>
                <p>Tecnólogo em Análise e Desenvolvimento de Sistemas, Estácio. 06/2024 a 06/2027 (previsão).</p>
              </li>
              <li className="card">
                <h3>Idiomas</h3>
                <p>Português (nativo), inglês (intermediário) e espanhol (intermediário).</p>
              </li>
            </ul>
          </div>
        </section>

        <Projects />

        <section className="section alt" id="codigo" aria-labelledby="h-cod">
          <div className="wrap">
            <h2 id="h-cod">Projetos no GitHub</h2>
            <ul className="cards cards-4">
              {REPOS.map((r) => (
                <li key={r.name}>
                  <Ext className="card repo" href={`${GITHUB_URL}/${r.name}`}>
                    <h3>{r.name}</h3>
                    <p>{r.text}</p>
                    <span className="card-n">{r.lang}</span>
                  </Ext>
                </li>
              ))}
            </ul>
            <Ext className="btn btn-ghost pall" href={`${GITHUB_URL}?tab=repositories`}>Ver todos os repositórios</Ext>
          </div>
        </section>

        <section className="final dark" id="contato" aria-labelledby="h-final">
          <div className="wrap final-in">
            <p className="eyebrow">Contato</p>
            <h2 id="h-final">Vamos trabalhar juntos?</h2>
            <p className="lead">Estou à disposição para conversar sobre produtos, software e inteligência artificial.</p>
            <div className="hero-cta">
              <Ext className="btn btn-light" href={LINKEDIN_URL}>Falar no LinkedIn</Ext>
              <Ext className="btn btn-outline" href={WHATSAPP_URL}>WhatsApp</Ext>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <p className="logo">ebagabe<span /></p>
          <p>ebagabe.dev · {PHONE_DISPLAY}</p>
          <p>
            <Ext href={LINKEDIN_URL}>LinkedIn</Ext> · <Ext href={GITHUB_URL}>GitHub</Ext> · <Ext href="https://instagram.com/ebagabe.dev">Instagram</Ext>
          </p>
        </div>
      </footer>
    </>
  );
}
