const darkTheme = document.getElementById("dark-theme");
const dark = document.getElementById("dark");
const savedTheme = localStorage.getItem("theme");
const iconStyle = localStorage.getItem("darkThemeClassList");
const iconColor = localStorage.getItem("color");
if (savedTheme) {
  document.body.classList.add(savedTheme);
}
if (iconStyle) {
  darkTheme.classList.remove(...darkTheme.classList);
  darkTheme.classList.add(...JSON.parse(iconStyle));
  dark.classList.remove(...dark.classList);
  dark.classList.add(...JSON.parse(iconStyle));
}
if (iconColor) {
  darkTheme.style.color = iconColor;
  dark.style.color = iconColor;
}
darkTheme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkTheme.classList.replace("fa-moon", "fa-sun");
    darkTheme.style.color = "burlywood";
    localStorage.setItem("theme", "dark-theme");
  } else {
    darkTheme.classList.replace("fa-sun", "fa-moon");
    darkTheme.style.color = "#212529";
    localStorage.removeItem("theme");
  }
  localStorage.setItem(
    "darkThemeClassList",
    JSON.stringify(Array.from(darkTheme.classList))
  );
  localStorage.setItem("color", darkTheme.style.color);
};

dark.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    dark.classList.replace("fa-moon", "fa-sun");
    dark.style.color = "burlywood";
    localStorage.setItem("theme", "dark-theme");
  } else {
    dark.classList.replace("fa-sun", "fa-moon");
    dark.style.color = "#212529";
    localStorage.removeItem("theme");
  }
  localStorage.setItem(
    "darkThemeClassList",
    JSON.stringify(Array.from(dark.classList))
  );
  localStorage.setItem("color", dark.style.color);
};
