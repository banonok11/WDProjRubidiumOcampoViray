  const archetypeFilter = document.getElementById("archetypeFilter");
  const cards = document.querySelectorAll(".card-box");

  function filterCards() {
    const selected = archetypeFilter.value.trim().toLowerCase();

    cards.forEach(card => {
      const types = card.getAttribute("data-archetype").toLowerCase().split(" ");

      const match = selected === "" || types.includes(selected);

      card.style.display = match ? "" : "none";
    });
  }

  archetypeFilter.addEventListener("change", filterCards);
  filterCards();