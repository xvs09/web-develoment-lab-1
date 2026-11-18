export class Album {
  #photos;
  constructor(photos=[]) { this.#photos=structuredClone(photos); }
  get size() { return this.#photos.length; }
  get photos() { return structuredClone(this.#photos); }
  find(id) { const photo=this.#photos.find(p=>p.id===Number(id)); return photo ? structuredClone(photo) : undefined; }
  add(photo) {
    const value=structuredClone(photo);
    const id=value.id == null ? Math.max(0,...this.#photos.map(p=>p.id)) + 1 : Number(value.id);
    if(this.#photos.some(p=>p.id===id)) throw new Error('ID давхардсан байна');
    const result={...value,id,likes:value.likes??0,tags:value.tags??[]};
    this.#photos.push(result);
    return structuredClone(result);
  }
  remove(id) { const index=this.#photos.findIndex(p=>p.id===Number(id)); if(index<0)return false; this.#photos.splice(index,1); return true; }
  like(id) { const photo=this.#photos.find(p=>p.id===Number(id)); if(!photo)return undefined; photo.likes=(photo.likes||0)+1; return structuredClone(photo); }
  toJSON() { return JSON.stringify(this.#photos); }
  static from(json) { const data=typeof json==='string'?JSON.parse(json):json; if(!Array.isArray(data))throw new TypeError('Зургийн массив шаардлагатай'); return new this(data); }
}
