import { RouterLink, RouterLinkActive } from '@angular/router';
import { reactiveRoutes } from './../../../reactive/reactive.routes';
import { Component } from '@angular/core';

interface MenuITem {
  title:string;
  route:string;  
}

const reactiveItems  = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu.component.html'  
})
export class SideMenuComponent {
  reactiveMenu: MenuITem[] = reactiveItems.filter((item)=>item.path !== '**').map(item => ({
    route:`reactive/${item.path}`,
    title: `${item.title}`,
  }));

  authMenu: MenuITem[] = [{
    route: './auth',
    title: 'Register'
  }];

  countryMenu: MenuITem[] = [{
    route: './country',
    title: 'Paises'
  }];


}
