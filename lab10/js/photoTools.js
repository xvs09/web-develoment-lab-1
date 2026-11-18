// Бүх функц оролтын массивыг өөрчлөхгүй; for/while ашиглаагүй.
export const sortByLikes = photos => [...photos].sort((a,b) => b.likes - a.likes);
export const sortByDate = photos => [...photos].sort((a,b) => String(b.date).localeCompare(String(a.date)));
export const filterByPlace = (photos, place) => photos.filter(p => String(p.place).toLocaleLowerCase().includes(String(place).trim().toLocaleLowerCase()));
export const searchPhotos = (photos, term) => { const q=String(term).trim().toLocaleLowerCase(); return photos.filter(p => !q || [p.title,p.place,...(p.tags||[])].some(v => String(v).toLocaleLowerCase().includes(q))); };
export const filterByTag = (photos, tag) => photos.filter(p => (p.tags||[]).includes(tag));
export const topLiked = (photos, count=3) => sortByLikes(photos).slice(0,Math.max(0,count));
export const addPhotoToList = (photos, photo) => [...photos, structuredClone(photo)];
export const removePhotoFromList = (photos, id) => photos.filter(p => p.id !== id);
export const groupByPlace = photos => Object.groupBy ? Object.groupBy(photos,p=>p.place) : photos.reduce((groups,p)=>({...groups,[p.place]:[...(groups[p.place]||[]),p]}),{});
