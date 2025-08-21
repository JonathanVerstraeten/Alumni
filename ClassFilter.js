document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ filter.js running");

  const checkboxes = document.querySelectorAll(".tag-filter");
  const containers = document.querySelectorAll(".iframe-container");

  function filterResults() {
    console.log("🔄 Checkbox changed");

    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());

    console.log("Selected tags:", selectedTags);

    containers.forEach(container => {
      const classList = Array.from(container.classList);
      console.log("📦 Container classes:", classList);

      const match = selectedTags.some(tag => classList.includes(tag));
      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });

  // Optional: log checkbox state
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      console.clear();
      checkboxes.forEach(box => {
        console.log(`${box.id}: ${box.checked}`);
      });
    });
  });

  console.log("✅ Script initialized");
});
