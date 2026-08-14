(function(){
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (str="") => String(str).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));

  /* ---------- footer year (present on every page) ---------- */
  const yearEl = $("#year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     RENDER: BLOG
     ========================================================= */
  function renderBlog(){
    const list = $("#blogList");
    if(!list) return;
    const entries = typeof BLOG !== "undefined" ? BLOG : (typeof JOURNAL !== "undefined" ? JOURNAL : []);
    if(!entries.length) return;

    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const entry = id ? entries.find(item => item.id === id) : null;

    if(entry){
      const gallery = (entry.images && entry.images.length ? entry.images : [{ src: entry.coverImage || "assets/images/placeholder-project.svg", alt: entry.title || "Blog image", caption: "Placeholder image — replace this with your article artwork or a real photo." }]);
      list.innerHTML = `
        <article class="detail-page">
          <p class="modal__eyebrow">$ cat ./blog/${esc(entry.id)}.md</p>
          <h1 class="section__title">${esc(entry.title || "Untitled article")}</h1>
          <p class="modal__meta">${esc(entry.tag || "General")} · ${esc(entry.date || "Date TBD")}</p>
          <img class="modal__image" src="${esc(entry.coverImage || "assets/images/placeholder-project.svg")}" alt="${esc(entry.title || "Blog image")}">
          <div class="modal__body">${(entry.body || ["Placeholder content. Replace this with the actual write-up for your blog post."]).map(paragraph => `<p>${esc(paragraph)}</p>`).join("")}</div>
          ${gallery.map(img => `
            <figure class="modal__gallery-item" style="margin-top: 16px;">
              <img class="modal__gallery-image" src="${esc(img.src)}" alt="${esc(img.alt || "")}" loading="lazy">
              ${img.caption ? `<figcaption class="modal__caption">${esc(img.caption)}</figcaption>` : ""}
            </figure>
          `).join("")}
          <p style="margin-top: 24px;"><a class="modal__link" href="blog.html">$ back to blog →</a></p>
        </article>
      `;
      return;
    }

    list.innerHTML = entries.map(entry => {
      const imageSrc = entry.coverImage || "assets/images/placeholder-project.svg";
      return `
        <a class="blog-card" href="blog.html?id=${entry.id}">
          <img class="blog-card__image" src="${esc(imageSrc)}" alt="${esc(entry.title)}" loading="lazy">
          <div class="blog-card__body">
            <span class="blog-card__meta">${esc(entry.tag || "Update")} · ${esc(entry.date || "Soon")}</span>
            <h3 class="blog-card__title">${esc(entry.title || "Untitled post")}</h3>
            <p class="blog-card__excerpt">${esc(entry.excerpt || "Placeholder summary. Replace this text with your own blog post preview.")}</p>
          </div>
        </a>
      `;
    }).join("");
  }

  /* =========================================================
     RENDER: PROJECTS (projects.html only)
     ========================================================= */
  function renderProjects(){
    const list = $("#projectsList");
    if(!list || typeof PROJECTS === "undefined") return;

    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const project = id ? PROJECTS.find(p => p.id === id) : null;

    if(project){
      const images = (project.images && project.images.length) ? project.images : [{ src: project.image || "assets/images/placeholder-project.svg", alt: project.title || "Project image", caption: "Placeholder image — replace with your own project photo or screenshot." }];
      const media = project.video ? `<video class="modal__video" controls src="${esc(project.video)}"></video>` : images.map(img => `
        <figure class="modal__gallery-item">
          <img class="modal__gallery-image" src="${esc(img.src)}" alt="${esc(img.alt || "")}" loading="lazy">
          ${img.caption ? `<figcaption class="modal__caption">${esc(img.caption)}</figcaption>` : ""}
        </figure>
      `).join("");

      list.innerHTML = `
        <article class="detail-page">
          <p class="modal__eyebrow">$ cat ./projects/${esc(project.id)}.md</p>
          <h1 class="section__title">${esc(project.title || "Untitled project")}</h1>
          <p class="modal__meta">${project.status === 'progress' ? 'Status: In progress' : 'Status: Done'}</p>
          ${media}
          <p class="card__desc">${esc(project.summary || "Placeholder summary. Replace this with a project description.")}</p>
          <p class="modal__section-label">Problem</p>
          <div class="modal__body"><p>${esc(project.problem || "Placeholder problem statement. Replace with the real challenge this project addressed.")}</p></div>
          <p class="modal__section-label">Approach</p>
          <div class="modal__body"><ul>${(project.approach || ["Replace this item with the actual approach or workflow used in the project."]).map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>
          <p class="modal__section-label">Outcome</p>
          <div class="modal__body"><p>${esc(project.outcome || "Placeholder outcome. Add what this project achieved or what you learned from it.")}</p></div>
          <div class="modal__tags">${(project.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
          ${project.link ? `<p style="margin-top: 20px;"><a class="modal__link" href="${esc(project.link)}" target="_blank" rel="noopener">$ open repository →</a></p>` : ""}
          <p style="margin-top: 24px;"><a class="modal__link" href="projects.html">$ back to projects →</a></p>
        </article>
      `;
      return;
    }

    list.innerHTML = PROJECTS.map(p => {
      const imageSrc = p.image || "assets/images/placeholder-project.svg";
      const media = p.video ? `<div class="card__video-wrap"><video class="card__video" src="${esc(p.video)}" preload="metadata"></video><div class="card__play">▶</div></div>` : `<img class="card__image" src="${esc(imageSrc)}" alt="${esc(p.title)}" loading="lazy">`;
      return `
        <a class="card" href="projects.html?id=${p.id}">
          ${media}
          <div class="card__top">
            <h3 class="card__title">${esc(p.title || "Untitled project")}</h3>
            <span class="card__status card__status--${p.status === 'progress' ? 'progress' : 'done'}">
              ${p.status === 'progress' ? 'In progress' : 'Done'}
            </span>
          </div>
          <p class="card__desc">${esc(p.summary || "Placeholder summary. Replace this with a project description.")}</p>
          <div class="card__tags">${(p.tags||[]).map(t => `<span>${esc(t)}</span>`).join("")}</div>
        </a>
      `;
    }).join("");
  }

  /* =========================================================
     RENDER: CERTIFICATIONS (certifications.html only)
     ========================================================= */
  function renderCerts(){
    const list = $("#certsList");
    if(!list || typeof CERTIFICATIONS === "undefined") return;
    list.innerHTML = CERTIFICATIONS.map(c => `
      <button class="card card--cert" data-modal="cert" data-id="${c.id}">
        <div class="card__top">
          <h3 class="card__title">${esc(c.title)}</h3>
        </div>
        <p class="card__meta">${esc(c.issuer)} · ${esc(c.date)}</p>
        <p class="card__desc">${esc(c.description)}</p>
      </button>
    `).join("");
  }

  /* =========================================================
     RENDER: EXPERIENCE (experience.html only)
     ========================================================= */
  function renderExperience(){
    const list = $("#experienceList");
    if(!list || typeof EXPERIENCE === "undefined") return;
    list.innerHTML = EXPERIENCE.map(e => `
      <div class="timeline__item">
        ${e.logo ? `<img class="timeline__logo" src="${esc(e.logo)}" alt="${esc(e.org)} logo">` : ""}
        <span class="timeline__dot"></span>
        <p class="timeline__period">${esc(e.period)}</p>
        <h3 class="timeline__role">${esc(e.role)}</h3>
        <p class="timeline__org">${esc(e.org)}</p>
        <ul class="timeline__points">
          ${e.points.map(pt => `<li>${esc(pt)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  /* =========================================================
     MODAL (shared across pages that need it)
     ========================================================= */
  const modal = $("#modal");
  const modalContent = $("#modalContent");

  function openModal(html){
    if(!modal || !modalContent) return;
    modalContent.innerHTML = html;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal(){
    if(!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $$('[data-close-modal]').forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

  function projectModalHTML(p){
    const images = (p.images && p.images.length) ? p.images : [{ src: p.image || "assets/images/placeholder-project.svg", alt: p.title || "Project image", caption: "Placeholder image — replace with your own project photo or screenshot." }];
    const media = p.video ? `<video class="modal__video" controls src="${esc(p.video)}"></video>` : galleryHTML(images);
    return `
      ${media}
      <p class="modal__eyebrow">$ cat ./projects/${esc(p.id)}.md</p>
      <h2 class="modal__title">${esc(p.title || "Untitled project")}</h2>
      <p class="modal__meta">${p.status === 'progress' ? 'Status: In progress' : 'Status: Done'}</p>

      <p class="modal__section-label">Problem</p>
      <div class="modal__body"><p>${esc(p.problem || "Placeholder problem statement. Replace with the real challenge this project addressed.")}</p></div>

      <p class="modal__section-label">Approach</p>
      <div class="modal__body"><ul>${(p.approach||["Replace this item with the actual approach or workflow used in the project."]).map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>

      <p class="modal__section-label">Outcome</p>
      <div class="modal__body"><p>${esc(p.outcome || "Placeholder outcome. Add what this project achieved or what you learned from it.")}</p></div>

      <div class="modal__tags">${(p.tags||[]).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.link ? `<a class="modal__link" href="${esc(p.link)}" target="_blank" rel="noopener">$ open repository →</a>` : ""}
    `;
  }

  function certModalHTML(c){
    return `
      <p class="modal__eyebrow">$ cat ./certifications/${esc(c.id)}.md</p>
      <h2 class="modal__title">${esc(c.title)}</h2>
      <p class="modal__meta">${esc(c.issuer)} · ${esc(c.date)}${c.credentialId ? ` · ID: ${esc(c.credentialId)}` : ""}</p>
      <div class="modal__body"><p>${esc(c.description)}</p></div>
      ${c.link ? `<a class="modal__link" href="${esc(c.link)}" target="_blank" rel="noopener">$ verify credential →</a>` : ""}
    `;
  }

  function galleryHTML(images){
    if(!images || !images.length) return "";
    return `
      <div class="modal__gallery">
        ${images.map(img => `
          <figure class="modal__gallery-item">
            <img class="modal__gallery-image" src="${esc(img.src)}" alt="${esc(img.alt || "")}" loading="lazy">
            ${img.caption ? `<figcaption class="modal__caption">${esc(img.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `;
  }

  function journalModalHTML(j){
    const images = (j.images && j.images.length) ? j.images : [{ src: j.coverImage || "assets/images/placeholder-project.svg", alt: j.title || "Blog image", caption: "Placeholder image — replace this with your article artwork or a real photo." }];
    return `
      <p class="modal__eyebrow">$ cat ./blog/${esc(j.id)}.md</p>
      <h2 class="modal__title">${esc(j.title || "Untitled article")}</h2>
      <p class="modal__meta">${esc(j.tag || "General")} · ${esc(j.date || "Date TBD")}</p>
      ${galleryHTML(images)}
      <div class="modal__body">${(j.body || ["Placeholder content. Replace this with the actual write-up for your blog post."]).map(p => `<p>${esc(p)}</p>`).join("")}</div>
    `;
  }

  function experienceModalHTML(e){
    return `
      <p class="modal__eyebrow">$ cat ./experience/${esc(e.id)}.md</p>
      <h2 class="modal__title">${esc(e.role)}</h2>
      <p class="modal__meta">${esc(e.org)} · ${esc(e.period)}</p>
      ${e.summary ? `<div class="modal__body"><p>${esc(e.summary)}</p></div>` : ""}
      ${galleryHTML(e.images)}
      <p class="modal__section-label">Highlights</p>
      <div class="modal__body"><ul>${e.points.map(pt => `<li>${esc(pt)}</li>`).join("")}</ul></div>
    `;
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-modal]");
    if(!trigger) return;
    const type = trigger.dataset.modal;
    const id = trigger.dataset.id;

    if(type === "project" && typeof PROJECTS !== "undefined"){
      const item = PROJECTS.find(p => p.id === id);
      if(item) openModal(projectModalHTML(item));
    } else if(type === "cert" && typeof CERTIFICATIONS !== "undefined"){
      const item = CERTIFICATIONS.find(c => c.id === id);
      if(item) openModal(certModalHTML(item));
    } else if(type === "journal" && typeof BLOG !== "undefined"){
      const item = BLOG.find(j => j.id === id) || JOURNAL.find(j => j.id === id);
      if(item) openModal(journalModalHTML(item));
    } else if(type === "experience" && typeof EXPERIENCE !== "undefined"){
      const item = EXPERIENCE.find(e => e.id === id);
      if(item) openModal(experienceModalHTML(item));
    }
  });

  /* =========================================================
     MOBILE NAV TOGGLE (present on every page)
     ========================================================= */
  const navToggle = $("#navToggle");
  const navLinksEl = $(".nav__links");
  navToggle?.addEventListener("click", () => {
    const open = navLinksEl.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  /* =========================================================
     INIT — each function no-ops if its container isn't on this page
     ========================================================= */
  renderBlog();
  renderProjects();
  renderCerts();
  renderExperience();
})();
