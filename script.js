function scrollToCard(cardId) {
  var cardContentSection = document.getElementById(cardId);
  if (cardContentSection) {
    cardContentSection.scrollIntoView({ behavior: "smooth" });
  }
}
