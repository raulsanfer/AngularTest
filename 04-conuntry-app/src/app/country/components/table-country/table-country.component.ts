import {  Component,input} from '@angular/core';
import { Country } from '../../interfaces/country.interface';	

@Component({
  selector: 'table-country',
  imports: [],
  templateUrl: './table-country.component.html'
})
export class TableCountryComponent {
  countries = input.required<Country[]>(); // Assuming RESTCountry is the type of the countries array
 }
