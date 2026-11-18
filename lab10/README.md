# Лаборатори 10 — Галерей Портал

Лаб 9-ийн HTML/CSS, form validation болон алгоритмын файлуудыг хадгалж, Lab 10 нэмэв.

## Ажиллуулах

`npm test` — Node.js тестүүд. `npm start` — http://localhost:5500 хаягаар нээнэ. VS Code Live Server ашиглаж болно.

## Шинэ файлууд

- `js/utils.js`: 6 arrow function
- `js/photoTools.js`: массивын 8 функц, нэмэлт `groupByPlace`
- `js/objectTools.js`: объектын 8 функц
- `js/album.js`: private `#photos`, deep copy, add/remove/like, JSON
- `js/featuredAlbum.js`: `super`, like-аар эхний 3-ыг онцлох
- `js/app.js`: хайлт, шүүлтүүр, like, зураг нэмэх form, flip card
- `js/bugs.js`: гурван алдааг зассан жишээ
- `tests/lab10.test.js`: 11 тестийн бүлэг, хоосон массив, давхар like, зайтай хайлт зэрэг

## Даалгаврын эх кодын тухай

Багшийн `makeCard`, `renderCards` эх файл энэ ZIP-д байгаагүй тул `app.js` дотор шинээр бичсэн. `photoTools.js` ба `objectTools.js`-ийн 8 функцийн нэр/гэрээ хэрэглэгчийн илгээсэн даалгаварт байгаагүй тул тохиромжтой хувилбараар тодорхойлсон. Багшийн тусгай тест өгөгдвөл нэрийг тааруулах шаардлагатай.

## Object.groupBy дэмжлэг

`Object.groupBy()` шинэ JavaScript боломж тул хуучин browser-т байхгүй байж болно. Кодод fallback `reduce()` оруулсан. Бодит дэмжлэгийг https://caniuse.com/mdn-javascript_builtins_object_groupby хаягаар шалгана. `structuredClone()` болон `toSorted()`-ийн талаар MDN-ээс үзнэ. Энэ төсөлд `structuredClone()` хэрэглэсэн; sort дээр compatibility-ийг бодож `[...arr].sort()` ашигласан.

## Алдаа олох

`bugs.js`-ийн 3 функцэд түгээмэл гардаг хоосон массив, мутаци, давхардалтай холбоотой алдааг зассан хувилбар оруулав. Багшийн анхны зориуд алдаатай `bugs.js` файл ирээгүй.
