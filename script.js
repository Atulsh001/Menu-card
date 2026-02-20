// Theme Toggle
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Optional: Section collapse/expand
const sections = document.querySelectorAll(".section h3");

sections.forEach(function(title) {
    title.addEventListener("click", function() {
        const items = this.nextElementSibling;
        items.classList.toggle("hidden");
    });
});