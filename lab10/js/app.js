import {FeaturedAlbum} from './featuredAlbum.js';
import {searchPhotos,filterByPlace,sortByLikes} from './photoTools.js';
import {validateName} from './validators.js';
const initial=[
{id:1,title:'Байгаль',place:'Хөвсгөл',date:'2026-06-01',likes:4,tags:['байгаль'],image:'https://picsum.photos/seed/gallery-nature/800/600',description:'Тайван, цэвэр агаартай агшин.'},
{id:2,title:'Уулс',place:'Алтай',date:'2026-07-15',likes:8,tags:['уул'],image:'https://picsum.photos/seed/gallery-mountain/800/600',description:'Сүрлэг уулсын дүр төрх.'},
{id:3,title:'Хот',place:'Улаанбаатар',date:'2026-08-20',likes:2,tags:['хот'],image:'https://picsum.photos/seed/gallery-city/800/600',description:'Хотын амьдралын өнгө төрх.'}
];
const album=new FeaturedAlbum(initial);
const cards=document.getElementById('albumCards');
const search=document.getElementById('photoSearch');
const place=document.getElementById('placeFilter');
const sort=document.getElementById('photoSort');
const count=document.getElementById('photoCount');
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Багшийн эх makeCard/renderCards байхгүй тул тусад нь шинээр бичсэн.
export function makeCard(photo) {
 const title=escapeHTML(photo.title), description=escapeHTML(photo.description||photo.place), image=escapeHTML(photo.image||'https://picsum.photos/seed/gallery-new/800/600');
 return `<div class="col-12 col-md-6 col-lg-4"><article class="flip-card" tabindex="0" aria-label="${title} зураг"><div class="flip-card-inner"><div class="flip-card-front"><img src="${image}" alt="${title}" loading="lazy"><div class="p-3"><h3 class="h5">${title}</h3><p class="text-body-secondary">${description}</p><span class="flip-hint">Дээр нь очоод эргүүлнэ ↻</span></div></div><div class="flip-card-back"><h3>${title}</h3><p>${escapeHTML(photo.place)} · ${escapeHTML(photo.date||'')}</p><p>❤️ ${photo.likes||0}</p><button class="btn btn-light btn-sm" type="button" data-like="${photo.id}">Like ❤️</button></div></div></article></div>`;
}
export function renderCards(list) { cards.innerHTML=list.map(makeCard).join('') || '<p class="text-body-secondary">Зураг олдсонгүй.</p>'; count.textContent=`Нийт ${list.length} зураг`; }
export function currentList() { let list=searchPhotos(album.photos,search.value); if(place.value)list=filterByPlace(list,place.value); if(sort.value==='likes')list=sortByLikes(list); return list; }
function refreshPlaces() { const previous=place.value; const places=[...new Set(album.photos.map(p=>p.place))]; place.innerHTML='<option value="">Бүх газар</option>'+places.map(p=>`<option value="${escapeHTML(p)}">${escapeHTML(p)}</option>`).join(''); place.value=places.includes(previous)?previous:''; }
function refresh() { renderCards(currentList()); }
cards.addEventListener('click',event=>{const button=event.target.closest('[data-like]'); if(!button)return; album.like(Number(button.dataset.like));refresh();});
[search,place,sort].forEach(el=>el.addEventListener('input',refresh));
document.getElementById('addPhotoForm').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;const title=form.elements.title.value.trim();const location=form.elements.place.value.trim();const date=form.elements.date.value;const message=document.getElementById('addPhotoMessage');const titleResult=validateName(title);const placeResult=validateName(location);if(!titleResult.valid||!placeResult.valid||!date){message.textContent='Нэр, газар (2–50 тэмдэгт, тоогүй) болон огноог зөв бөглөнө үү.';message.className='text-danger mt-2';return;}album.add({title,place:location,date,image:`https://picsum.photos/seed/gallery-${Date.now()}/800/600`,description:`${location} дахь зураг`});form.reset();message.textContent='Зураг амжилттай нэмэгдлээ.';message.className='text-success mt-2';refreshPlaces();refresh();});
refreshPlaces();refresh();
console.table(album.featured);
