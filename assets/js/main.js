(function () {
  const $ = (sel) => document.querySelector(sel);
  const IMG_BASE = "assets/projetos/";

  const imgPath = (slug, file) => `${IMG_BASE}${slug}/${file}`;
  const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const tags = (list, cls = "tag") => list.map((t) => `<span class="${cls}">${t}</span>`).join("");
  const catLabel = (c) => ({ empresa: "Empresarial", cliente: "Cliente" }[c] || "Projeto próprio");
  const waLink = (msg) => `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(msg)}`;
  const WA_DEFAULT = "Olá, Gabriel! Vi seu portfólio e quero conversar sobre um projeto.";

  /* Tema */
  const root = document.documentElement;
  const getStored = () => { try { return localStorage.getItem("theme"); } catch { return null; } };
  const setStored = (v) => { try { localStorage.setItem("theme", v); } catch {} };
  const applyTheme = (t) => {
    root.setAttribute("data-theme", t);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", t === "light" ? "#f3f0e9" : "#16181d");
  };
  applyTheme(getStored() || "dark");
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    setStored(next);
  });

  /* Contato */
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(WA_DEFAULT);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $("#contactInstagram").href = PROFILE.instagram;
  $("#footerInstagram").href = PROFILE.instagram;
  $("#contactPhone").textContent = `WhatsApp ${PROFILE.whatsappLabel}`;

  /* Hero e sobre */
  const years = new Date().getFullYear() - PROFILE.since;
  $("#heroEyebrow").textContent = `${PROFILE.role} · desde ${PROFILE.since}`;
  $("#heroTitle").innerHTML = `Olá, sou ${PROFILE.name}. <em>Crio sites, sistemas e lojas virtuais que trazem resultado.</em>`;
  $("#heroLead").textContent = "Do planejamento ao deploy, você fala direto com quem desenvolve e acompanha cada etapa.";
  $("#heroMeta").innerHTML = `
    <span><strong>${years > 0 ? years + "+" : "1"}</strong>anos de experiência</span>
    <span><strong>${PROJECTS.length}+</strong>projetos entregues</span>
    <span><strong>Web, mobile</strong>e desktop</span>`;
  $("#aboutText").innerHTML = PROFILE.bio.map((p) => `<p>${p}</p>`).join("");
  $("#stackList").innerHTML = PROFILE.stack.map((s) => `<li class="tag">${s}</li>`).join("");
  $("#footerGithub").href = PROFILE.github;
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${PROFILE.brand}`;

  /* Serviços */
  $("#servicesGrid").innerHTML = SERVICES.map((s, i) => `
    <div class="service reveal">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>`).join("");

  /* Projetos */
  const cover = (p) => p.images[0] || (p.mobile || [])[0];
  $("#projects").innerHTML = PROJECTS.map((p, i) => {
    const c = cover(p);
    const media = c
      ? `<img src="${imgPath(p.slug, c)}" alt="${p.name}" loading="lazy">`
      : `<div class="ph">${initials(p.name)}</div>`;
    return `
      <button class="card reveal" data-idx="${i}" aria-label="Ver detalhes de ${p.name}">
        <div class="card-media${p.portrait ? " contain" : ""}">${media}<span class="badge">${catLabel(p.category)}</span></div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.summary}</p>
          <div class="tag-row">${tags(p.stack)}</div>
          <span class="card-more">Ver detalhes →</span>
        </div>
      </button>`;
  }).join("");

  /* Detalhes do projeto */
  const detail = $("#detail");
  const openDetail = (p) => {
    const links = p.links.length
      ? p.links.map((l) => `<a class="btn btn-ghost btn-sm" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")
      : `<span class="card-private">Projeto privado, sem link público</span>`;
    const desktop = p.images.map((f) => `<img src="${imgPath(p.slug, f)}" alt="${p.name}" loading="lazy">`).join("");
    const mobile = (p.mobile || []).map((f) => `<img src="${imgPath(p.slug, f)}" alt="${p.name} no celular" loading="lazy">`).join("");
    $("#detailBody").innerHTML = `
      <span class="badge-inline">${catLabel(p.category)}</span>
      <h2 id="detailTitle">${p.name}</h2>
      <p class="detail-summary">${p.summary}</p>
      <div class="tag-row">${tags(p.stack)}</div>
      <div class="detail-links">${links}</div>
      ${desktop ? `<div class="detail-shots">${desktop}</div>` : ""}
      ${mobile ? `<div class="detail-mobile">${mobile}</div>` : ""}
      <div class="detail-cta">
        <p>Quer algo parecido para o seu negócio?</p>
        <a class="btn btn-primary" href="${waLink(`Olá, Gabriel! Vi o projeto ${p.name} no seu portfólio e quero algo parecido.`)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><use href="#wa"/></svg>
          Falar no WhatsApp
        </a>
      </div>`;
    detail.showModal();
    detail.scrollTop = 0;
  };
  $("#projects").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openDetail(PROJECTS[+card.dataset.idx]);
  });
  $("#detailClose").addEventListener("click", () => detail.close());
  detail.addEventListener("click", (e) => { if (e.target === detail) detail.close(); });

  /* Animação de entrada */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
