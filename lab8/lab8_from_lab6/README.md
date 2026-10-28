# Лаб 8 — Bootstrap ба Tailwind CSS

Энэ төсөл нь Лаб 6-ын “Галерей Портал” загвар, өнгөний сонголт, гурван үндсэн зургийг ашиглан Лаб 8-ын шаардлагуудыг хэрэгжүүлнэ.

## Хавтасны бүтэц
- `bootstrap/index.html`, `bootstrap/style.css`, `bootstrap/script.js`
- `tailwind/index.html`, `tailwind/input.css`, `tailwind/script.js`

## Bootstrap ажиллуулах
`bootstrap/index.html` файлыг браузер дээр нээх эсвэл VS Code Live Server ашиглана. Bootstrap CDN ашигладаг тул интернэт холболт шаардлагатай.

## Tailwind ажиллуулах
Terminal нээгээд:
```bash
cd tailwind
npm init -y
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```
Дараа нь өөр Terminal нээгээд `tailwind/index.html`-ийг Live Server-ээр нээнэ. `output.css` нь build хийхэд үүснэ.

## Хэмжилт
- Bootstrap: DevTools > Network > CSS хэсгээс `bootstrap.min.css`-ийн хэмжээ хар.
- Tailwind: `ls -lh tailwind/output.css` (tailwind хавтас дотроос `ls -lh output.css`).
- Card class: HTML дээрх үндсэн `article` элементийн class-уудыг хоосон зайгаар салгаж тоол.
- Lighthouse: Chrome DevTools > Lighthouse > Generate report. Хоёр хуудсыг ижил нөхцөлд хэмж.
- Lighthouse болон файлын хэмжээний утгыг өөрийн компьютер дээр хэмжиж тайланд бич. Жишээ/таамаг утга бүү ашигла.
