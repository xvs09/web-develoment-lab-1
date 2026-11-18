// Алдааг зассан хувилбар. tests/lab10.test.js-д шалгана.
export const firstPhoto = photos => photos.length ? photos[0] : undefined;
export const incrementLikes = photo => ({...structuredClone(photo),likes:(photo.likes||0)+1});
export const uniquePlaces = photos => [...new Set(photos.map(p=>p.place))];
