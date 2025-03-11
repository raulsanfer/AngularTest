import { GifMapper } from './../mapper/gif.mapper';
import { GifInterface } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import {computed, effect, inject, Injectable, signal} from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { map, tap } from 'rxjs';


const loadFromLocalStorage = (): Record<string, GifInterface[]> =>{
    const historyCache = localStorage.getItem('gifHistory');
    return historyCache ? JSON.parse(historyCache) : {};
}

@Injectable({providedIn:'root'})
export class GifService{

    private http = inject(HttpClient);
   
    trendingGifs = signal<GifInterface[]>([]);
    foundGifs = signal<GifInterface[]>([]);
    searchHistory = signal<Record<string, GifInterface[]>>(
        loadFromLocalStorage()
    );

    saveToLocalStorage = effect(()=>{
        localStorage.setItem('gifHistory',  JSON.stringify(this.searchHistory()));
        //console.log(`Character count: ${this.searchHistory.length}`);
    })
        
    searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()));

    constructor() {
        this.loadTrendinggifs();  
        console.log("servicio creado");
    }

    loadTrendinggifs(){
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
            params:{
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe((resp)=>{
            
            const gifMappeds = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifMappeds);
            console.log(gifMappeds);
        })
    }

    removeHistoryItem(tag:string)
    {
        // Obtén el valor actual del signal
        console.log(this.searchHistory());
        const currentHistory = this.searchHistory();
        const { [tag]: _, ...newHistory } = currentHistory;
        this.searchHistory.set(newHistory);
        console.log(this.searchHistory());
        this.saveToLocalStorage;
    }

    getHistoryGif(query:string):GifInterface[]{
        return this.searchHistory()[query] ?? [];
    }
    
    searchGifs(query:string){
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
            params:{
                api_key: environment.giphyApiKey,
                q:query,
                limit: 20
            }
        })  
        .pipe(
            map(({data}) => data),
            map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
            tap(items=>{                
                this.searchHistory.update((history)=>({
                    ...history,
                    [query]:items,
                }));
        })
        )
        
        // .subscribe((resp)=>{
            
        //     const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     this.foundGifs.set(gifs);
        //     console.log(gifs);
        // })
    }
}