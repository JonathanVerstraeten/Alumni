document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.tag-filter');
  const containers = document.querySelectorAll('.iframe-container');

  function filterIframes() {
    const selectedTags = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());

    containers.forEach(container => {
      const tags = container.getAttribute('data-tags')
        .split(',')
        .map(tag => tag.trim());

      const matches =
        selectedTags.length === 0 ||
        selectedTags.some(tag => tags.includes(tag));

      container.classList.toggle('hidden', !matches);
    });
  }

  checkboxes.forEach(cb => cb.addEventListener('change', filterIframes));
  filterIframes();
});
