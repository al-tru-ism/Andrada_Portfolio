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
     RENDER: JOURNAL (index.html only)
     ========================================================= */
  function renderJournal(){
    const list = $("#journalList");
    if(!list || typeof JOURNAL === "undefined") return;
    list.innerHTML = JOURNAL.map(entry => `
      <button class="journal__item" data-modal="journal" data-id="${entry.id}">
        <span class="journal__date">${esc(entry.date)}</span>
        <span class="journal__body">
          <span class="journal__tag">${esc(entry.tag)}</span>
          <h3 class="journal__title">${esc(entry.title)}</h3>
          <p class="journal__excerpt">${esc(entry.excerpt)}</p>
        </span>
      </button>
    `).join("");
  }

  /* =========================================================
     RENDER: PROJECTS (projects.html only)
     ========================================================= */
  function renderProjects(){
    const list = $("#projectsList");
    if(!list || typeof PROJECTS === "undefined") return;
    list.innerHTML = PROJECTS.map(p => `
      <button class="card" data-modal="project" data-id="${p.id}">
        <img class="card__image" src="${esc(p.image)}" alt="" loading="lazy">
        <div class="card__top">
          <h3 class="card__title">${esc(p.title)}</h3>
          <span class="card__status card__status--${p.status === 'progress' ? 'progress' : 'done'}">
            ${p.status === 'progress' ? 'In progress' : 'Done'}
          </span>
        </div>
        <p class="card__desc">${esc(p.summary)}</p>
        <div class="card__tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </button>
    `).join("");
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
    return `
      <img class="modal__image" src="${esc(p.image)}" alt="">
      <p class="modal__eyebrow">$ cat ./projects/${esc(p.id)}.md</p>
      <h2 class="modal__title">${esc(p.title)}</h2>
      <p class="modal__meta">${p.status === 'progress' ? 'Status: In progress' : 'Status: Done'}</p>

      <p class="modal__section-label">Problem</p>
      <div class="modal__body"><p>${esc(p.problem)}</p></div>

      <p class="modal__section-label">Approach</p>
      <div class="modal__body"><ul>${p.approach.map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>

      <p class="modal__section-label">Outcome</p>
      <div class="modal__body"><p>${esc(p.outcome)}</p></div>

      <div class="modal__tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
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

  function journalModalHTML(j){
    return `
      <p class="modal__eyebrow">$ cat ./journal/${esc(j.id)}.md</p>
      <h2 class="modal__title">${esc(j.title)}</h2>
      <p class="modal__meta">${esc(j.tag)} · ${esc(j.date)}</p>
      <div class="modal__body">${j.body.map(p => `<p>${esc(p)}</p>`).join("")}</div>
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
    } else if(type === "journal" && typeof JOURNAL !== "undefined"){
      const item = JOURNAL.find(j => j.id === id);
      if(item) openModal(journalModalHTML(item));
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
  renderJournal();
  renderProjects();
  renderCerts();
  renderExperience();
})();
