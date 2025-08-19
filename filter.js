document.addEventListener("DOMContentLoaded", () => {
  console.log("filter.js running");

  const checkboxes = document.querySelectorAll(".tag-filter");
  const containers = document.querySelectorAll(".iframe-container");

  function filterResults() {
    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    containers.forEach(container => {
      const tags = container.dataset.tags.split(",");
      const match = selectedTags.every(tag => tags.includes(tag));

      // Show only if it matches all selected tags
      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => cb.addEventListener("change", filterResults));
});
