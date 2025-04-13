import {  Component, inject, signal } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search.component";
import { TableCountryComponent } from "../../components/table-country/table-country.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface'; // Ensure this path is correct


@Component({
  selector: 'by-capital-page.component',
  imports: [CountrySearchComponent, TableCountryComponent] ,
  templateUrl: './by-capital-page.component.html',  
})
export class ByCapitalPageComponent { 

  countryService = inject(CountryService);
  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<Country[]>([]);


  onSearch(query:string){
    if(this.isLoading()) return;
    
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
    .subscribe((countries) => {
      this.isLoading.set(false);      
      this.isError.set(null); 
      this.countries.set(countries);
      // const countryArray = CountryMapper.fromRESTCountries(countries);
      // console.log(countryArray);
    });
    // console.log(response);
    console.log(query);
    
  }
}
