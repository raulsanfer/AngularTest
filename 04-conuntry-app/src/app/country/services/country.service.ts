import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query:string):Observable<Country[]>{
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.fromRESTCountries(restCountries))
    )
  }
  
}
