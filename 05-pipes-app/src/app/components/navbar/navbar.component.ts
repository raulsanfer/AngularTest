import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

routes = routes.map(route=>({
  Title : route.title ?? '',
  Path : route.path ?? '',
}))

 }
