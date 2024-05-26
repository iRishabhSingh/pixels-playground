function showSettings() {
  settingsPopup.style.display = "flex";
}
function closeSettings() {
  settingsPopup.style.display = "none";
}

const root = document.querySelector(":root");
const themeToggle = document.getElementById("theme-toggle");

const themes = {
  light: {
    "--background-color": "#f4f4f4",
    "--background-color-rev": "#333",
    "--nav-background": "#ffffff",
    "--text-color": "#333",
    "--text-color-opac": "#555",
    "--footer-text": "#555",
    "--color-theme": "#4CAF50",
    "--green": "#4CAF50",
  },
  dark: {
    "--background-color": "#333",
    "--background-color-rev": "#f4f4f4",
    "--nav-background": "#222",
    "--text-color": "#f4f4f4",
    "--text-color-opac": "#ccc",
    "--footer-text": "#ccc",
    "--color-theme": "#4CAF50",
    "--green": "#4CAF50",
  },
};

function switchTheme() {
  const darkModeCheckbox = document.getElementById("darkMode");
  const mode = darkModeCheckbox.checked ? "dark" : "light";
  const theme = themes[mode];

  if (theme) {
    Object.keys(theme).forEach((property) => {
      root.style.setProperty(property, theme[property]);
    });
  } else {
    console.error(`Unknown theme mode: ${mode}`);
  }
}

// Ensure the theme is set correctly on page load
document.addEventListener("DOMContentLoaded", switchTheme);
