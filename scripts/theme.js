document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function setTheme(theme) {
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    themeIcon.src = theme === "dark"
      ? "assets/icons/moon.svg"
      : "assets/icons/sun.svg";
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
});
