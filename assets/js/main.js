(function () {
  const $ = (sel) => document.querySelector(sel);
  const IMG_BASE = "assets/projetos/";

  const imgPath = (slug, file) => `${IMG_BASE}${slug}/${file}`;
  const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const tags = (list, cls = "tag") => list.map((t) => `<span class="${cls}">${t}</span>`).join("");
  const catLabel = (c) => (c === "empresa" ? "Empresarial" : "Projeto próprio");

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

  /* Hero e sobre */
  const years = new Date().getFullYear() - PROFILE.since;
  $("#heroEyebrow").textContent = `${PROFILE.role} · desde ${PROFILE.since}`;
  $("#heroTitle").innerHTML = `Olá, sou ${PROFILE.name}. <em>Crio sistemas, apps e lojas virtuais que funcionam de verdade.</em>`;
  $("#heroLead").textContent = "Do planejamento ao deploy: aplicativos, e-commerce, sistemas sob medida, infraestrutura e integração de inteligência artificial.";
  $("#heroMeta").innerHTML = `
    <span><strong>${years > 0 ? years + "+" : "1"}</strong>anos de experiência</span>
    <span><strong>${PROJECTS.length}+</strong>projetos entregues</span>
    <span><strong>Web, mobile</strong>e desktop</span>`;
  $("#aboutText").innerHTML = PROFILE.bio.map((p) => `<p>${p}</p>`).join("");
  $("#stackList").innerHTML = PROFILE.stack.map((s) => `<li class="tag">${s}</li>`).join("");
  $("#footerGithub").href = PROFILE.github;
  $("#footerGithub span").textContent = PROFILE.github.replace(/^https?:\/\//, "");
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${PROFILE.brand}`;

  /* Serviços */
  $("#servicesGrid").innerHTML = SERVICES.map((s, i) => `
    <div class="service reveal">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>`).join("");

  /* Projetos */
  const cardHTML = (p) => {
    const cover = p.banner || p.images[0];
    const media = cover
      ? `<img src="${imgPath(p.slug, cover)}" alt="${p.name}" loading="lazy">`
      : `<div class="ph">${initials(p.name)}</div>`;
    const footer = p.links.length
      ? `<div class="card-links">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</div>`
      : `<span class="card-private">Projeto privado</span>`;
    return `
      <article class="card reveal">
        <div class="card-media${p.portrait ? " contain" : ""}">${media}<span class="badge">${catLabel(p.category)}</span></div>
        <div class="card-body">
          <h4>${p.name}</h4>
          <p>${p.summary}</p>
          <div class="tag-row">${tags(p.stack)}</div>
          ${footer}
        </div>
      </article>`;
  };
  $("#projectsPersonal").innerHTML = PROJECTS.filter((p) => p.category === "pessoal").map(cardHTML).join("");
  $("#projectsCompany").innerHTML = PROJECTS.filter((p) => p.category === "empresa").map(cardHTML).join("");

  /* Banner */
  const withCover = PROJECTS.filter((p) => !p.portrait && (p.banner || p.images.length));
  const slides = withCover.length ? withCover : PROJECTS.slice(0, 5);
  $("#bannerTrack").innerHTML = slides.map((p) => {
    const cover = p.banner || p.images[0];
    const media = cover
      ? `<img src="${imgPath(p.slug, cover)}" alt="${p.name}">`
      : `<div class="slide-placeholder"><span>${initials(p.name)}</span></div>`;
    return `
      <div class="slide">
        ${media}
        <div class="slide-info">
          <div class="tag-row">${tags(p.stack)}</div>
          <h3>${p.name}</h3>
          <p>${p.summary}</p>
        </div>
      </div>`;
  }).join("");

  let current = 0;
  let timer;
  const dots = $("#bannerDots");
  dots.innerHTML = slides.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join("");
  const goTo = (i) => {
    current = (i + slides.length) % slides.length;
    $("#bannerTrack").style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll("button").forEach((d, idx) => d.classList.toggle("active", idx === current));
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => goTo(current + 1), 6000); };
  dots.querySelectorAll("button").forEach((d, i) => d.addEventListener("click", () => { goTo(i); restart(); }));
  $("#bannerPrev").addEventListener("click", () => { goTo(current - 1); restart(); });
  $("#bannerNext").addEventListener("click", () => { goTo(current + 1); restart(); });
  $("#banner").addEventListener("mouseenter", () => clearInterval(timer));
  $("#banner").addEventListener("mouseleave", restart);
  goTo(0);
  restart();

  /* Galeria */
  const allImages = PROJECTS.flatMap((p) => p.images.map((file) => ({ slug: p.slug, name: p.name, src: imgPath(p.slug, file) })));
  const galleryProjects = PROJECTS.filter((p) => p.images.length);
  let filter = "todos";
  let visible = [];

  const renderFilters = () => {
    const opts = [{ slug: "todos", name: "Todos" }, ...galleryProjects];
    $("#galleryFilters").innerHTML = opts.map((o) =>
      `<button class="filter${o.slug === filter ? " active" : ""}" data-slug="${o.slug}">${o.name}</button>`).join("");
    $("#galleryFilters").querySelectorAll(".filter").forEach((b) =>
      b.addEventListener("click", () => { filter = b.dataset.slug; renderFilters(); renderGallery(); }));
  };

  const renderGallery = () => {
    const g = $("#gallery");
    if (!allImages.length) {
      g.innerHTML = PROJECTS.slice(0, 6).map((p) => `
        <div class="g-empty"><div><strong>${p.name}</strong>em breve</div></div>`).join("");
      return;
    }
    visible = filter === "todos" ? allImages : allImages.filter((i) => i.slug === filter);
    g.innerHTML = visible.map((img, idx) => `
      <figure class="g-item" data-idx="${idx}">
        <img src="${img.src}" alt="${img.name}" loading="lazy">
        <figcaption>${img.name}</figcaption>
      </figure>`).join("");
    g.querySelectorAll(".g-item").forEach((el) => el.addEventListener("click", () => openLb(+el.dataset.idx)));
  };

  if (galleryProjects.length > 1) renderFilters();
  renderGallery();

  /* Lightbox */
  const lb = $("#lightbox");
  let lbIdx = 0;
  const showLb = () => {
    const img = visible[lbIdx];
    $("#lbImg").src = img.src;
    $("#lbImg").alt = img.name;
    $("#lbCaption").textContent = `${img.name} · ${lbIdx + 1} / ${visible.length}`;
  };
  const openLb = (i) => { lbIdx = i; showLb(); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); };
  const closeLb = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  const stepLb = (d) => { lbIdx = (lbIdx + d + visible.length) % visible.length; showLb(); };
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => stepLb(-1));
  $("#lbNext").addEventListener("click", () => stepLb(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
  });

  /* Animação de entrada */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
