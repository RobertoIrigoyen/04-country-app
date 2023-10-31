import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {

  public placeHolder: string = "Buscar por capital";

  searchByCapital(term: string) {
    console.log('Desde byCapital');
    console.log({ term });
  }
}
