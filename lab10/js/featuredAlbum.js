import {Album} from './album.js';
import {topLiked} from './photoTools.js';
export class FeaturedAlbum extends Album {
  constructor(photos=[]) { super(photos); }
  get featured() { return topLiked(this.photos,3); }
}
