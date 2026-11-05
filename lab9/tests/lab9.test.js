import test from 'node:test';
import assert from 'node:assert/strict';
import { sumTo, factorial, isPrime, fizzBuzz, countVowels, isPalindrome, maxOf, digitSum } from '../js/algorithms.js';
import { validateName, validateEmail, validatePassword, validateMessage } from '../js/validators.js';

test('sumTo — 0, эерэг тоо, буруу оролт', () => {
  assert.equal(sumTo(0), 0); assert.equal(sumTo(5), 15); assert.throws(() => sumTo(-1));
});
test('factorial — 0!, 5!, буруу оролт', () => {
  assert.equal(factorial(0), 1); assert.equal(factorial(5), 120); assert.throws(() => factorial(-1));
});
test('isPrime — анхны ба нийлмэл тоо', () => {
  assert.equal(isPrime(2), true); assert.equal(isPrime(17), true); assert.equal(isPrime(1), false); assert.equal(isPrime(9), false); assert.equal(isPrime(-3), false);
});
test('fizzBuzz — 3, 5, 15', () => {
  const result = fizzBuzz(15); assert.equal(result[2], 'Fizz'); assert.equal(result[4], 'Buzz'); assert.equal(result[14], 'FizzBuzz'); assert.deepEqual(fizzBuzz(0), []);
});
test('countVowels — латин болон монгол эгшиг', () => {
  assert.equal(countVowels('Hello'), 2); assert.equal(countVowels('Монгол'), 2); assert.equal(countVowels(''), 0);
});
test('isPalindrome — тэмдэгтээр харьцуулна', () => {
  assert.equal(isPalindrome('level'), true); assert.equal(isPalindrome('abba'), true); assert.equal(isPalindrome('Hello'), false); assert.equal(isPalindrome(''), true);
});
test('maxOf — сөрөг тоо, буруу массив', () => {
  assert.equal(maxOf([1, 8, 3]), 8); assert.equal(maxOf([-9, -2, -5]), -2); assert.throws(() => maxOf([]));
});
test('digitSum — 0, эерэг ба сөрөг', () => {
  assert.equal(digitSum(0), 0); assert.equal(digitSum(1234), 10); assert.equal(digitSum(-902), 11);
});
test('validateName — trim, урт, тоо', () => {
  assert.equal(validateName('  Бат  ').valid, true); assert.equal(validateName(' ').valid, false); assert.equal(validateName('А').valid, false); assert.equal(validateName('Бат2').valid, false); assert.equal(validateName('a'.repeat(51)).valid, false);
});
test('validateEmail — хэлбэр, зай, хоосон', () => {
  assert.equal(validateEmail('user@example.com').valid, true); assert.equal(validateEmail('a.b@sub.example.mn').valid, true); assert.equal(validateEmail('bad@').valid, false); assert.equal(validateEmail('bad @example.com').valid, false); assert.equal(validateEmail('').valid, false);
});
test('validatePassword — кирилл/латин үсэг, тоо, зай', () => {
  assert.equal(validatePassword('Password123').valid, true); assert.equal(validatePassword('Нууцүг123').valid, true); assert.equal(validatePassword('abcdefghi').valid, false); assert.equal(validatePassword('123456789').valid, false); assert.equal(validatePassword('Abc 12345').valid, false); assert.equal(validatePassword('Abc123').valid, false);
});
test('validateMessage — trim, 10–500 тэмдэгт', () => {
  assert.equal(validateMessage('  Сайн байна уу  ').valid, true); assert.equal(validateMessage(' '.repeat(20)).valid, false); assert.equal(validateMessage('a'.repeat(9)).valid, false); assert.equal(validateMessage('a'.repeat(500)).valid, true); assert.equal(validateMessage('a'.repeat(501)).valid, false);
});
