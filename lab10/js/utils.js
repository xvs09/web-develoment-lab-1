export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
export const average = (...nums) => nums.length ? nums.reduce((sum, n) => sum + n, 0) / nums.length : 0;
export const greet = (name = 'Зочин') => `Сайн байна уу, ${name}!`;
export const makeCounter = (start = 0) => () => start++;
export const applyN = (fn, n, x) => Array.from({length: Math.max(0, n)}).reduce(value => fn(value), x);
export const compose = (f, g) => (...args) => f(g(...args));
