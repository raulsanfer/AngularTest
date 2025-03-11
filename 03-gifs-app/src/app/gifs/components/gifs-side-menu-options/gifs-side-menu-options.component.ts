import { GifService } from './../../services/gifs.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuOption{
  label:string,
  subLabel:string,
  route:string,
  icon:string
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink],
  templateUrl: './gifs-side-menu-options.component.html'  
})
export class GifsSideMenuOptionsComponent { 

  gifService = inject(GifService);

  meunOptions:MenuOption[] = [
    {
      icon : 'fa-solid fa-chart-line',
      label:'Trending',
      subLabel:'Gifs Populares',
      route:'/dashboard/trending'
    },
    {
      icon : 'fa-solid fa-magnifying-glass',
      label:'Buscador',
      subLabel:'Buscar gifs',
      route:'/dashboard/search'
    }
  ]

  removeHistoryItem (clave:string){
    this.gifService.removeHistoryItem(clave);
  }
 }

//  {
//   icon : '',
//   label:'',
//   subLabel:'',
//   router:''
// }