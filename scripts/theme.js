const toggleIcon = document.getElementById("theme-toggle-icon");
const discordIcon = document.getElementById("discord-icon");
const githubIcon = document.getElementById("github-icon");

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);

  toggleIcon.src = mode === "dark" ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  discordIcon.src = mode === "dark" ? "assets/icons/discord-dark.svg" : "assets/icons/discord-light.svg";
  githubIcon.src = "assets/icons/github-light.svg"; // Only one version

  localStorage.setItem("theme", mode);
}

toggleIcon.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
});
