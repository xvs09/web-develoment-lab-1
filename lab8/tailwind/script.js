const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const dark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", dark ? "light" : "dark");
  themeToggle.textContent = dark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

const form = document.querySelector("#commentForm");
const message = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");

  for (const input of [name, email]) {
    const error = document.querySelector(
      input.id === "name" ? "#nameError" : "#emailError"
    );
    const invalid = !input.checkValidity();
    error.classList.toggle("hidden", !invalid);
    input.setAttribute("aria-invalid", String(invalid));
    if (invalid) valid = false;
  }

  if (!valid) {
    message.textContent = "";
    return;
  }

  message.textContent = "Сэтгэгдэл амжилттай шалгагдлаа!";
  form.reset();
  for (const input of [name, email]) input.removeAttribute("aria-invalid");
  document.querySelectorAll(".error-message").forEach(error => error.classList.add("hidden"));
});
