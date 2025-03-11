import { GifInterface } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper{
    static mapGiphyItemTogif(giphyItem:GiphyItem): GifInterface{
        return{
            id:giphyItem.id,
            title:giphyItem.title,
            url:giphyItem.images.original.url
        };
    }
    static mapGiphyItemsToGifArray(items:GiphyItem[]):GifInterface[]{
        return items.map(this.mapGiphyItemTogif);
    }
}