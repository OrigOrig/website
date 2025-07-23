// theme.js

const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;
const githubIcon = document.getElementById("github-icon");
const discordIcon = document.getElementById("discord-icon");
const toggleIcon = document.getElementById("toggle-icon");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Change icon sources based on theme
  if (theme === "dark") {
    githubIcon.src = "assets/icons/github-light.svg";
    discordIcon.src = "assets/icons/discord-dark.svg";
    toggleIcon.src = "assets/icons/sun.svg";
  } else {
    githubIcon.src = "assets/icons/github-light.svg"; // Only one style provided
    discordIcon.src = "assets/icons/discord-light.svg";
    toggleIcon.src = "assets/icons/moon.svg";
  }
}

// Load stored theme or default to dark
const storedTheme = localStorage.getItem("theme") || "dark";
setTheme(storedTheme);

toggleButton.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});
