let selectedOptions = [];

function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

function selectOption(option) {
  if (!selectedOptions.includes(option)) {
    selectedOptions.push(option);
    updateTags();
  }
  document.getElementById("dropdown-input").value = "";
  document.getElementById("dropdown-menu").style.display = "none"; // Close dropdown after selection
}

function removeTag(option) {
  selectedOptions = selectedOptions.filter(item => item !== option);
  updateTags();
}

function updateTags() {
  const tagsContainer = document.getElementById("tags");
  tagsContainer.innerHTML = ''; // Clear previous tags
  selectedOptions.forEach(option => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.innerHTML = `${option} <button class="remove-tag" onclick="removeTag('${option}')">x</button>`;
    tagsContainer.appendChild(tag);
  });
}

function filterOptions() {
  const searchTerm = document.getElementById("dropdown-input").value.toLowerCase();
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  let anyVisible = false;
  dropdownItems.forEach(item => {
    if (item.innerHTML.toLowerCase().includes(searchTerm)) {
      item.style.display = "block";
      anyVisible = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!anyVisible) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = "No results found";
    document.getElementById("dropdown-menu").appendChild(noResults);
  } else {
    const noResults = document.querySelector(".no-results");
    if (noResults) {
      noResults.remove();
    }
  }
}
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(item => {
  item.style.display = item.textContent.toLowerCase().includes(searchTerm.toLowerCase()) ? "block" : "none";
});
