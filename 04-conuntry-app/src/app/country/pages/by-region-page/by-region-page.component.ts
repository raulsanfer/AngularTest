import { Component, inject, signal } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { TableCountryComponent } from "../../components/table-country/table-country.component";
import { RegionSearchComponent } from "../../components/region-search/region-search/region-search.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-region-page',
  imports: [RegionSearchComponent, TableCountryComponent],
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent { 
  countryService = inject(CountryService);
  query = signal<string>('');
  
//  console.log('llegando a api');
  //console.log('query', this.query());
  countryResource = rxResource({
  request: () =>({query:this.query()}),
  loader: ({request})=>{        
   if (!request.query) return of([]);  
       return this.countryService.searchByRegion(request.query);
     }
   })
  //this.query()
}
