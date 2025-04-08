import {  Component } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search.component";
import { TableCountryComponent } from "../../components/table-country/table-country.component";

@Component({
  selector: 'by-capital-page.component',
  imports: [CountrySearchComponent, TableCountryComponent] ,
  templateUrl: './by-capital-page.component.html',  
})
export class ByCapitalPageComponent { 

  onSearch(query:string){

    console.log(query);
    
  }
}
