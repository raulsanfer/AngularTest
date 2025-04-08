import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html'
})
export class CountrySearchComponent { 

  value = output<string>();
  placeholder = input('Buscar por capital');
 

}
