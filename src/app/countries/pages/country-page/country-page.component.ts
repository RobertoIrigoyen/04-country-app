import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }


  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('');
        } else {
          console.log(country);
          return this.country = country;
          return;
        }
      })
  }
}
