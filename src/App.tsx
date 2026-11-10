import { useEffect, useState } from "react";
import Projects from "./Projects";
import { PHONE_DISPLAY, WHATSAPP_URL } from "./whatsapp";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
];

const SERVICES = [
  {
    n: "01",
    title: "Sites para negócios",
    text: "Páginas rápidas, claras e pensadas para o celular, com o essencial para o cliente entender o que você faz e chamar no WhatsApp.",
  },
  {
    n: "02",
    title: "Sistemas sob medida",
    text: "Ferramentas web feitas para a rotina do seu negócio: cadastros, painéis e controles no lugar de planilhas e anotações soltas.",
  },
  {
    n: "03",
    title: "Integrações",
    text: "Conecto o site ou sistema ao que você já usa, como WhatsApp, formulários e outros serviços, conforme a necessidade do projeto.",
  },
];

const STEPS = [
  { n: "1", title: "Conversa", text: "Você conta sobre o negócio e o que precisa, direto pelo WhatsApp." },
  { n: "2", title: "Proposta", text: "Envio uma proposta clara, com escopo, prazo e valor, sem compromisso." },
  { n: "3", title: "Entrega", text: "Desenvolvo, você acompanha e o projeto vai ao ar pronto para uso." },
];

const BENEFITS = [
  {
    title: "Seja encontrado no Google",
    text: "Estrutura técnica e conteúdo organizados para facilitar que seu negócio apareça quando as pessoas buscam.",
  },
  {
    title: "Contato direto por WhatsApp",
    text: "Botões e chamadas visíveis para o cliente falar com você em um toque, sem formulários longos.",
  },
  {
    title: "Funciona bem no celular",
    text: "Layout pensado primeiro para telas pequenas, leve e fácil de navegar.",
  },
  {
    title: "Tudo mais simples",
    text: "Menos retrabalho e menos bagunça: informações e processos do negócio em um só lugar.",
  },
];

function Cta({ children, variant = "primary" }: { children: string; variant?: "primary" | "dark" }) {
  return (
    <a className={`btn btn-${variant}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      {children}
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

function HeroArt() {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-window">
        <div className="art-bar">
          <i /><i /><i />
          <span>seunegocio.com.br</span>
        </div>
        <div className="art-body">
          <div className="art-line w60" />
          <div className="art-line w90 tall" />
          <div className="art-line w40" />
          <div className="art-btn">Chamar no WhatsApp</div>
          <div className="art-cards">
            <div /><div /><div />
          </div>
        </div>
      </div>
      <div className="art-chip chip-a">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
        Google
      </div>
      <div className="art-chip chip-b">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.7 7L4 20l1.1-5A8 8 0 1 1 21 12Z" /></svg>
        WhatsApp
      </div>
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
            ebagabe<span>.</span>
          </a>
          <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="btn btn-primary btn-sm" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Orçamento grátis
            </a>
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
              <p className="eyebrow">Estúdio de software enxuto</p>
              <h1 id="h-hero">
                Crio sites e sistemas para <em>negócios</em>.
              </h1>
              <p className="lead">
                Mais clientes pelo Google e WhatsApp. Um site claro, rápido e feito para o seu cliente chamar você sem complicação.
              </p>
              <div className="hero-cta">
                <Cta>Pedir orçamento grátis</Cta>
                <p className="phone">ou chame em <strong>{PHONE_DISPLAY}</strong></p>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="section" id="servicos" aria-labelledby="h-serv">
          <div className="wrap">
            <p className="eyebrow">O que eu faço</p>
            <h2 id="h-serv">Sites e sistemas, sem enrolação.</h2>
            <ul className="cards">
              {SERVICES.map((s) => (
                <li className="card" key={s.n}>
                  <span className="card-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Projects />

        <section className="section dark" id="processo" aria-labelledby="h-proc">
          <div className="wrap">
            <p className="eyebrow">Como funciona</p>
            <h2 id="h-proc">Três passos simples.</h2>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="beneficios" aria-labelledby="h-ben">
          <div className="wrap">
            <p className="eyebrow">Benefícios</p>
            <h2 id="h-ben">Facilite ser encontrado e ser chamado.</h2>
            <ul className="cards cards-4">
              {BENEFITS.map((b) => (
                <li className="card" key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </li>
              ))}
            </ul>
            <p className="note">
              Um bom site ajuda, mas não há garantia de posição no Google nem de quantidade de contatos: os resultados dependem de vários fatores.
            </p>
          </div>
        </section>

        <section className="final" aria-labelledby="h-final">
          <div className="wrap final-in">
            <h2 id="h-final">Vamos conversar sobre o seu projeto?</h2>
            <p className="lead">Conte o que você precisa pelo WhatsApp e receba um orçamento grátis.</p>
            <Cta variant="dark">Pedir orçamento pelo WhatsApp</Cta>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <p className="logo">ebagabe<span>.</span></p>
          <p>ebagabe.dev · {PHONE_DISPLAY}</p>
          <a href="https://instagram.com/ebagabe.dev" target="_blank" rel="noopener noreferrer">
            Instagram @ebagabe.dev
          </a>
        </div>
      </footer>
    </>
  );
}
