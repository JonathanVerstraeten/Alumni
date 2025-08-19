document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ filter.js running"); // Check this shows up in console

  const checkboxes = document.querySelectorAll(".tag-filter");
  console.log("Found checkboxes:", checkboxes); // Log NodeList

  const containers = document.querySelectorAll(".iframe-container");
  console.log("Found containers:", containers); // Log NodeList

  function filterResults() {
    console.log("🔄 Checkbox changed");

    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    console.log("Selected tags:", selectedTags);

    containers.forEach(container => {
      const tags = container.dataset.tags.split(",");
      console.log("Container tags:", tags);

      const match = selectedTags.every(tag => tags.includes(tag));
      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });
});
