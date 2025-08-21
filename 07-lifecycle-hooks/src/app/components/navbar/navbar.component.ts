import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: [`
    nav {
      display: flex;
    },
    .active{
      color:#341162;
      font-weight: bold;
    }
  `]
})
export class NavbarComponent { }
