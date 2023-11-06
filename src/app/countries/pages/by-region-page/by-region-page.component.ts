import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})

export class ByRegionPageComponent {

  public placeHolder: string = "Buscar por región";

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {

  }

  searchByRegion(term: Region) {

    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }

}
