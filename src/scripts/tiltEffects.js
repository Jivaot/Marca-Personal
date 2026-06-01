import gsap from "gsap";

export function initTiltEffects() {
  const tiltItems = document.querySelectorAll(
    ".system-item, .capability-card, .gallery-card, .contact-list a, .quick-stats div"
  );

  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 12;
      const rotateX = (y / rect.height - 0.5) * -12;

      gsap.to(item, {
        rotateX,
        rotateY,
        y: -6,
        scale: 1.018,
        transformPerspective: 900,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.45)",
      });
    });
  });
}