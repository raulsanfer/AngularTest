import { Component, computed, inject } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { GifService } from '../../services/gifs.service';
import { GifsListComponent } from "../../components/gis-content/gifs-list/gifs-list.component";

@Component({
  selector: 'gif-history',
  imports: [GifsListComponent],
  templateUrl: './gif-history.component.html'
  
})
export default class GifHistoryComponent { 
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params["query"])
    )
  );

  giifsByKey = computed(()=>{
    return this.gifService.getHistoryGif(this.query());
  })

  // inject(ActivatedRoute).params.subscribe((params)=>{
  //   console.log(params);
  // })
}
