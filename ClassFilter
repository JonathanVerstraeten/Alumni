document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ ClassFilter.js running");

  const checkboxes = document.querySelectorAll(".tag-filter");
  // Adjust container selector to your actual container divs inside #results
  const containers = document.querySelectorAll("#results > div");

  function filterResults() {
    console.log("🔄 Checkbox changed");

    // Get all checked tag values
    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());

    console.log("Selected tags:", selectedTags);

    containers.forEach(container => {
      // Get container's classes as an array
      const classList = Array.from(container.classList);
      console.log("📦 Container classes:", classList);

      // Check if any selected tag matches a class on container (OR filter)
      const match = selectedTags.length === 0 || selectedTags.some(tag => classList.includes(tag));

      container.style.display = match ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });

  // Run initially to show all
  filterResults();

  console.log("✅ Script initialized");
});
