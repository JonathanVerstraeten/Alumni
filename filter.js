// Step 1: Convert data-stash into data-tags
document.querySelectorAll('[data-stash]').forEach(el => {
  const stash = el.getAttribute('data-stash');
  if (stash) {
    el.setAttribute('data-tags', stash);
    el.removeAttribute('data-stash');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ filter.js running");

  const checkboxes = document.querySelectorAll(".tag-filter");
  const containers = document.querySelectorAll(".iframe-container");

  function filterResults() {
    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());

    containers.forEach(container => {
      const tagsAttr = container.getAttribute("data-tags") || "";
      const tags = tagsAttr.split(",").map(tag => tag.trim());

      const match = selectedTags.every(tag => tags.includes(tag));
      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });

  filterResults(); // Run once on load
});
