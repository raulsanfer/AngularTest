import { Component, inject, resource, signal, Query } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search.component";
import { TableCountryComponent } from "../../components/table-country/table-country.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'by-capital-page.component',
  imports: [CountrySearchComponent, TableCountryComponent] ,
  templateUrl: './by-capital-page.component.html',  
})
export class ByCapitalPageComponent { 
  
  countryService = inject(CountryService);
  
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query1 = signal(this.queryParam);

  //uso de resource con Observable
  countryResource = rxResource({
    request: () =>({query:this.query1()}),
    loader: ({request})=>{    
      console.log({query1: request.query});  
      // If no query is provided, return an empty observable
      if (!request.query) return of([]);      
      this.router.navigate(['/country/by-capital'],{
        queryParams: {
          query: request.query
        }
      });      
      // Directly return the observable from the service
      return this.countryService.searchByCapital(request.query);
    }
  })

  //uso de resource con promesas
  // countryResource = resource({
  //   request: () =>({query:this.query()}),
  //   loader: async({request})=>{      
  //     if(!request.query) return [];

  //     //necesitamos enviar una promesa, como el servicio retorna Observable lo convertimos a promesa con firstValueFrom
  //     return await firstValueFrom(this.countryService.searchByCapital(request.query));
  //   }
  // })
}

  //el uso de resource permite que podamos hacer un request y que el loader se encargue de manejar la promesa

  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<Country[]>([]);


  // onSearch(query:string){
  //   if(this.isLoading()) return;
    
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //   .subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);      
  //       this.countries.set(countries);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(`No se encontro un país con esa capital : ${query}`);
  //     }
  //   });
  //   // console.log(response);
  //   console.log(query);
    
 // }
//}
