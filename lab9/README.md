# Лаб 9 — Галерей Портал (JavaScript)

Энэ төсөл нь өмнөх Лаб 8-ын **Bootstrap хувилбарын** цэнхэр өнгө, 3 зурагтай галерей, dark mode-ийг хадгалж, Лаб 9-ийн JavaScript шаардлагыг нэмсэн бие даасан хувилбар юм.

## Ажиллуулах (Ubuntu / VS Code)

1. ZIP-ийг задлаад `Lab9_Gallery_Portal` хавтсыг VS Code дээр **File → Open Folder**-оор нээнэ.
2. `index.html` дээр баруун товч → **Open with Live Server**. JavaScript `type="module"` ашигладаг тул `file://` хаягаар шууд нээхээс зайлсхий.
3. Хэрэв Live Server байхгүй бол VS Code Extensions-ээс суулга. Эсвэл Terminal дээр `python3 -m http.server 5500` ажиллуулаад `http://localhost:5500` нээж болно.
4. Chrome/Brave дээр **F12 → Console**: `console.table`, `typeof`, `Number('42')`, `0.1 + 0.2` туршилт болон 8 алгоритмын жишээг харна.
5. Санал хүсэлтийн form-ийг хоосон, буруу, зөв утгаар туршина.

## Автомат тест

Node.js 18+ суусан бол төслийн үндсэн хавтсанд:

```bash
npm test
```

Тест нь 8 алгоритм, 4 validation функцийг 12 багц тестээр шалгана. Гаднын npm багц суулгах шаардлагагүй.

## Файлын бүтэц

```text
Lab9_Gallery_Portal/
├── index.html
├── style.css
├── package.json
├── README.md
├── js/
│   ├── algorithms.js    # 8 функц
│   ├── validators.js    # 4 функц
│   ├── experiments.js   # console.table, typeof, Number, 0.1 + 0.2
│   └── main.js          # DOM, form, dark mode
└── tests/
    └── lab9.test.js
```

## 8 алгоритмын тодорхойлолт

| Функц | Үйлдэл | Жишээ |
|---|---|---|
| `sumTo(n)` | 1-ээс n хүртэлх нийлбэр | `sumTo(5)` → `15` |
| `factorial(n)` | n! | `factorial(5)` → `120` |
| `isPrime(n)` | Анхны тоо эсэх | `isPrime(7)` → `true` |
| `fizzBuzz(n)` | 1..n хүртэл массив; 3-д Fizz, 5-д Buzz, 15-д FizzBuzz | `fizzBuzz(5)` → `[1,2,'Fizz',4,'Buzz']` |
| `countVowels(s)` | Монгол/латин эгшгийн тоо (том/жижиг) | `countVowels('Hello')` → `2` |
| `isPalindrome(s)` | Тэмдэгт бүрийг яг хэвээр нь хоёр талаас харьцуулна | `isPalindrome('level')` → `true` |
| `maxOf(arr)` | Тоон массивын хамгийн их утга | `maxOf([2,8,4])` → `8` |
| `digitSum(n)` | Бүхэл тооны цифрийн нийлбэр | `digitSum(1234)` → `10` |

Алгоритмын гол логикт `reduce`, `reverse`, `split`, `sort`, `Math.max`, `Array.from` зэрэг бэлэн алгоритмын аргуудыг ашиглаагүй. Оролтын шалгалтад `Number.isInteger` зэрэг стандарт төрөл шалгах аргыг ашигласан.

## Validation дүрэм

- `validateName`: хоёр захын зайг хасна; 2–50 тэмдэгт; тоог хориглоно.
- `validateEmail`: хоосон биш; зайгүй; `нэр@домэйн.өргөтгөл` хэлбэрийг regex-ээр шалгана.
- `validatePassword`: 8+ тэмдэгт; зайгүй; латин эсвэл кирилл үсэг болон цифр заавал орно.
- `validateMessage`: хоёр захын зайг хасна; 10–500 тэмдэгт.

Функц бүр `{ valid, message }` объект буцаана. Form буруу талбарын доор алдаа харуулж, эхний буруу талбарт фокус өгнө. Зөв үед амжилтын мессеж гарна. **Энэ бол frontend validation демо: сервер рүү мэдээлэл илгээхгүй, хадгалахгүй.**

## GitHub Pages

Энэ төслийн `index.html` нь үндсэн хавтсанд байгаа тул репозиторийн Pages publish folder-ийг `/ (root)` болгосон тохиолдолд нүүр хуудас шууд нээгдэнэ. Хэрэв олон лаб нэг репозиторт байгаа бол `lab9/` хавтсанд байрлуулж, root `index.html`-ээс `./lab9/` руу холбоос хийж болно.

## Гар тестлэх жишээ

| Талбар | Буруу утга | Зөв утга |
|---|---|---|
| Нэр | `Бат123` | `Бат` |
| Имэйл | `bat@` | `bat@example.com` |
| Нууц үг | `password` | `Password123` |
| Санал хүсэлт | `Сайн` | `Энэ галерей надад их таалагдлаа.` |

> Зураг нь `picsum.photos`, Bootstrap CSS нь CDN-ээс ачаалдаг учраас интернэт холболттой үед бүрэн харагдана.
