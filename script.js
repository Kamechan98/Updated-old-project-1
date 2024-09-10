const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Function to update the button icon based on the current theme
function updateThemeIcon() {
    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '🌜'; // Moon icon for dark mode
    } else {
        themeToggleBtn.textContent = '🌞'; // Sun icon for light mode
    }
}

// Function to toggle the 'dark-theme' class and update the icon
themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    updateThemeIcon(); // Update the icon when the theme changes
});

// On page load, set the correct icon based on the current theme
updateThemeIcon();
