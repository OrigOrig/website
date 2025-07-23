const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

const discordIcon = document.getElementById("discord-icon");
const githubIcon = document.getElementById("github-icon");

function setTheme(theme) {
  htmlElement.setAttribute("data-theme", theme);
  themeIcon.src = theme === "dark" ? "assets/sun.svg" : "assets/moon.svg";
  discordIcon.src = theme === "dark" ? "assets/discord-light.svg" : "assets/discord-dark.svg";
  githubIcon.src = theme === "dark" ? "assets/github-light.svg" : "assets/github-dark.svg";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Initialize on page load
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
