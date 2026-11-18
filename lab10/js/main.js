import { validateName, validateEmail, validatePassword, validateMessage } from './validators.js';
import { runExperiments } from './experiments.js';
import { sumTo, factorial, isPrime, fizzBuzz, countVowels, isPalindrome, maxOf, digitSum } from './algorithms.js';

const themeToggle = document.getElementById('themeToggle');
const form = document.getElementById('feedbackForm');
const status = document.getElementById('formMessage');
const validators = { name: validateName, email: validateEmail, password: validatePassword, message: validateMessage };

function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}
setTheme('light');
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

function showFieldResult(input, result) {
  const error = document.getElementById(input.id + 'Error');
  input.classList.toggle('is-invalid', !result.valid);
  input.classList.toggle('is-valid', result.valid);
  input.setAttribute('aria-invalid', String(!result.valid));
  error.textContent = result.message;
  return result.valid;
}

for (const [id, validator] of Object.entries(validators)) {
  const input = document.getElementById(id);
  input.addEventListener('blur', () => showFieldResult(input, validator(input.value)));
  input.addEventListener('input', () => {
    if (input.classList.contains('is-invalid') || input.classList.contains('is-valid')) {
      showFieldResult(input, validator(input.value));
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let allValid = true;
  let firstInvalid = null;
  for (const [id, validator] of Object.entries(validators)) {
    const input = document.getElementById(id);
    const valid = showFieldResult(input, validator(input.value));
    if (!valid && firstInvalid === null) firstInvalid = input;
    if (!valid) allValid = false;
  }
  if (!allValid) {
    status.className = 'alert alert-danger mt-4 mb-0';
    status.textContent = 'Мэдээллээ шалгаад дахин оролдоно уу.';
    firstInvalid.focus();
    return;
  }
  status.className = 'alert alert-success mt-4 mb-0';
  status.textContent = 'Амжилттай! Таны мэдээлэл шалгалтад тэнцлээ. (Сервер рүү илгээгээгүй.)';
  // Нууц үг болон хувийн мэдээллийг console/localStorage-д хадгалахгүй.
  form.reset();
  for (const input of form.querySelectorAll('.form-control')) {
    input.classList.remove('is-valid', 'is-invalid');
    input.removeAttribute('aria-invalid');
    document.getElementById(input.id + 'Error').textContent = '';
  }
});

runExperiments();
console.group('Лаб 9 — алгоритмын жишээ');
console.table({ sumTo_5: sumTo(5), factorial_5: factorial(5), isPrime_7: isPrime(7), fizzBuzz_15: fizzBuzz(15), countVowels: countVowels('Монгол'), isPalindrome: isPalindrome('level'), maxOf: maxOf([2, 8, 4]), digitSum: digitSum(1234) });
console.groupEnd();
