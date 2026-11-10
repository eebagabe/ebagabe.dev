import { useEffect, useRef, useState } from "react";
import { FEATURED_COUNT, PROJECTS, type Project } from "./projects";

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project) {
      setIdx(0);
      if (!d.open) d.showModal();
      document.documentElement.classList.add("no-scroll");
    } else if (d.open) {
      d.close();
    }
    return () => document.documentElement.classList.remove("no-scroll");
  }, [project]);

  if (!project) return <dialog ref={ref} className="pdialog" onClose={onClose} />;

  const shots = project.shots;
  const shot = shots[idx];
  const go = (n: number) => setIdx((n + shots.length) % shots.length);

  return (
    <dialog
      ref={ref}
      className="pdialog"
      aria-labelledby="pd-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(idx + 1);
        if (e.key === "ArrowLeft") go(idx - 1);
      }}
    >
      <div className="pd-in">
        <div className="pd-head">
          <div>
            {project.tag && <span className="ptag">{project.tag}</span>}
            <h3 id="pd-title">{project.name}</h3>
          </div>
          <button type="button" className="pd-close" aria-label="Fechar detalhes" onClick={() => ref.current?.close()}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>

        <div className="pd-gallery">
          <div className={`pd-stage ${shot.kind}`}>
            <img src={shot.src} alt={shot.alt} />
            <button type="button" className="pd-nav prev" aria-label="Imagem anterior" onClick={() => go(idx - 1)}>‹</button>
            <button type="button" className="pd-nav next" aria-label="Próxima imagem" onClick={() => go(idx + 1)}>›</button>
            <span className="pd-count" aria-live="polite">{idx + 1} / {shots.length}</span>
          </div>
          <ul className="pd-thumbs" aria-label="Imagens do projeto">
            {shots.map((s, i) => (
              <li key={s.src}>
                <button
                  type="button"
                  className={`${s.kind} ${i === idx ? "is-on" : ""}`}
                  aria-label={`Ver imagem ${i + 1}: ${s.alt}`}
                  aria-current={i === idx}
                  onClick={() => setIdx(i)}
                >
                  <img src={s.src} alt="" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pd-body">
          <p>{project.description}</p>
          <ul className="pstack" aria-label="Tecnologias">
            {project.stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {project.link && (
            <a className="btn btn-primary btn-sm" href={project.link} target="_blank" rel="noopener noreferrer">
              Visitar {hostOf(project.link)}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [all, setAll] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const firstExtra = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const list = all ? PROJECTS : PROJECTS.slice(0, FEATURED_COUNT);
  const hasMore = PROJECTS.length > FEATURED_COUNT;

  useEffect(() => {
    if (all) firstExtra.current?.focus();
  }, [all]);

  return (
    <section className="section projects" id="projetos" aria-labelledby="h-proj">
      <div className="wrap">
        <p className="eyebrow">Projetos</p>
        <h2 id="h-proj">Alguns trabalhos recentes.</h2>
        <ul className="pgrid" id="lista-projetos">
          {list.map((p, i) => (
            <li key={p.slug}>
              <button
                type="button"
                className="pcard"
                ref={i === FEATURED_COUNT ? firstExtra : undefined}
                aria-haspopup="dialog"
                onClick={(e) => {
                  opener.current = e.currentTarget;
                  setActive(p);
                }}
              >
                <span className="pthumb">
                  <img src={p.shots[0].src} alt="" loading="lazy" width="1440" height="900" />
                </span>
                <span className="pinfo">
                  <span className="ptitle">
                    <span className="pname">{p.name}</span>
                    {p.tag && <span className="ptag">{p.tag}</span>}
                  </span>
                  <span className="pdesc">{p.description}</span>
                  <span className="pmeta">
                    <span className="pstack-inline">{p.stack.join(" · ")}</span>
                    <span className="pmore" aria-hidden="true">Ver detalhes →</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            className="btn btn-ghost pall"
            aria-expanded={all}
            aria-controls="lista-projetos"
            onClick={() => setAll((a) => !a)}
          >
            {all ? "Ver menos" : `Ver mais (${PROJECTS.length - FEATURED_COUNT})`}
          </button>
        )}
      </div>
      <ProjectDialog
        project={active}
        onClose={() => {
          setActive(null);
          opener.current?.focus();
        }}
      />
    </section>
  );
}
