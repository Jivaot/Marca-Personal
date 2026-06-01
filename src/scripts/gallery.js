import gsap from "gsap";

export function initGallery(name) {
  const gallery = document.querySelector(`[data-gallery="${name}"]`);
  if (!gallery) return;

  const cards = Array.from(gallery.querySelectorAll(".gallery-card"));
  const nextButton = gallery.querySelector(`[data-next="${name}"]`);
  const prevButton = gallery.querySelector(`[data-prev="${name}"]`);
  const currentLabel = gallery.querySelector(`[data-current="${name}"]`);

  if (!cards.length) return;

  let currentIndex = 0;
  let isAnimating = false;

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  function setCardState() {
    cards.forEach((card, index) => {
      const active = index === currentIndex;

      card.classList.toggle("is-active", active);
      card.setAttribute("aria-hidden", String(!active));

      gsap.set(card, {
        autoAlpha: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
        pointerEvents: active ? "auto" : "none",
        x: active ? 0 : 80,
        scale: active ? 1 : 0.94,
        rotateY: active ? 0 : -12,
        filter: active ? "blur(0px)" : "blur(12px)",
        zIndex: active ? 3 : 1,
      });
    });

    if (currentLabel) {
      currentLabel.textContent = formatNumber(currentIndex + 1);
    }
  }

  function moveTo(nextIndex, direction) {
    if (isAnimating) return;

    isAnimating = true;

    const currentCard = cards[currentIndex];
    const nextCard = cards[nextIndex];

    const exitX = direction === "next" ? -80 : 80;
    const enterX = direction === "next" ? 90 : -90;
    const enterRotate = direction === "next" ? -12 : 12;
    const exitRotate = direction === "next" ? 12 : -12;

    gsap.killTweensOf(cards);

    cards.forEach((card) => {
      if (card !== currentCard && card !== nextCard) {
        card.classList.remove("is-active");
        card.setAttribute("aria-hidden", "true");

        gsap.set(card, {
          autoAlpha: 0,
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        });
      }
    });

    nextCard.classList.add("is-active");
    nextCard.setAttribute("aria-hidden", "false");

    gsap.set(nextCard, {
      autoAlpha: 0,
      visibility: "visible",
      pointerEvents: "auto",
      x: enterX,
      scale: 0.94,
      rotateY: enterRotate,
      filter: "blur(14px)",
      zIndex: 4,
    });

    const timeline = gsap.timeline({
      onComplete: () => {
        currentCard.classList.remove("is-active");
        currentCard.setAttribute("aria-hidden", "true");

        gsap.set(currentCard, {
          autoAlpha: 0,
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        });

        gsap.set(nextCard, {
          autoAlpha: 1,
          visibility: "visible",
          pointerEvents: "auto",
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          filter: "blur(0px)",
          zIndex: 3,
        });

        currentIndex = nextIndex;

        if (currentLabel) {
          currentLabel.textContent = formatNumber(currentIndex + 1);
        }

        isAnimating = false;
      },
    });

    timeline.to(
      currentCard,
      {
        autoAlpha: 0,
        x: exitX,
        scale: 0.94,
        rotateY: exitRotate,
        filter: "blur(14px)",
        duration: 0.42,
        ease: "power3.inOut",
      },
      0
    );

    timeline.to(
      nextCard,
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
        filter: "blur(0px)",
        duration: 0.62,
        ease: "power4.out",
      },
      0.08
    );
  }

  nextButton?.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    moveTo(nextIndex, "next");
  });

  prevButton?.addEventListener("click", () => {
    const nextIndex = (currentIndex - 1 + cards.length) % cards.length;
    moveTo(nextIndex, "prev");
  });

  setCardState();
}