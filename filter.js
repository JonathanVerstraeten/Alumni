document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ filter.js running");

  const tags = document.querySelector('div').getAttribute('title').split(',');
  
  const checkboxes = document.querySelectorAll(".tag-filter");
  console.log("Found checkboxes:", checkboxes);

  const containers = document.querySelectorAll(".iframe-container");
  console.log("Found containers:", containers);

  function filterResults() {
    console.log("🔄 Checkbox changed");

    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());

    console.log("Selected tags:", selectedTags);

    containers.forEach(container => {
      // Use getAttribute instead of dataset for reliability
      const tagsAttr = container.getAttribute("data-tags") || "";
      console.log("📦 Raw data-tags:", tagsAttr);

      // Split and trim tags
      const tags = tagsAttr.split(",").map(tag => tag.trim());
      console.log("➡️ Container tags:", tags);

      // Match: all selected tags must be present in container tags
      const match = selectedTags.every(tag => tags.includes(tag));
      
      // Show or hide container
      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  // Add event listeners to checkboxes
  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });

  console.log("✅ Script initialized");
});

