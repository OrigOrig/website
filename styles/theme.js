const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  icon.src = newTheme === "dark" ? "assets/moon.png" : "assets/sun.png";
});
