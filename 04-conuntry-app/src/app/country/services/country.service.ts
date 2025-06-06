import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { Observable, map, catchError, of, throttleTime, throwError,delay, tap } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();


  searchByRegion(query:string):Observable<Country[]>{
    query = query.toLowerCase();

    //console.log('buscando en cache', query);  
    if(this.queryCacheRegion.has(query)){
      return of(this.queryCacheRegion.get(query)!);
    } 

    //console.log(`emitiendo valor ${query}`);
    console.log('llegando a api');
    //return of([]);

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.fromRESTCountries(restCountries)),      
      tap((countries) => { this.queryCacheRegion.set(query, countries); }),
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return throwError(
          ()=> new Error('No se pudo obtener paises con ese query: ' + error.message)
        ); // Return an empty array or handle the error as needed
      })
    )
  }

  searchByCapital(query:string):Observable<Country[]>{
    query = query.toLowerCase();

    //console.log('buscando en cache', query);  
    if(this.queryCacheCapital.has(query)){
      return of(this.queryCacheCapital.get(query)!);
    } 

    //console.log(`emitiendo valor ${query}`);
    console.log('llegando a api');
    //return of([]);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.fromRESTCountries(restCountries)),      
      tap((countries) => { this.queryCacheCapital.set(query, countries); }),
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return throwError(
          ()=> new Error('No se pudo obtener paises con ese query: ' + error.message)
        ); // Return an empty array or handle the error as needed
      })
    )
  }
  
  searchbByCountry(query:string):Observable<Country[]>{
    query = query.toLowerCase();

     if(this.queryCacheCountry.has(query)){
      return of(this.queryCacheCountry.get(query)!);
    } 
console.log('llegando a api');
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map((restCountries) => CountryMapper.fromRESTCountries(restCountries)),
      tap((countries) => { this.queryCacheCountry.set(query, countries); }),      
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return throwError(
          ()=> new Error('No se pudo obtener paises con ese query: ' + error.message)
        ); // Return an empty array or handle the error as needed
      })
    )
  }

}
