/** Лаб 9 — алгоритмууд. Гол тооцоололд бэлэн алгоритмын функц ашиглаагүй. */
export function sumTo(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n нь 0 эсвэл эерэг бүхэл тоо байна.');
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n нь 0 эсвэл эерэг бүхэл тоо байна.');
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

export function fizzBuzz(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n нь 0 эсвэл эерэг бүхэл тоо байна.');
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result[result.length] = 'FizzBuzz';
    else if (i % 3 === 0) result[result.length] = 'Fizz';
    else if (i % 5 === 0) result[result.length] = 'Buzz';
    else result[result.length] = i;
  }
  return result;
}

export function countVowels(value) {
  if (typeof value !== 'string') throw new TypeError('Текст оруулна уу.');
  let count = 0;
  // Монгол болон латин эгшиг; том/жижиг үсгийг хоёуланг нь тоолно.
  const vowels = 'aeiouyAEIOUYаэиоуөүыАЭИОУӨҮЫ';
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (value[i] === vowels[j]) { count++; break; }
    }
  }
  return count;
}

export function isPalindrome(value) {
  if (typeof value !== 'string') throw new TypeError('Текст оруулна уу.');
  // Тэмдэгт бүрийг яг хэвээр нь харьцуулна (зай, том жижиг үсэг оролцоно).
  let left = 0;
  let right = value.length - 1;
  while (left < right) {
    if (value[left] !== value[right]) return false;
    left++;
    right--;
  }
  return true;
}

export function maxOf(values) {
  if (!Array.isArray(values) || values.length === 0) throw new TypeError('Хоосон биш тоон массив өгнө үү.');
  let maximum = values[0];
  if (typeof maximum !== 'number' || !Number.isFinite(maximum)) throw new TypeError('Бүх элемент тоо байна.');
  for (let i = 1; i < values.length; i++) {
    if (typeof values[i] !== 'number' || !Number.isFinite(values[i])) throw new TypeError('Бүх элемент тоо байна.');
    if (values[i] > maximum) maximum = values[i];
  }
  return maximum;
}

export function digitSum(n) {
  if (!Number.isSafeInteger(n)) throw new TypeError('Аюулгүй бүхэл тоо оруулна уу.');
  if (n < 0) n = -n;
  let total = 0;
  while (n > 0) {
    total += n % 10;
    n = (n - (n % 10)) / 10;
  }
  return total;
}
