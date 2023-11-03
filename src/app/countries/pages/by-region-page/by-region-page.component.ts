import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {

  public placeHolder: string = "Buscar por región"

  public countries: Country[] = []

  constructor(private countriesService: CountriesService) {

  }

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }

}
