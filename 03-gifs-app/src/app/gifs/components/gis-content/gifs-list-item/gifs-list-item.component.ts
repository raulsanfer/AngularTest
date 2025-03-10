import { Component, signal, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html'  
})
export class GifsListItemComponent { 

  imageUrl= input.required<string>();//signal('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg');

}
