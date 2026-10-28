const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const dark = html.getAttribute("data-bs-theme") === "dark";
  html.setAttribute("data-bs-theme", dark ? "light" : "dark");
  themeToggle.textContent = dark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

const form = document.querySelector("#commentForm");
const message = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    message.textContent = "";
    return;
  }

  message.textContent = "Сэтгэгдэл амжилттай шалгагдлаа!";
  form.reset();
  form.classList.remove("was-validated");
});
