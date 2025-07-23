const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const githubIcon = document.getElementById("github-icon");

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  themeIcon.src = theme === "dark" ? "assets/icons/moon.svg" : "assets/icons/sun.svg";
  githubIcon.src = "assets/icons/github-light.svg"; // We’re using same icon for both themes
};

toggleButton.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
});
