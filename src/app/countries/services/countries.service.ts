import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiURL: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${term}`

        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            )

    }
    searchCountry(country: string): Observable<Country[]> {
        const url = `${this.apiURL}/name/${country}`

        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            )

    }
    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.apiURL}/region/${region}`

        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            )

    }
}