import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface'; // Ensure this path is correct

export class CountryMapper{
   
    static fromRESTCountries(restCountries: RESTCountry[]): Country[] {
        return restCountries.map(restCountry => this.fromRESTCountry(restCountry));
    
    }

    static fromRESTCountry(restCountry: RESTCountry): Country {
        return {
        coatOfArms: restCountry.coatOfArms.png, // Assuming coatOfArms is an object with a png property
        name: restCountry.translations['spa'].common ?? 'No spansh name',
        cca2: restCountry.cca2,
        capital: Array.isArray(restCountry.capital)
        ? restCountry.capital.join(', ')
        : 'No capital', // Assuming capital is an array, join it to a string
        population: restCountry.population,
        region: restCountry.region,
        subregion: restCountry.subregion,
        flags: {
            png: restCountry.flags.png,
            svg: restCountry.flags.svg
        },
        area: restCountry.area
        };
    }
}   