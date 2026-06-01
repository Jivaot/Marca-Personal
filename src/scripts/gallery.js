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

  function setInitialState() {
    cards.forEach((card, index) => {
      const isActive = index === currentIndex;

      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-hidden", String(!isActive));

      gsap.set(card, {
        autoAlpha: isActive ? 1 : 0,
        visibility: isActive ? "visible" : "hidden",
        pointerEvents: isActive ? "auto" : "none",
        x: isActive ? 0 : 80,
        scale: isActive ? 1 : 0.94,
        rotateY: isActive ? 0 : -12,
        filter: isActive ? "blur(0px)" : "blur(12px)",
        zIndex: isActive ? 3 : 1,
      });
    });

    if (currentLabel) {
      currentLabel.textContent = formatNumber(currentIndex + 1);
    }
  }

  function goToSlide(nextIndex, direction = "next") {
    if (isAnimating || nextIndex === currentIndex) return;

    isAnimating = true;

    const currentCard = cards[currentIndex];
    const nextCard = cards[nextIndex];

    const exitX = direction === "next" ? -70 : 70;
    const enterX = direction === "next" ? 90 : -90;
    const enterRotate = direction === "next" ? -12 : 12;

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

    gsap.killTweensOf([currentCard, nextCard]);

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
      defaults: {
        ease: "power4.out",
      },
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
          scale: 1,
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
        rotateY: direction === "next" ? 12 : -12,
        filter: "blur(14px)",
        duration: 0.42,
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
      },
      0.08
    );
  }

  nextButton?.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    goToSlide(nextIndex, "next");
  });

  prevButton?.addEventListener("click", () => {
    const nextIndex = (currentIndex - 1 + cards.length) % cards.length;
    goToSlide(nextIndex, "prev");
  });

  setInitialState();
}