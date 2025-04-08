import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAppComponent } from "./country/shared/components/footer-app/footer-app.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
