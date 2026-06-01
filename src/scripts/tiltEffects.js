import gsap from "gsap";

export function initTiltEffects() {
  const tiltItems = document.querySelectorAll(
    ".gallery-card, .contact-list a, .quick-stats div"
  );

  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      if (item.getAttribute("aria-hidden") === "true") return;

      const rect = item.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = (y / rect.height - 0.5) * -10;

      gsap.to(item, {
        rotateX,
        rotateY,
        y: -6,
        scale: 1.018,
        transformPerspective: 900,
        duration: 0.28,
        ease: "power3.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      if (item.getAttribute("aria-hidden") === "true") return;

      gsap.to(item, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "elastic.out(1, 0.45)",
      });
    });
  });
}