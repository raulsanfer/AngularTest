import {Component } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { TableCountryComponent } from "../../components/table-country/table-country.component";

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchComponent, TableCountryComponent],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

 }
