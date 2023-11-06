import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiURL: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient) { }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(error => of([])),
                delay(1000)
            );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiURL}/alpha/${code}`

        return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(error => of(null))
            )

    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${term}`

        return this.getCountriesRequest(url)

    }
    searchCountry(country: string): Observable<Country[]> {
        const url = `${this.apiURL}/name/${country}`

        return this.getCountriesRequest(url)

    }
    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.apiURL}/region/${region}`

        return this.getCountriesRequest(url)

    }

}