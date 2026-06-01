import { initLenisScroll } from "./lenisScroll.js";
import { initShaderBackground } from "./shaderBackground.js";
import { initPhysicsCursor } from "./physicsCursor.js";
import { initPanelTransitions } from "./panelTransitions.js";
import { initTiltEffects } from "./tiltEffects.js";
import { initParallax } from "./parallax.js";
import { initGallery } from "./gallery.js";

function safeInit(name, callback) {
  try {
    callback();
  } catch (error) {
    console.warn(`[${name}] no pudo iniciarse:`, error);
  }
}

function startExperience() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  safeInit("Lenis", () => initLenisScroll({ prefersReducedMotion }));
  safeInit("Shader background", () => initShaderBackground({ prefersReducedMotion }));
  safeInit("Physics cursor", () => initPhysicsCursor());
  safeInit("Panel transitions", () => initPanelTransitions());
  safeInit("Projects gallery", () => initGallery("projects"));
  safeInit("Skills gallery", () => initGallery("skills"));
  safeInit("Tilt effects", () => initTiltEffects());
  safeInit("Parallax", () => initParallax({ prefersReducedMotion }));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startExperience);
} else {
  startExperience();
}