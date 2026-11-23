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

const SKILLS = [
  { title: "Back-end", items: ["Laravel", "PHP", "NestJS", "Node.js", "APIs REST", "Filas"] },
  { title: "Front-end e mobile", items: ["Vue.js", "Nuxt", "Quasar", "React", "Angular", "TypeScript", "Tailwind", "Capacitor"] },
  { title: "Dados e nuvem", items: ["PostgreSQL", "MySQL", "Modelagem de dados", "AWS (EC2, RDS, S3, Route 53)", "Linux", "Git"] },
  { title: "Qualidade e IA", items: ["PHPUnit", "Cypress", "MCP", "Integração com LLMs", "Asaas", "PlugNotas", "Claude Code", "Codex", "Google Antigravity", "Grok"] },
];

const JOBS = [
  {
    company: "Softpar",
    role: "Desenvolvedor Full Stack · Remoto",
    period: "jan/2025 até hoje",
    items: [
      "App mobile (Android/iOS) de finanças pessoais com assistente de IA via MCP: o chat cria, edita e consulta lançamentos, gera relatórios e define metas. Cerca de 200 usuários ativos.",
      "Plataforma de gestão de franquias: contratos, matrículas, cobranças (Asaas), emissão de NF (PlugNotas) e kanban interno.",
      "Plataforma de locação náutica projetada para alta concorrência, com pagamentos, notificações e filas de e-mail.",
      "Implantação de testes automatizados (PHPUnit, Cypress, Vue) em sistemas que só tinham teste manual, com 100% de cobertura em módulos novos e legados.",
      "Otimização de performance com índices SQL, cache e UI otimista, modelagem PostgreSQL, specs técnicas e deploy e sustentação na AWS.",
      "Módulos de um ERP para empresa de energia solar e de uma plataforma para academias (Laravel + Vue).",
    ],
  },
  {
    company: "Imagine Apps",
    role: "Desenvolvedor Full Stack",
    period: "ago/2024 a jan/2025",
    items: ["Funcionalidades de uma plataforma para incorporadoras: corretores vendem unidades e clientes acompanham a compra (Angular + NestJS)."],
  },
  {
    company: "Gajoy",
    role: "Desenvolvedor Full Stack · Maceió",
    period: "jan/2024 a ago/2024",
    items: ["Landing pages, e-commerces e sites institucionais para clientes (React + PHP), do levantamento de requisitos ao deploy."],
  },
  {
    company: "Doity",
    role: "Desenvolvedor (bolsista)",
    period: "jun/2023 a dez/2023",
    items: ["Plataforma de gestão de eventos (CakePHP) e desenvolvimento de um módulo de CRM."],
  },
];

const REPOS = [
  {
    name: "windows-rec",
    lang: "C# · .NET",
    text: "Gravador de tela para Windows com áudio do sistema e microfone, detecção de janela e encoder por GPU.",
  },
  {
    name: "static_site_generator",
    lang: "C#",
    text: "Gerador de sites estáticos feito do zero, com parser próprio de Markdown para HTML e testes unitários.",
  },
  {
    name: "ai_agent",
    lang: "C#",
    text: "Agente de IA que usa o Gemini.",
  },
  {
    name: "eleicoes-2026",
    lang: "TypeScript",
    text: "Projeto independente com dados oficiais do TSE sobre as eleições de 2026.",
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
                Construo sistemas web e mobile com Laravel, PHP e Vue, do banco de dados ao deploy na AWS. Maceió, AL.
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
            <h2 id="h-sobre">Da API à interface.</h2>
            <p className="lead about">
              Há mais de 3 anos construo sistemas em produção com Laravel, PHP e Vue, com foco em APIs, pagamentos integrados e IA aplicada.
              Desenvolvo integrações com LLMs via MCP e uso agentes de IA no dia a dia.
            </p>
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

        <section className="section alt" id="experiencia" aria-labelledby="h-exp">
          <div className="wrap">
            <p className="eyebrow">Experiência</p>
            <h2 id="h-exp">Onde trabalhei.</h2>
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
                <p>Tecnólogo em Análise e Desenvolvimento de Sistemas, Estácio. jun/2024 a jun/2027 (previsão).</p>
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
            <p className="eyebrow">Código</p>
            <h2 id="h-cod">Também no GitHub.</h2>
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
            <p className="lead">Tem uma vaga ou quer saber mais sobre o meu trabalho? Fale comigo.</p>
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
