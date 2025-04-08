import { Component } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { TableCountryComponent } from "../../components/table-country/table-country.component";

@Component({
  selector: 'by-region-page',
  imports: [TableCountryComponent],
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent { }
