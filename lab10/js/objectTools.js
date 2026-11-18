const copy = value => structuredClone(value);
export const clonePhoto = photo => copy(photo);
export const renamePhoto = (photo, title) => ({...copy(photo), title});
export const setPhotoPlace = (photo, place) => ({...copy(photo), place});
export const addTag = (photo, tag) => ({...copy(photo), tags:[...(photo.tags||[]),tag]});
export const removeTag = (photo, tag) => ({...copy(photo), tags:(photo.tags||[]).filter(t=>t!==tag)});
export const mergePhoto = (photo, updates) => ({...copy(photo),...copy(updates)});
export const photoSummary = ({id,title,place,likes=0}) => ({id,title,place,likes});
export const omitPhotoField = (photo, key) => { const {[key]:unused,...rest}=copy(photo); return rest; };
