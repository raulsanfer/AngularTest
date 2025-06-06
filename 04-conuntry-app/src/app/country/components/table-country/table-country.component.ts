import {  BootstrapOptions, Component,input} from '@angular/core';
import { Country } from '../../interfaces/country.interface';	
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'table-country',
  imports: [DecimalPipe],
  templateUrl: './table-country.component.html'
})
export class TableCountryComponent {
  countries = input.required<Country[]>(); // Assuming RESTCountry is the type of the countries array

  errorMessage = input<string|unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
 }
