// Small animation for team cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "rotateY(10deg) scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) scale(1)";
  });
});
