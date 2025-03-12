import {Component,input, signal,computed } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { GifsListItemComponent } from "../gifs-list-item/gifs-list-item.component";
import { GifInterface } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent,CommonModule],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent { 
  gifs = input.required<GifInterface[]>();  
  masonry = signal<boolean>(false);

  GifsBlocks = computed(()=>{    
    return this.getMasonryGifBlocks();
  });
 
  getMasonryGifBlocks() {
    const itemsPorBloque = 3;
    const gifs = this.gifs();
    const blocks = [];
    let tempBlock = [];

    for (let i = 0; i < gifs.length; i++) {
      tempBlock.push(gifs[i]);
      //console.log(tempBlock[i].url);
      if ((i + 1) % itemsPorBloque === 0 || i === gifs.length - 1) {
        blocks.push(tempBlock);
        tempBlock = [];
      }
    }    
    return blocks;
  }

  cambioVista(e: Event) {    
    const input = e.target as HTMLInputElement;
    const isChecked = input.checked;        
    this.masonry.update(()=>isChecked);
  }
}
