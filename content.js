
(() => {
  document.addEventListener("keydown", event => {
    // Ne pas interférer avec les champs de texte
    if (
      ["INPUT", "TEXTAREA"].includes(event.target.tagName) ||
      event.target.isContentEditable
    ) return;

    // Ctrl + Maj + N : créer un dépôt
    if (
      event.ctrlKey &&
      event.shiftKey &&
      event.key.toLowerCase() === "n"
    ) {
      event.preventDefault();
      window.location.href = "https://github.com/new";
      return;
    }

    // Ctrl + Maj + P : ouvrir les paramètres du profil
    if (
      event.ctrlKey &&
      event.shiftKey &&
      event.key.toLowerCase() === "p"
    ) {
      event.preventDefault();
      window.location.href = "https://github.com/settings/profile";
      return;
    }

    // Ctrl + Maj + F : rechercher des projets GitHub
    if (
      event.ctrlKey &&
      event.shiftKey &&
      event.key.toLowerCase() === "f"
    ) {
      event.preventDefault();
      window.location.href = "https://github.com/search?q=&type=repositories";
    }
  });
})();
