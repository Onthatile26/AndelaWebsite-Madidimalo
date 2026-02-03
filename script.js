const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  alert("Mobile menu placeholder – implement slide menu here.");
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {

  // collect ALL possible mega menus
  const MENUS = [
    document.getElementById("whyAndelaMenu"),
    document.getElementById("useCasesMenu"),
    document.querySelector(".solutions-content"),
    document.querySelector(".pf-mega"),
    document.getElementById("resourceSection"),
    document.getElementById("miniMega")
  ].filter(Boolean);

  // hide all
  function closeAll() {
    MENUS.forEach(m => {
      m.style.display = "none";
      m.classList.remove("open");
    });
  }

  // toggle one
  function toggle(menu) {
    if (!menu) return;
    const isOpen = menu.style.display === "block";
    closeAll();
    menu.style.display = isOpen ? "none" : "block";
    menu.classList.toggle("open", !isOpen);
  }

  closeAll();

  // ===== BUTTON → MENU MAP =====
  const MAP = [
    ["whyAndelaBtn", "whyAndelaMenu"],
    ["useCasesBtn", "useCasesMenu"],
    ["platform-btn", ".pf-mega"],
    ["resourceBtn", "resourceSection"],
    ["TalentBtn", "miniMega"]
  ];

  MAP.forEach(([btnId, menuSel]) => {
    const btn = document.getElementById(btnId);
    const menu =
      document.getElementById(menuSel) ||
      document.querySelector(menuSel);

    if (btn && menu) {
      btn.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        toggle(menu);
      });
    }
  });

  // ===== SOLUTIONS (DETAILS / SUMMARY / LINK SAFE) =====
  document.querySelectorAll(".solutions-btn, summary").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const content = document.querySelector(".solutions-content");
      toggle(content);
    });
  });

  // ===== CLICK ANY LINK WITH data-menu =====
  document.querySelectorAll("[data-menu]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const menu = document.getElementById(link.dataset.menu);
      toggle(menu);
    });
  });

  // ===== CLICK OUTSIDE CLOSES EVERYTHING =====
  document.addEventListener("click", e => {
    if (!e.target.closest(
      ".mega-menu, .why-mega-menu, .solutions-content, .pf-mega, .resource-section, #miniMega, a"
    )) {
      closeAll();
    }
  });

  // ===== ESC KEY CLOSE =====
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAll();
  });

});
