# Лаб 8 — Bootstrap ба Tailwind харьцуулалт

Хоёр хувилбар Lab 6-ын ижил бүтэц, shared/gallery.css дизайн токен болон 3D Flip Card эффектийг ашиглана.

| Үзүүлэлт | Bootstrap | Tailwind |
|---|---|---|
| CSS framework | Bootstrap 5.3.3 CDN | Tailwind CSS v4 CLI |
| Dark mode | `data-bs-theme` | `@custom-variant dark`, `data-theme` |
| Brand | `.btn-brand` + CSS variable | `@theme --color-brand` + `.btn-brand` |
| 3D Flip | Байгаа | Байгаа |
| Form validation | JavaScript | JavaScript |
| CSS файлын хэмжээ (байтаар) | Хэмжих | Хэмжих |
| Нэг картын HTML class тоо | Хэмжих | Хэмжих |
| Lighthouse Performance | Хэмжих | Хэмжих |
| Lighthouse Accessibility | Хэмжих | Хэмжих |

## Хэмжих командууд

```bash
wc -c bootstrap/style.css shared/gallery.css tailwind/output.css
```

Framework-ийн CDN-аар татагдах CSS-ийн хэмжээг Network → CSS → Transferred/Resource Size-ээс тусад нь тэмдэглэнэ. `shared/gallery.css` хоёр талд адилхан ашиглагддаг тул нийт хэмжээний тайлбарт оруулна.

Нэг картын class тоог DevTools Elements дээрх нэг ижил `article.flip-card` болон түүний доторх HTML элементүүдийн class-уудыг тоолж харьцуулна. Bootstrap/Tailwind-ийн framework class тоог ялгаж тэмдэглэх хэрэгтэй.

Lighthouse: Chrome/Brave → F12 → Lighthouse → Mobile → Analyze page load. Хоёр хуудсыг ижил нөхцөлд хэмжинэ.

## Дүгнэлт (оноог хэмжсэний дараа нөхөж бичих)

Энэхүү ажлаар Лаб 6-ын галерей хуудсыг Bootstrap болон Tailwind CSS ашиглан ижил бүтэц, өнгө, 3D Flip Card, dark mode болон формын шалгалттайгаар бүтээлээ. Bootstrap нь CDN ашиглан хурдан эхлүүлэх боломжтой, Tailwind нь CLI-аар ашигласан utility классуудыг build хийх боломжтой. Файлын хэмжээ, class тоо болон Lighthouse онооны бодит үр дүнг дээрх хүснэгтэд оруулсны дараа аль хувилбар илүү тохиромжтойг үндэслэлтэй дүгнэнэ.
