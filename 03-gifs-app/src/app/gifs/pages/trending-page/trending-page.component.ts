import {Component, computed, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gis-content/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent { 
  
  verMasonry = signal(false);

  gifService = inject(GifService);
  //listGifs = signal(gifService.);

  

}
