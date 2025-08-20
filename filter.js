document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ filter.js running");

  // Helper function to parse comma-separated tags manually
  function parseCommaSeparated(str) {
    const result = [];
    let current = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === ',') {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current) {
      result.push(current.trim());
    }
    return result;
  }

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
      const tagsAttr = container.getAttribute("data-tags") || "";
      console.log("📦 Raw data-tags:", tagsAttr);

      const tags = parseCommaSeparated(tagsAttr);
      console.log("➡️ Container tags:", tags);

      const match = selectedTags.some(tag => tags.includes(tag));

      container.style.display = match || selectedTags.length === 0 ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterResults);
  });

  console.log("✅ Script initialized");
});

// Optional: log which options are selected
  const checkboxes = document.querySelectorAll('.checkbox-button');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      console.clear();
      checkboxes.forEach(box => {
        console.log(`${box.id}: ${box.checked}`);
      });
    });
  });


