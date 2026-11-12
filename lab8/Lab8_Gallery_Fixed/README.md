# Лаб 8 — Галерей Портал

Эх сурвалж: хэрэглэгчийн `lab6.zip` (анхны HTML/CSS/JS нь `shared/lab6-original.*` дотор хадгалагдсан).

## Ажиллуулах

1. ZIP-ээ задлаад VS Code дээр хавтсыг нээнэ.
2. Terminal:

```bash
cd tailwind
npm install
npm run build
cd ..
```

3. Root `index.html`-ийг Live Server-ээр нээнэ. Bootstrap болон Tailwind гэсэн хоёр холбоосоор орно.

Tailwind-ийн `output.css` нь build хийсний дараа үүснэ. Үүнийг GitHub Pages-д байршуулах бол `tailwind/output.css` файлыг хамт commit хийнэ.

## Шаардлагууд

- Bootstrap CDN, navbar, 3-column responsive grid, validation
- Tailwind v4 `@tailwindcss/cli`, ижил бүтэц ба загвар
- Bootstrap `data-bs-theme`; Tailwind `@custom-variant dark`
- Bootstrap `.btn-brand` CSS variable; Tailwind `@theme --color-brand`
- 3 зураг болон тусгай аяллын карт 3D flip: hover/focus/click
- Lab 6-ын видео, map хэсгийг хадгалсан (гадаад үйлчилгээ интернет шаарддаг)
- Харьцуулалтын тайлан `comparison.md`; бодит хэмжилт оруулах талбарууд

`shared/gallery.css` нь хоёр framework дээр Lab 6-ын харагдах загварыг ижил байлгах, 3D flip-ийн CSS-ийг давхардуулахгүй байхад зориулагдсан.
