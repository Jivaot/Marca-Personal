import gsap from "gsap";

export function initPanelTransitions() {
  const panels = document.querySelectorAll(".content-panel");
  const navLabels = document.querySelectorAll(".nav-tabs label");

  const panelMap = {
    "panel-home": ".home-panel",
    "panel-about": ".about-panel",
    "panel-projects": ".projects-panel",
    "panel-skills": ".skills-panel",
    "panel-contact": ".contact-panel",
  };

  function hideAllPanels() {
  panels.forEach((panel) => {
    gsap.set(panel, {
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
      y: 24,
      scale: 0.985,
      filter: "blur(12px)",
    });
  });
}

  function showPanel(targetPanel) {
    hideAllPanels();

    gsap.set(targetPanel, {
  visibility: "visible",
  pointerEvents: "auto",
});

    gsap.to(targetPanel, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.65,
      ease: "power4.out",
    });

    gsap.fromTo(
      targetPanel.querySelectorAll(
        "h2, .lead-text, blockquote, .quick-stats, .gallery-shell, .contact-list"
      ),
      {
        y: 22,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.62,
        stagger: 0.055,
        delay: 0.08,
        ease: "power4.out",
      }
    );
  }

  gsap.from(".premium-navbar", {
    y: -24,
    opacity: 0,
    filter: "blur(14px)",
    duration: 0.9,
    ease: "power4.out",
  });

  gsap.from(".hero-profile", {
    x: -34,
    opacity: 0,
    filter: "blur(14px)",
    duration: 1,
    delay: 0.12,
    ease: "power4.out",
  });

  gsap.from(".content-area", {
    x: 34,
    opacity: 0,
    filter: "blur(14px)",
    duration: 1,
    delay: 0.18,
    ease: "power4.out",
  });

  const initialPanel = document.querySelector(".home-panel");
  if (initialPanel) {
    showPanel(initialPanel);
  }

  navLabels.forEach((label) => {
    label.addEventListener("click", () => {
      const targetId = label.getAttribute("for");
      const targetPanel = document.querySelector(panelMap[targetId]);

      if (!targetPanel) return;

      showPanel(targetPanel);
    });
  });
}