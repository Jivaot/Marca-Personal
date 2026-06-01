import { initLenisScroll } from "./lenisScroll.js";
import { initShaderBackground } from "./shaderBackground.js";
import { initPhysicsCursor } from "./physicsCursor.js";
import { initPanelTransitions } from "./panelTransitions.js";
import { initTiltEffects } from "./tiltEffects.js";
import { initParallax } from "./parallax.js";
import { initGallery } from "./gallery.js";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

initLenisScroll({ prefersReducedMotion });
initShaderBackground({ prefersReducedMotion });
initPhysicsCursor();
initPanelTransitions();
initTiltEffects();
initParallax({ prefersReducedMotion });
initGallery("projects");
initGallery("skills");