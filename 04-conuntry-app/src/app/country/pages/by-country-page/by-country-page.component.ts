import {Component,inject,signal,resource } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { TableCountryComponent } from "../../components/table-country/table-country.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchComponent, TableCountryComponent],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    request: () =>({query:this.query()}),
    loader: ({request})=>{      
      // If no query is provided, return an empty observable
      if (!request.query) return of([]);

      // Directly return the observable from the service
      return this.countryService.searchbByCountry(request.query);
    }
  })

  // countryResource = resource({
  //   request: () =>({query:this.query()}),
  //   loader: async({request})=>{      
  //     if(!request.query) return [];

  //     //necesitamos enviar una promesa, como el servicio retorna Observable lo convertimos a promesa con firstValueFrom
  //     return await firstValueFrom(this.countryService.searchbByCountry(request.query));
  //   }
  // })
 }
