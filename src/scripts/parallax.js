import gsap from "gsap";

export function initParallax({ prefersReducedMotion }) {
  if (prefersReducedMotion || window.innerWidth < 900) return;

  const parallaxItems = document.querySelectorAll(
    ".avatar-card, .profile-mini h1, .content-panel h2, .quick-stats"
  );

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach((item, index) => {
      const depth = (index + 1) * 3;

      gsap.to(item, {
        x: x * depth,
        y: y * depth,
        duration: 0.85,
        ease: "power3.out",
      });
    });
  });
}