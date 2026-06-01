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
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
    });

    gsap.to(targetPanel, {
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
        y: 18,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.55,
        stagger: 0.05,
        delay: 0.06,
        ease: "power4.out",
      }
    );
  }

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