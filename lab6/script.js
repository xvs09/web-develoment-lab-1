// 1. Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');

// Браузер дээр хадгалагдсан theme байгаа эсэхийг шалгах
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme !== 'dark') {
        newTheme = 'dark';
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// 2. Flip Card Click Toggle (Гар утас болон товчлуур дээр дарахад)
const flipCard = document.getElementById('flipCard');
const flipBtn = document.getElementById('flipBtn');

if (flipBtn && flipCard) {
    flipBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Card дээрх event-ийг давхардахаас сэргийлнэ
        flipCard.classList.toggle('flipped');
    });

    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });
}