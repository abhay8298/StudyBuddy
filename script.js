function scrollToCard(cardId) {
  var cardContentSection = document.getElementById(cardId);
  if (cardContentSection) {
    cardContentSection.scrollIntoView({ behavior: "smooth" });
  }
}

function navigateToPage(url) {
  window.location.href = url; // Replace with your desired URL
}
