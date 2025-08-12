import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent { 
  name = signal('John Doe');

  upperCase = signal(true);

  heroes = signal(heroes);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
    
  } 
}
