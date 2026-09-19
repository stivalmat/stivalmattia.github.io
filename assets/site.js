const data = window.SITE_DATA || { publicationGroups: [], talkGroups: [] };

function link(label, url) {
  if (!url) return "";
  return `<a class="mini-link" href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`;
}

function accordion(group, kind, initiallyOpen = false) {
  const items = group.items.map(item => {
    const links = [link("Paper", item.paper), link("DOI", item.doi), link("Slides", item.slides), link("Poster", item.poster)].join("");
    return `<article class="${kind === "publication" ? "output-item" : "talk-item"}">
      <div class="item-year">${item.year || ""}</div>
      <div><p class="item-title">${item.title}</p><p class="item-detail">${item.detail || ""}</p></div>
      <div class="item-links">${links}</div>
    </article>`;
  }).join("");
  return `<details class="accordion" ${initiallyOpen ? "open" : ""}>
    <summary><span class="accordion-title">${group.label}</span><span class="accordion-count">${group.items.length} items</span><span class="accordion-icon" aria-hidden="true">+</span></summary>
    <div class="item-list">${items}</div>
  </details>`;
}

const publicationTarget = document.querySelector("#publication-groups");
const talkTarget = document.querySelector("#talk-groups");
if (publicationTarget) publicationTarget.innerHTML = data.publicationGroups.map(g => accordion(g, "publication", false)).join("");
if (talkTarget) talkTarget.innerHTML = data.talkGroups.map(g => accordion(g, "talk", false)).join("");
