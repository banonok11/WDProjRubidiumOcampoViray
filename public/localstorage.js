document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("preferenceForm");
  const message = document.getElementById("savedMessage");
  const resetBtn = document.getElementById("resetPreferences");

  const savedUser = JSON.parse(localStorage.getItem("metaRoyaleUser"));


  if (savedUser) {
    if (message) {
      message.textContent =
        "Welcome back " + savedUser.name +
        "! Favorite archetype: " + savedUser.archetype;
    }

    highlightFavorite(savedUser.archetype);
  }


  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("playerName").value;
      const archetype = document.getElementById("favoriteArchetype").value;

      const userData = { name, archetype };

      localStorage.setItem("metaRoyaleUser", JSON.stringify(userData));

      if (message) {
        message.textContent =
          "Preferences saved! Welcome " + name +
          "! Favorite archetype: " + archetype;
      }

      highlightFavorite(archetype);
      form.reset();
    });
  }


  if (resetBtn) {
    resetBtn.addEventListener("click", function() {
      localStorage.removeItem("metaRoyaleUser");
      if (message) message.textContent = "Preferences cleared.";
      removeHighlights();
    });
  }

});


function highlightFavorite(archetype) {
  removeHighlights();

  const cards = document.querySelectorAll(".card-box");
  cards.forEach(card => {
    const cardArchetypes = card.getAttribute("data-archetype");
    if (cardArchetypes) {
      const archetypeList = cardArchetypes.split(" ");
      if (archetypeList.includes(archetype)) {
        card.classList.add("favorite-highlight");
      }
    }
  });

  const archetypeBoxes = document.querySelectorAll(".archetype-box");
  archetypeBoxes.forEach(box => {
    const p = box.querySelector("a p");
    if (p && p.textContent.toLowerCase() === archetype.toLowerCase()) {
      box.classList.add("favorite-highlight");
    }
  });
}

function removeHighlights() {
  document.querySelectorAll(".card-box, .archetype-box")
    .forEach(el => el.classList.remove("favorite-highlight"));
}


function removeHighlights() {
  document.querySelectorAll(".card-box")
    .forEach(card => card.classList.remove("favorite-highlight"));
}