import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})

export class ByRegionPageComponent implements OnInit {

  public placeHolder: string = "Buscar por región";

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  public isLoading: boolean = false;


  constructor(private countriesService: CountriesService) {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchByRegion(term: Region) {

    this.selectedRegion = term;
    this.isLoading = true;
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
