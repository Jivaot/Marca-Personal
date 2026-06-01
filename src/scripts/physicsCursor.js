export function initPhysicsCursor() {
  if (window.innerWidth < 720) return;

  const cursor = document.createElement("div");
  cursor.className = "cursor-orb";
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let velocityX = 0;
  let velocityY = 0;

  const stiffness = 0.16;
  const damping = 0.72;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animateCursor() {
    const forceX = (mouseX - cursorX) * stiffness;
    const forceY = (mouseY - cursorY) * stiffness;

    velocityX = (velocityX + forceX) * damping;
    velocityY = (velocityY + forceY) * damping;

    cursorX += velocityX;
    cursorY += velocityY;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const interactiveItems = document.querySelectorAll(
    ".nav-tabs label, .nav-brand, .avatar-card, .quick-stats div, .system-item, .capability-card, .gallery-card, .gallery-controls button, .contact-list a"
  );

  interactiveItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-active");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-active");
    });
  });
}