import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { routes } from './../../../app.routes';
import { Component, inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  router = inject(Router);

  routes = routes.map(route => ({
    path: route.path,
    title: `${route.title ?? 'No hay titulo'}`
  })).filter(route => route.path !== '*');

  //cuando lleva el simbolo de dolar $ es un observable o suscripcion
  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event) => event.url),
    map((url) => routes.find(route => `/${route.path}` === url)?.title || 'No hay titulo')
  );
//this.routes.find(route => route.path === this.router.url)?.title
  //observables solo se emiten cuando hay cambios o alguien se suscribe

  //transformar obervables a señales ... (investigar)
}
