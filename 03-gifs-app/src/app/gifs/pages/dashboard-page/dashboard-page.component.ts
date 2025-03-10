import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "../../components/gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptionsComponent } from "../../components/gifs-side-menu-options/gifs-side-menu-options.component";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html'  
})
export default class DashboardPageComponent { 

}
