import { GifInterface } from './../../interfaces/gif.interface';
import { Component, inject, signal } from '@angular/core';
import { GifsListItemComponent } from "../../components/gis-content/gifs-list-item/gifs-list-item.component";
import { GifService } from '../../services/gifs.service';
import { GifsListComponent } from "../../components/gis-content/gifs-list/gifs-list.component";

@Component({
  selector: 'app-search-page',
  imports: [GifsListItemComponent, GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 
  gifs = signal<GifInterface[]>([]);
  gifService = inject(GifService);
  
  onSearch(query:string){
    this.gifService.searchGifs(query).subscribe((data)=>{
      this.gifs.set(data);
    }
    );  
    
  }
}
