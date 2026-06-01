import { initLenisScroll } from "./lenisScroll.js";
import { initShaderBackground } from "./shaderBackground.js";
import { initPhysicsCursor } from "./physicsCursor.js";
import { initPanelTransitions } from "./panelTransitions.js";
import { initTiltEffects } from "./tiltEffects.js";
import { initParallax } from "./parallax.js";
import { initGallery } from "./gallery.js";

function startExperience() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  initLenisScroll({ prefersReducedMotion });
  initShaderBackground({ prefersReducedMotion });
  initPhysicsCursor();
  initPanelTransitions();
  initGallery("projects");
  initGallery("skills");
  initTiltEffects();
  initParallax({ prefersReducedMotion });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startExperience);
} else {
  startExperience();
}